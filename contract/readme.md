# Waste Supply Chain Smart Contract

## Overview
A StarkNet smart contract for managing a waste recycling supply chain, tracking waste, facilitating transfers, and rewarding participants (Recyclers, Collectors, Manufacturers) with ERC20 tokens.

## Features
- Register participants (Recycler, Collector, Manufacturer)
- Track waste (Paper, Plastic, Metal, Glass) with ownership and location
- Set and manage incentives for waste types
- Transfer waste between participants
- Reward participants with tokens
- Support charity donations
- View waste, participant, and supply chain stats

## Dependencies
- [StarkNet](https://starknet.io/)
- [OpenZeppelin](https://www.openzeppelin.com/) (ERC20, Ownable, ReentrancyGuard)

## Contract Address
- **Waste Supply Chain Contract**: [0x05625aa9f33fbb35af36fdaf5931b43fc0bfdc0364e32f9410e50b875b26556a](https://sepolia.voyager.online/contract/0x05625aa9f33fbb35af36fdaf5931b43fc0bfdc0364e32f9410e50b875b26556a)

- **Scavenger Token Contract**: [0x05625aa9f33fbb35af36fdaf5931b43fc0bfdc0364e32f9410e50b875b26556a](https://sepolia.voyager.online/contract/0x05625aa9f33fbb35af36fdaf5931b43fc0bfdc0364e32f9410e50b875b26556a)

## Installation and Deployment
1. **Prerequisites**:
   - Install [Scarb](https://docs.swmansion.com/scarb/)
   - Set up a StarkNet node or use a testnet (e.g., StarkNet Sepolia)
2. **Compile the Contract**:
   ```bash
   scarb build
   ```
3. **Deploy the Contract**:
   ```bash
   starknet deploy --contract target/dev/<contract_name>.json --inputs <scavenger_token_address>
   ```
   Replace `<scavenger_token_address>` with the ERC20 token contract address.

## Usage
- **Register**: Call `register_participant` with role, name, and location
- **Recycle**: Use `recycle_waste` to record waste (Recycler)
- **Transfer**: Use `transfer_waste` or `transfer_collected_waste` for waste movement
- **Incentives**: Manufacturers set rewards with `set_incentive`
- **Confirm**: Verify waste with `confirm_waste_details`
- **Donate**: Send tokens to charity with `donate_to_charity`
- **View**: Use functions like `get_waste`, `get_participant_info`, `get_supply_chain_stats`

## Security
- Ownable for owner-only functions
- ReentrancyGuard for critical operations
- Role-based access and transfer validation

## License
[MIT License](https://opensource.org/licenses/MIT) (see SPDX-License-Identifier in contract)
