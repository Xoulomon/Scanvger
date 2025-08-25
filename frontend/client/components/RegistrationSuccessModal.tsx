import React from "react";
import { X } from "lucide-react";

interface RegistrationSuccessModalProps {
    show: boolean;
    onClose: () => void;
}

const RegistrationSuccessModal: React.FC<RegistrationSuccessModalProps> = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-[42px]"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-[30px] w-full max-w-[345px] px-12 py-[93px] shadow-lg relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex flex-col items-center gap-[21px]">
                    {/* Animated Checkmark */}
                    <div className="w-[70px] h-[70px] relative">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-scavngr-green-primary via-scavngr-green-primary to-scavngr-green-light flex items-center justify-center animate-bounce">
                            <svg
                                width="42"
                                height="32"
                                viewBox="0 0 42 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="animate-pulse"
                            >
                                <path
                                    d="M37.0237 6.8864L16.5547 33.1136L3.9766 20.3864"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Success Message */}
                    <p className="text-black text-lg font-normal text-center leading-[157%] lowercase">
                        Your Registration is Successfully
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSuccessModal;
