// SPDX-License-Identifier: MIT
// WasteSupplyChain Contract for managing a waste supply chain system.

use starknet::ContractAddress;
use core::integer::{u256, i128};
use core::serde::Serde;
use starknet::storage_access::*;
use starknet::storage::*;

#[derive(Copy, Drop, Serde, starknet::Store, PartialEq)]
pub enum WasteType {
    PAPER,
    #[default]
    PETPLASTIC,
    PLASTIC,
    METAL,
    GLASS,
}

#[derive(Copy, Drop, Serde, starknet::Store, PartialEq)]
pub enum ParticipantRole {
    #[default]
    RECYCLER,
    COLLECTOR,
    MANUFACTURER,
}

#[derive(Copy, Drop, Serde, starknet::Store)]
pub struct Waste {
    waste_id: u256,
    waste_type: WasteType,
    weight: u256,
    current_owner: ContractAddress,
    latitude: i128, 
    longitude: i128, 
    recycled_timestamp: u64,
    is_active: bool,
    is_confirmed: bool,
    confirmer: ContractAddress,
}

#[derive(Copy, Drop, Serde, starknet::Store)]
pub struct TransferRecord {
    waste_id: u256,
    from: ContractAddress,
    to: ContractAddress,
    timestamp: u64,
    latitude: i128, 
    longitude: i128, 
    notes: felt252,
}

#[derive(Copy, Drop, Serde, starknet::Store)]
pub struct Participant {
    role: ParticipantRole,
    name: felt252,
    latitude: i128, 
    longitude: i128, 
    is_registered: bool,
    total_waste_processed: u256,
    total_tokens_earned: u256,
}

#[derive(Copy, Drop, Serde, starknet::Store)]
pub struct Incentive {
    waste_type: WasteType,
    reward: u256,
    max_waste_amount: u256,
    rewarder: ContractAddress,
    is_active: bool,
}

#[starknet::interface]
pub trait IWasteSupplyChain<TContractState> {
    fn register_participant(
        ref self: TContractState,
        role: ParticipantRole,
        name: felt252,
        latitude: i128,
        longitude: i128
    );

    fn set_incentive(
        ref self: TContractState,
        waste_type: WasteType,
        reward: u256,
        max_amount: u256
    );

    fn update_incentive(
        ref self: TContractState,
        incentive_id: u256,
        new_reward: u256,
        new_max_amount: u256
    );

    fn deactivate_incentive(ref self: TContractState, incentive_id: u256);

    fn confirm_waste_details(ref self: TContractState, waste_id: u256);

    fn reset_waste_details(ref self: TContractState, waste_id: u256);

    fn _reward_tokens(ref self: TContractState, waste_id: u256);

    fn deactivate_waste(ref self: TContractState, waste_id: u256);

    fn recycle_waste(
        ref self: TContractState,
        waste_type: WasteType,
        weight: u256,
        latitude: i128,
        longitude: i128
    ) -> u256;

    fn transfer_waste(
        ref self: TContractState,
        waste_id: u256,
        to: ContractAddress,
        latitude: i128,
        longitude: i128,
        notes: felt252
    );

    fn transfer_collected_waste(
        ref self: TContractState,
        waste_type: WasteType,
        to: ContractAddress,
        latitude: i128,
        longitude: i128,
        notes: felt252
    );

    fn donate_to_charity(ref self: TContractState, amount: u256);
    fn set_charity_contract(ref self: TContractState, new_charity: ContractAddress);
    fn set_percentage(ref self: TContractState, owner_percent: u256, collector_percent: u256);

    // View functions
    fn get_waste(self: @TContractState, waste_id: u256) -> Waste;
    fn get_participant_wastes(self: @TContractState, participant: ContractAddress) -> Array<u256>;
    fn get_waste_transfer_history(self: @TContractState, waste_id: u256) -> Array<TransferRecord>;
    fn get_participant_info(self: @TContractState, participant: ContractAddress) -> Participant;
    fn get_incentives(self: @TContractState, waste_type: WasteType) -> Array<Incentive>;
    fn get_incentive(self: @TContractState, incentive_id: u256) -> Incentive;
    fn get_manufacturer_incentive(self: @TContractState, manufacturer: ContractAddress, waste_type: WasteType) -> Option<Incentive>;
    fn get_metrics(self: @TContractState) -> (u256, u256);
    fn get_waste_type_string(self: @TContractState, waste_type: WasteType) -> felt252;
    fn get_participant_role_string(self: @TContractState, role: ParticipantRole) -> felt252;
    fn get_supply_chain_stats(self: @TContractState) -> (u256, u256, u256);
}

#[starknet::contract]
pub mod WasteSupplyChain {

    use super::{
        Waste, TransferRecord, Participant, Incentive, WasteType, ParticipantRole
    };
    use starknet::{
        ContractAddress, get_caller_address, get_block_timestamp,
    };
    use starknet::storage_access::{
        StorageAccess, StorageBaseAddress
    };
    use starknet::storage::{
        StorageMap, StorageMapMembershipAccess, StorageMapRead, StorageMapWrite, 
        Store, StorageMembershipTest, Map, MapTrait, Vec, VecTrait, MutableVecTrait, StroragePointerReadAcess, StoragePointerWriteAccess
    };

    use core::{
        integer::{U256IntoFelt252, Felt252IntoU256, U256TryIntoFelt252, i128, u256, u32, u8},
        traits::{Into, TryInto},
        array::{ArrayTrait, Array, SpanTrait},
        zeroable::Zeroable,
        option::OptionTrait
    };

    use openzeppelin::{
        token::erc20::interface::{IERC20Dispatcher, IERC20DispatcherTrait},
        access::{
            ownable::OwnableComponent
        },
        security::{
            reentrancyguard::ReentrancyGuardComponent
        }
    };

    component!(path: OwnableComponent, storage: ownable_storage, event: OwnableEvent);
    component!(path: ReentrancyGuardComponent, storage: guard_storage, event: ReentrancyGuardEvent);

    #[abi(embed_v0)]
    impl OwnableImpl = OwnableComponent::OwnableImpl<ContractState>;

    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;
    
    impl ReentrancyGuardInternalImpl = ReentrancyGuardComponent::InternalImpl<ContractState>;
 
    #[storage]
    struct Storage {
        #[substorage(v0)]
        ownable_storage: OwnableComponent::Storage,
        #[substorage(v0)]
        guard_storage: ReentrancyGuardComponent::Storage,
        scavenger_token: ContractAddress,
        wastes: Map<u256, Waste>,
        waste_transfer_history: Map<u256, Vec<TransferRecord>>,
        participants: Map<ContractAddress, Participant>,
        participant_wastes: Map<ContractAddress, Vec<u256>>,
        incentive: Map<u256, Incentive>,
        rewarder_incentives: Map<ContractAddress, Vec<u256>>,
        general_incentives: Map<WasteType, Vec<u256>>,
        next_waste_id: u256,
        charity_contract: ContractAddress,
        next_incentive_id: u256,
        collector_percentage: u256,
        owner_percentage: u256,
        total_tokens_earned: u256,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        WasteRecycled: WasteRecycled,
        WasteTransferred: WasteTransferred,
        ParticipantRegistered: ParticipantRegistered,
        TokensRewarded: TokensRewarded,
        DonationMade: DonationMade,
        WasteConfirmed: WasteConfirmed,
        IncentiveSet: IncentiveSet,
        #[flat]
        ReentrancyGuardEvent: ReentrancyGuardComponent::Event,
        #[flat]
        OwnableEvent: OwnableComponent::Event,
    }

    #[derive(Drop, starknet::Event)]
    pub struct WasteRecycled {
        #[key]
        waste_id: u256,
        #[key]
        recycler: ContractAddress,
        waste_type: WasteType,
        weight: u256,
        latitude: i128,
        longitude: i128,
    }

    #[derive(Drop, starknet::Event)]
    pub struct WasteTransferred {
        #[key]
        waste_id: u256,
        #[key]
        from: ContractAddress,
        #[key]
        to: ContractAddress,
        latitude: i128,
        longitude: i128,
    }

    #[derive(Drop, starknet::Event)]
    pub struct ParticipantRegistered {
        #[key]
        participant: ContractAddress,
        role: ParticipantRole,
        name: felt252,
        latitude: i128,
        longitude: i128,
    }

    #[derive(Drop, starknet::Event)]
    pub struct TokensRewarded {
        #[key]
        recipient: ContractAddress,
        amount: u256,
        #[key]
        waste_id: u256,
    }

    #[derive(Drop, starknet::Event)]
    pub struct DonationMade {
        #[key]
        donor: ContractAddress,
        amount: u256,
        #[key]
        charity_contract: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct WasteConfirmed {
        #[key]
        waste_id: u256,
        #[key]
        confirmer: ContractAddress,
    }

    #[derive(Drop, starknet::Event)]
    pub struct IncentiveSet {
        #[key]
        rewarder: ContractAddress,
        waste_type: WasteType,
        price: u256,
        max_amount: u256,
    }

    #[constructor]
    fn constructor(ref self: ContractState, scavenger_token: ContractAddress) {
        self.scavenger_token.write(scavenger_token);
        self.next_waste_id.write(1_u256);
        self.next_incentive_id.write(1_u256);
        self.collector_percentage.write(5_u256);
        self.owner_percentage.write(5_u256 * 10_u256);
        self.total_tokens_earned.write(0_u256);
        
        // Initialize Ownable
        let caller = get_caller_address();
        self.ownable_storage.initializer(caller);
    }
   
    #[abi(embed_v0)]
    impl WasteSupplyChain of super::IWasteSupplyChain<ContractState> {
        fn register_participant(
            ref self: ContractState,
            role: ParticipantRole,
            name: felt252,
            latitude: i128,
            longitude: i128
        ) {
            let caller = get_caller_address();
            assert(!self.participants.read(caller).is_registered, 'Already registered');

            let participant = Participant {
                role,
                name,
                latitude,
                longitude,
                is_registered: true,
                total_waste_processed: 0_u256,
                total_tokens_earned: 0_u256,
            };

            self.participants.write(caller, participant);
            self.emit(Event::ParticipantRegistered(ParticipantRegistered {
                participant: caller,
                role: participant.role,
                name: participant.name,
                latitude: participant.latitude.try_into().unwrap(),
                longitude: participant.longitude.try_into().unwrap(),
            }));
        }

        fn set_incentive(
            ref self: ContractState,
            waste_type: WasteType,
            reward: u256,
            max_amount: u256
        ) {
            InternalFunctions::only_manufacturer(@self);

            let incentive_id = self.next_incentive_id.read();
            let caller = get_caller_address();

            let incentive = Incentive {
                waste_type,
                reward,
                max_waste_amount: max_amount,
                rewarder: caller,
                is_active: true,
            };

            self.incentive.write(incentive_id, incentive);
            
            let mut rewarder_incentives = self.rewarder_incentives.read(caller);
            rewarder_incentives.append(incentive_id);
            self.rewarder_incentives.write(caller, rewarder_incentives);

            let mut general_incentives = self.general_incentives.read(waste_type);
            general_incentives.append(incentive_id);
            self.general_incentives.write(waste_type, general_incentives);

            self.next_incentive_id.write(incentive_id + 1_u256);
            self.emit(Event::IncentiveSet(IncentiveSet {
                rewarder: caller,
                waste_type: incentive.waste_type,
                price: incentive.reward,
                max_amount: incentive.max_waste_amount,
            }));
        }

        fn update_incentive(
            ref self: ContractState,
            incentive_id: u256,
            new_reward: u256,
            new_max_amount: u256
        ) {
            let caller = get_caller_address();
            let mut incentive = self.incentive.read(incentive_id);
            assert(incentive.rewarder == caller, 'Not incentive owner');
            assert(incentive.is_active, 'Incentive not active');

            incentive.reward = new_reward;
            incentive.max_waste_amount = new_max_amount;

            self.incentive.write(incentive_id, incentive);
            self.emit(Event::IncentiveSet(IncentiveSet {
                rewarder: caller,
                waste_type: incentive.waste_type,
                price: new_reward,
                max_amount: new_max_amount,
            }));
        }

        fn deactivate_incentive(ref self: ContractState, incentive_id: u256) {
            let caller = get_caller_address();
            let mut incentive = self.incentive.read(incentive_id);
            assert(incentive.rewarder == caller, 'Not incentive owner');
            assert(incentive.is_active, 'Already inactive');

            incentive.is_active = false;
            self.incentive.write(incentive_id, incentive);
        }

        fn confirm_waste_details(ref self: ContractState, waste_id: u256) {
            InternalFunctions::waste_exists(@self, waste_id);
            InternalFunctions::only_registered(@self);
            let caller = get_caller_address();
            let mut waste = self.wastes.read(waste_id);
            assert(waste.current_owner != caller, 'Owner cannot confirm');
            assert(!waste.is_confirmed, 'Already confirmed');
            waste.is_confirmed = true;
            waste.confirmer = caller;
            self.wastes.write(waste_id, waste);
            self.emit(Event::WasteConfirmed(WasteConfirmed {
                waste_id: waste_id,
                confirmer: caller,
            }));
        }

        fn reset_waste_details(ref self: ContractState, waste_id: u256) {
            self.waste_exists(waste_id);
            self.only_registered();
            self.only_waste_owner(waste_id);

            let mut waste = self.wastes.read(waste_id);
            waste.is_confirmed = false;
            waste.confirmer = Zeroable::zero();
            self.wastes.write(waste_id, waste);
            
            self.emit(Event::WasteConfirmed(WasteConfirmed {
                waste_id,
                confirmer: get_caller_address(),
            }));
        }

        fn _reward_tokens(ref self: ContractState, waste_id: u256) {
            // Get waste details and history
            let history = self.waste_transfer_history.read(waste_id);
            let waste = self.wastes.read(waste_id);
            let weight = waste.weight;
            let waste_type = waste.waste_type;
            let manufacturer = waste.current_owner;
            
            // Get incentive details
            let incentive = self.get_manufacturer_incentive(manufacturer, waste_type);
            let total_reward = incentive.reward * weight;
            let mut current_reward = total_reward;
            
            // Update total tokens earned
            self.total_tokens_earned.write(self.total_tokens_earned.read() + total_reward);
            
            // Get percentages
            let collector_percentage = self.collector_percentage.read();
            let owner_percentage = self.owner_percentage.read();
            
            // Get token contract
            let token = IERC20Dispatcher { 
                contract_address: self.scavenger_token.read() 
            };
            
            // Process rewards
            let mut idx: u32 = 1;
            loop {
                if idx >= history.len() - 1 {
                    break;
                }
                
                let record = history.get(idx).unwrap();
                let participant = record.to;
                
                // Calculate shares
                let collector_share = (current_reward * collector_percentage) / 100_u256;
                let owner_share = (total_reward * owner_percentage) / 100_u256;
                
                // Transfer tokens
                token.transfer_from(manufacturer, participant, collector_share);
                token.transfer_from(manufacturer, self.get_owner(), owner_share);
                
                // Update rewards
                current_reward -= collector_share + owner_share;
                
                // Update participant stats
                let mut participant_info = self.participants.read(participant);
                participant_info.total_tokens_earned += collector_share;
                self.participants.write(participant, participant_info);
                
                    // Emit reward events
                self.emit(Event::TokensRewarded(TokensRewarded {
                    recipient: participant,
                    amount: collector_share,
                    waste_id: waste_id,
                }));
                self.emit(Event::TokensRewarded(TokensRewarded {
                    recipient: self.get_owner(),
                    amount: owner_share,
                    waste_id: waste_id,
                }));
                
                idx += 1;
            }

            // Reward recycler
            let recycler = history.get(0).unwrap().to;
            let recycler_reward = current_reward;
            
            if recycler_reward > 0 {
                // Transfer tokens to recycler
                token.transfer_from(manufacturer, recycler, recycler_reward);
                
                // Update recycler stats
                let mut recycler_info = self.participants.read(recycler);
                recycler_info.total_tokens_earned += recycler_reward;
                self.participants.write(recycler, recycler_info);
                
                // Emit recycler reward event
                self.emit(Event::TokensRewarded(TokensRewarded {
                    recipient: recycler,
                    amount: recycler_reward,
                    waste_id: waste_id,
                }));
            }
        }

        fn deactivate_waste(ref self: ContractState, waste_id: u256) {
            Ownable::only_owner(self);
            waste_exists(self, waste_id);
            let mut waste = self.wastes.read(waste_id);
            waste.is_active = false;
            self.wastes.write(waste_id, waste);
        }

        fn recycle_waste(
            ref self: ContractState,
            waste_type: WasteType,
            weight: u256,
            latitude: i128,
            longitude: i128
        ) -> u256 {
            InternalFunctions::only_registered(@self);
            let caller = get_caller_address();
            let waste_id = self.next_waste_id.read();

            let waste = Waste {
                waste_id,
                waste_type,
                weight,
                current_owner: caller,
                latitude,
                longitude,
                recycled_timestamp: get_block_timestamp(),
                is_active: true,
                is_confirmed: false,
                confirmer: Zeroable::zero(),
            };

            self.wastes.write(waste_id, waste);
            let mut wastes = self.participant_wastes.read(caller);
            wastes.append(waste_id);
            self.participant_wastes.write(caller, wastes);

            self.next_waste_id.write(waste_id + 1_u256);
            self.emit(Event::WasteRecycled(WasteRecycled {
                waste_id: waste.waste_id,
                recycler: waste.current_owner,
                waste_type: waste.waste_type,
                weight: waste.weight,
                latitude: waste.latitude.try_into().unwrap(),
                longitude: waste.longitude.try_into().unwrap(),
            }));
            waste_id
        }

        fn transfer_waste(
            ref self: ContractState,
            waste_id: u256,
            to: ContractAddress,
            latitude: i128,
            longitude: i128,
            notes: felt252
        ) {
            InternalFunctions::only_registered(@self);
            InternalFunctions::waste_exists(@self, waste_id);
            InternalFunctions::only_waste_owner(@self, waste_id);

            let caller = get_caller_address();
            let mut waste = self.wastes.read(waste_id);
            let to_participant = self.participants.read(to);
            
            assert(to_participant.is_registered, 'Recipient not registered');
            assert(InternalFunctions::is_valid_transfer(@self, self.participants.read(caller).role, to_participant.role), 'Invalid transfer');

            let transfer_record = TransferRecord {
                waste_id,
                from: caller,
                to,
                timestamp: get_block_timestamp(),
                latitude,
                longitude,
                notes,
            };

            let mut transfer_history = self.waste_transfer_history.read(waste_id);
            transfer_history.append(transfer_record);
            self.waste_transfer_history.write(waste_id, transfer_history);

            waste.current_owner = to;
            self.wastes.write(waste_id, waste);

            InternalFunctions::_remove_waste_from_participant(ref self, caller, waste_id);
            let mut to_wastes = self.participant_wastes.read(to);
            to_wastes.append(waste_id);
            self.participant_wastes.write(to, to_wastes);

            self.emit(Event::WasteTransferred(WasteTransferred{
                waste_id: transfer_record.waste_id,
                from: transfer_record.from,
                to: transfer_record.to,
                latitude: transfer_record.latitude,
                longitude: transfer_record.longitude,
                        }));
        }

        fn transfer_collected_waste(
            ref self: ContractState,
            waste_type: WasteType,
            to: ContractAddress,
            latitude: i128,
            longitude: i128,
            notes: felt252
        ) {
            InternalFunctions::only_registered(@self);
            let caller = get_caller_address();
            let caller_info = self.participants.read(caller);
            let to_info = self.participants.read(to);

            assert(to_info.is_registered, 'Recipient not registered');
            assert(InternalFunctions::is_valid_transfer(@self, caller_info.role, to_info.role), 'Invalid transfer');

            let waste_id = self.next_waste_id.read();
            let waste = Waste {
                waste_id,
                waste_type,
                weight: 0_u256,  // Weight will be confirmed by manufacturer
                current_owner: to,
                latitude,
                longitude,
                recycled_timestamp: get_block_timestamp(),
                is_active: true,
                is_confirmed: false,
                confirmer: Zeroable::zero(),
            };

            self.wastes.write(waste_id, waste);
            let mut to_wastes = self.participant_wastes.read(to);
            to_wastes.append(waste_id);
            self.participant_wastes.write(to, to_wastes);

            let transfer_record = TransferRecord {
                waste_id,
                from: caller,
                to,
                timestamp: get_block_timestamp(),
                latitude,
                longitude,
                notes,
            };

            let mut transfer_history = self.waste_transfer_history.read(waste_id);
            transfer_history.append(transfer_record);
            self.waste_transfer_history.write(waste_id, transfer_history);

            self.next_waste_id.write(waste_id + 1_u256);
            self.emit(Event::WasteTransferred(WasteTransferred{
                waste_id: transfer_record.waste_id,
                from: transfer_record.from,
                to: transfer_record.to,
                latitude: transfer_record.latitude,
                longitude: transfer_record.longitude,
                        }));
        }

        fn donate_to_charity(ref self: ContractState, amount: u256) {
            self.only_registered();
            self.guard_storage.start();  // Start reentrancy protection
            
            let caller = get_caller_address();
            let charity = self.charity_contract.read();
            assert(!charity.is_zero(), 'Charity not set');
            
            let token = IERC20Dispatcher { contract_address: self.scavenger_token.read() };
            assert(token.balance_of(caller) >= amount, 'Insufficient balance');
            
            token.transfer_from(caller, charity, amount);
            
            // TODO: Call charity contract's receiveDonation function if needed
            // This will depend on the charity contract's interface
            
            self.emit(Event::DonationMade(DonationMade {
                donor: caller,
                amount: amount,
                charity_contract: charity,
            }));
            
            self.guard_storage.end();  // End reentrancy protection
        }

        fn set_charity_contract(ref self: ContractState, new_charity: ContractAddress) {
            assert(get_caller_address() == self.owner.read(), 'Not owner');
            self.charity_contract.write(new_charity);
        }

        fn set_percentage(ref self: ContractState, owner_percent: u256, collector_percent: u256) {
            assert(get_caller_address() == self.owner.read(), 'Not owner');
            assert(owner_percent + collector_percent <= 100_u256, 'Invalid percentages');
            
            self.owner_percentage.write(owner_percent);
            self.collector_percentage.write(collector_percent);
        }

        fn get_waste(self: @ContractState, waste_id: u256) -> Waste {
            self.wastes.read(waste_id)
        }

        fn get_participant_wastes(self: @ContractState, participant: ContractAddress) -> Array<u256> {
            self.participant_wastes.read(participant)
        }

        fn get_waste_transfer_history(self: @ContractState, waste_id: u256) -> Array<TransferRecord> {
            self.waste_transfer_history.read(waste_id)
        }

        fn get_participant_info(self: @ContractState, participant: ContractAddress) -> Participant {
            self.participants.read(participant)
        }

        fn get_incentives(self: @ContractState, waste_type: WasteType) -> Array<Incentive> {
            let mut result = ArrayTrait::new();
            let incentive_ids = self.general_incentives.read(waste_type);
            let mut i: u32 = 0;

            loop {
                if i >= incentive_ids.len() {
                    break;
                }
                
                let id = incentive_ids.get(i).unwrap();
                let incentive = self.incentive.read(id);
                if incentive.is_active {
                    result.append(incentive);
                }
                i += 1;
            };
            result
        }

        fn get_incentive(self: @ContractState, incentive_id: u256) -> Incentive {
            self.incentive.read(incentive_id)
        }

        fn get_manufacturer_incentive(
            self: @ContractState, 
            manufacturer: ContractAddress, 
            waste_type: WasteType
        ) -> Option<Incentive> {
            let incentive_ids = self.rewarder_incentives.read(manufacturer);
            let mut i: u32 = 0;

            loop {
                if i >= incentive_ids.len() {
                    break;
                }
                
                let id = incentive_ids.get(i).unwrap();
                let incentive = self.incentive.read(id);
                if incentive.is_active && incentive.waste_type == waste_type {
                    return Option::Some(incentive);
                }
                i += 1;
            };
            Option::None
        }

        fn get_metrics(self: @ContractState) -> (u256, u256) {
            (self.next_waste_id.read() - 1_u256, self.total_tokens_earned.read())
        }

        fn get_waste_type_string(self: @ContractState, waste_type: WasteType) -> felt252 {
            match waste_type {
                WasteType::PAPER => 'PAPER',
                WasteType::PETPLASTIC => 'PETPLASTIC',
                WasteType::PLASTIC => 'PLASTIC',
                WasteType::METAL => 'METAL',
                WasteType::GLASS => 'GLASS',
                _ => 'UNKNOWN',
            }
        }

        fn get_participant_role_string(self: @ContractState, role: ParticipantRole) -> felt252 {
            match role {
                ParticipantRole::RECYCLER => 'RECYCLER',
                ParticipantRole::COLLECTOR => 'COLLECTOR',
                ParticipantRole::MANUFACTURER => 'MANUFACTURER',
                _ => 'UNKNOWN',
            }
        }

        fn get_supply_chain_stats(self: @ContractState) -> (u256, u256, u256) {
            let total_wastes = self.next_waste_id.read() - 1_u256;
            let mut total_weight = 0_u256;
            for i in 1_u256..self.next_waste_id.read() {
                let waste = self.wastes.read(i);
                if waste.is_active {
                    total_weight += waste.weight;
                }
            }
            let total_token_earned = self.total_tokens_earned.read();
            (total_wastes, total_weight, total_token_earned)
        }
    }

    #[generate_trait]
    impl InternalFunctions of InternalFunctionsTrait {
        fn only_registered(self: @ContractState) {
            let caller = get_caller_address();
            assert(self.participants.read(caller).is_registered, 'Not registered');
        }

        fn only_manufacturer(self: @ContractState) {
            let caller = get_caller_address();
            assert(self.participants.read(caller).role == ParticipantRole::MANUFACTURER, 'Not manufacturer');
        }

        fn waste_exists(self: @ContractState, waste_id: u256) {
            assert(waste_id < self.next_waste_id.read(), 'Waste does not exist');
            assert(self.wastes.read(waste_id).is_active, 'Waste not active');
        }

        fn only_waste_owner(self: @ContractState, waste_id: u256) {
            assert(self.wastes.read(waste_id).current_owner == get_caller_address(), 'Not waste owner');
        }

        fn is_valid_transfer(self: @ContractState, from: ParticipantRole, to: ParticipantRole) -> bool {
            match from {
                ParticipantRole::RECYCLER => to == ParticipantRole::COLLECTOR || to == ParticipantRole::MANUFACTURER,
                ParticipantRole::COLLECTOR => to == ParticipantRole::MANUFACTURER,
                _ => false,
            }
        }

        fn _remove_waste_from_participant(ref self: ContractState, participant: ContractAddress, waste_id: u256) {
            let mut wastes = self.participant_wastes.read(participant);
            let mut idx: u32 = 0;
            loop {
                if idx >= wastes.len() {
                    break;
                }
                
                if wastes.get(idx).unwrap() == waste_id {
                    // Remove the waste ID
                    if idx < wastes.len() - 1 {
                        let last = wastes.get(wastes.len() - 1).unwrap();
                        wastes.set(idx, last);
                    }
                    wastes.pop_front();
                    break;
                }
                idx += 1;
            }
            self.participant_wastes.write(participant, wastes);
        }

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }
    }

}
