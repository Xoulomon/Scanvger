import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWalletModal({
  isOpen,
  onClose,
}: ConnectWalletModalProps) {
  const handleWalletConnect = (walletType: string) => {
    console.log(`Connecting to ${walletType}`);
    // Here you would implement actual wallet connection logic
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-200/60 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white rounded-t-[30px] shadow-[14px_30px_40.5px_41px_rgba(0,0,0,0.06)] z-50"
          >
            <div className="flex flex-col p-12 pb-4">
              <div className="flex flex-col items-center gap-5 mb-14">
                {/* Close button */}
                <div className="w-full flex justify-end">
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Header */}
                <div className="flex items-center gap-2.5">
                  <svg width="40" height="40" viewBox="0 0 40 41" fill="none">
                    <path
                      d="M19.4446 31.125H12.7779C11.2222 31.125 10.4444 31.125 9.85019 30.8298C9.32752 30.5702 8.90257 30.1558 8.63626 29.6462C8.3335 29.0669 8.3335 28.3085 8.3335 26.7917V16.5C8.3335 14.9832 8.3335 14.2248 8.63626 13.6455C8.90257 13.1359 9.32752 12.7215 9.85019 12.4619C10.4444 12.1667 11.2222 12.1667 12.7779 12.1667H28.8891C30.4448 12.1667 31.2226 12.1667 31.8168 12.4619C32.3395 12.7215 32.7644 13.1359 33.0307 13.6455C33.3335 14.2248 33.3335 14.9832 33.3335 16.5V21.6459M8.3335 17.5834H20.8335H33.3335M29.1668 33.8334V25.7084M33.3335 29.772L25.0002 29.7709"
                      stroke="url(#paint0_linear_wallet)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_wallet"
                        x1="20.8335"
                        y1="12.1667"
                        x2="20.8335"
                        y2="33.8334"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#019933" />
                        <stop offset="1" stopColor="#0AFC5B" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-xl font-['Epilogue'] text-black capitalize">
                    Connect Wallet
                  </h2>
                </div>
              </div>

              {/* Wallet Options */}
              <div className="flex flex-col gap-4 mb-14">
                {/* Metamask */}
                <button
                  onClick={() => handleWalletConnect("Metamask")}
                  className="flex items-center justify-center gap-4 bg-orange-50 hover:bg-orange-100 transition-colors rounded-full h-14 px-6"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1d51ef095b1d43c09a10ba063fc5f966%2Fdb81e3715ae340e9b288370f9d1eda93?format=webp&width=800"
                    alt="Metamask"
                    className="w-9 h-6"
                  />
                  <span className="text-sm font-['Epilogue'] text-black">
                    Connect Metamask
                  </span>
                </button>

                {/* Phantom */}
                <button
                  onClick={() => handleWalletConnect("Phantom")}
                  className="flex items-center justify-center gap-4 bg-purple-50 hover:bg-purple-100 transition-colors rounded-full h-14 px-6"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1d51ef095b1d43c09a10ba063fc5f966%2Ff2da9e25499a417b9e130d25330d019c?format=webp&width=800"
                    alt="Phantom"
                    className="w-7 h-6"
                  />
                  <span className="text-sm font-['Epilogue'] text-black">
                    Connect Phantom
                  </span>
                </button>

                {/* Others */}
                <button
                  onClick={() => handleWalletConnect("Others")}
                  className="flex items-center justify-center gap-4 border border-gray-300 hover:bg-gray-50 transition-colors rounded-full h-14 px-6"
                >
                  <span className="text-sm font-['Epilogue'] text-black">
                    Others
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
