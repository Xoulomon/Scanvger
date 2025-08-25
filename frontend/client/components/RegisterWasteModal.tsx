import { useState } from "react";
import { X, ChevronDown, MapPin, FileText, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RegisterWasteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegisterWasteModal({
    isOpen,
    onClose,
}: RegisterWasteModalProps) {

    // Local state to control modal visibility
    const [showRegisterWaste, setShowRegisterWaste] = useState(isOpen);

    // Sync local state with isOpen prop
    // (optional: ensures modal responds to parent open/close)
    // useEffect(() => {
    //     setShowRegisterWaste(isOpen);
    // }, [isOpen]);
    //   const handleWalletConnect = (walletType: string) => {
    //     console.log(`Connecting to ${walletType}`);
    //     // Here you would implement actual wallet connection logic
    //     onClose();
    //   };

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[rgba(247,244,244,0.61)]"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-[430px] bg-white rounded-t-[30px] shadow-[14px_30px_40.5px_41px_rgba(0,0,0,0.06)] animate-slide-up">
                <div className="px-12 py-4 pb-4">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-[30px] mb-[55px]">
                        {/* Close Button */}
                        <div className="w-full flex justify-end">
                            <button
                                onClick={onClose}
                                className="w-6 h-6"
                            >
                                <X className="w-6 h-6 text-[#DADADA]" strokeWidth={2} />
                            </button>
                        </div>

                        {/* Title */}
                        <div className="flex items-center gap-[10px]">
                            <FileText
                                className="w-[30px] h-[30px] text-[#009933]"
                                strokeWidth={1.5}
                            />
                            <h2 className="text-xl font-normal text-black tracking-[-0.1px]">
                                Register Waste
                            </h2>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5 mb-[55px]">
                        {/* Waste Type */}
                        <div className="space-y-[10px]">
                            <label className="text-[#1A1A1A] text-sm font-medium leading-[145%]">
                                Waste Type
                            </label>
                            <div className="relative">
                                <div className="flex items-center w-full h-[55px] px-3 border border-[#D0D5DD] rounded-full bg-white">
                                    <input
                                        type="text"
                                        placeholder="Enter waste type"
                                        className="flex-1 h-full text-xs text-[#9A9A9A] bg-transparent border-none outline-none placeholder:text-[#9A9A9A] px-2"
                                    />
                                    <ChevronDown className="w-3 h-3 text-black ml-3" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* Weight */}
                        <div className="space-y-[10px]">
                            <label className="text-[#1A1A1A] text-sm font-medium leading-[145%]">
                                Weight
                            </label>
                            <div className="flex items-center w-full h-[55px] px-3 border border-[#D0D5DD] rounded-full bg-white">
                                <input
                                    type="text"
                                    placeholder="Input waste"
                                    className="flex-1 h-full text-xs text-[#9A9A9A] bg-transparent border-none outline-none placeholder:text-[#9A9A9A] px-2"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-[10px]">
                            <label className="text-[#1A1A1A] text-sm font-medium leading-[145%]">
                                Location
                            </label>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[18px] w-full">
                                {/* Longitude */}
                                <div className="flex items-center w-full sm:w-1/2 h-14 px-3 border border-[#D0D5DD] rounded-full bg-white">
                                    <input
                                        type="text"
                                        placeholder="Enter Longitude"
                                        className="flex-1 h-full text-xs text-[#9A9A9A] bg-transparent border-none outline-none placeholder:text-[#9A9A9A] px-2"
                                    />
                                    <MapPin className="w-6 h-6 text-[#009933] ml-3" strokeWidth={1} />
                                </div>
                                {/* Latitude */}
                                <div className="flex items-center w-full sm:w-1/2 h-14 px-3 border border-[#D0D5DD] rounded-full bg-white">
                                    <input
                                        type="text"
                                        placeholder="Enter Latitude"
                                        className="flex-1 h-full text-xs text-[#9A9A9A] bg-transparent border-none outline-none placeholder:text-[#9A9A9A] px-2"
                                    />
                                    <MapPin className="w-6 h-6 text-[#009933] ml-3" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mb-12">
                        <button className="w-full h-[55px] bg-gradient-to-r from-[#0AFC5B] to-[#009933] rounded-full flex items-center justify-center">
                            <span className="text-white text-base font-medium tracking-[-0.08px] capitalize">
                                Submit
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
