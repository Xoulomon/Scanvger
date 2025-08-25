import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

interface RedeemModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: string;
}

export default function RedeemModal({
  isOpen,
  onClose,
  availableBalance,
}: RedeemModalProps) {
  const [tokenAmount, setTokenAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [selectedWallet, setSelectedWallet] = useState("0x5475.....");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  const handleRedeemFunds = () => {
    console.log("Redeeming funds:", {
      tokenAmount,
      selectedCurrency,
      selectedWallet,
      password,
    });
    // Implement redeem logic here
    onClose();
  };

  const currencies = ["USDT", "USDC", "DAI", "ETH"];
  const wallets = ["0x5475.....", "0x1234.....", "0x9876....."];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ backgroundColor: "rgba(247, 244, 244, 0.61)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-[430px] bg-white rounded-t-[30px] p-6 pb-8 shadow-[14px_30px_40.5px_41px_rgba(0,0,0,0.06)]"
            onClick={(e) => e.stopPropagation()}
            style={{ height: "559px" }}
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={onClose}
                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M9.70555 10.5006C10.3972 11.1114 10.8333 12.0048 10.8333 13C10.8333 14.8409 9.34095 16.3333 7.5 16.3333C6.50476 16.3333 5.61138 15.8972 5.00061 15.2055M9.70555 10.5006C9.9024 10.5 10.1113 10.5 10.3333 10.5H29.6667C29.8887 10.5 30.0976 10.5 30.2945 10.5006M9.70555 10.5006C8.24754 10.5051 7.44825 10.5432 6.82003 10.8633C6.19282 11.1829 5.68289 11.6928 5.36331 12.32C5.04322 12.9483 5.00514 13.7475 5.00061 15.2055M5.00061 15.2055C5 15.4024 5 15.6113 5 15.8333V25.1667C5 25.3887 5 25.5976 5.00061 25.7945M5.00061 25.7945C5.61138 25.1028 6.50476 24.6667 7.5 24.6667C9.34095 24.6667 10.8333 26.1591 10.8333 28C10.8333 28.9952 10.3972 29.8886 9.70555 30.4994M5.00061 25.7945C5.00514 27.2525 5.04322 28.0517 5.36331 28.68C5.68289 29.3072 6.19282 29.8171 6.82003 30.1367C7.44825 30.4568 8.24754 30.4949 9.70555 30.4994M9.70555 30.4994C9.9024 30.5 10.1113 30.5 10.3333 30.5H29.6667C29.8887 30.5 30.0976 30.5 30.2945 30.4994M35 25.7951C34.3892 25.1031 33.4956 24.6667 32.5 24.6667C30.6591 24.6667 29.1667 26.1591 29.1667 28C29.1667 28.9952 29.6028 29.8886 30.2945 30.4994M35 25.7951C35.0006 25.5981 35 25.389 35 25.1667V15.8333C35 15.6113 35 15.4024 34.9994 15.2055M35 25.7951C34.9955 27.2527 34.9567 28.0518 34.6367 28.68C34.3171 29.3072 33.8072 29.8171 33.18 30.1367C32.5518 30.4568 31.7525 30.4949 30.2945 30.4994M34.9994 15.2055C34.3886 15.8972 33.4952 16.3333 32.5 16.3333C30.6591 16.3333 29.1667 14.8409 29.1667 13C29.1667 12.0048 29.6028 11.1114 30.2945 10.5006M34.9994 15.2055C34.9949 13.7475 34.9568 12.9483 34.6367 12.32C34.3171 11.6928 33.8072 11.1829 33.18 10.8633C32.5518 10.5432 31.7525 10.5051 30.2945 10.5006M23.3333 20.5C23.3333 22.3409 21.841 23.8333 20 23.8333C18.1591 23.8333 16.6667 22.3409 16.6667 20.5C16.6667 18.6591 18.1591 17.1667 20 17.1667C21.841 17.1667 23.3333 18.6591 23.3333 20.5Z"
                    stroke="url(#paint0_linear_356_1193)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_356_1193"
                      x1="20.0001"
                      y1="10.5"
                      x2="20.0001"
                      y2="30.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#019933" />
                      <stop offset="1" stopColor="#0AFC5B" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="text-xl font-['Epilogue'] text-black capitalize">
                  Redeem
                </h2>
              </div>
              <p className="text-sm font-['Epilogue'] text-gray-800 capitalize">
                Claim Your Funds Here
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Token Amount */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-800 font-['Epilogue']">
                    Token Amount
                  </label>
                  <span className="text-xs font-['Epilogue']">
                    <span className="text-gray-800">Avail. Bal. </span>
                    <span className="text-scavngr-green">
                      {availableBalance}
                    </span>
                  </span>
                </div>
                <input
                  type="text"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  placeholder="Enter token amount e.g 320 SCV"
                  className="w-full h-[55px] px-3 bg-white border border-gray-300 rounded-full text-xs font-['Inter'] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all"
                />
              </div>

              {/* Currency and Wallet Address Row */}
              <div className="flex gap-5">
                {/* Currency */}
                <div className="flex-1 space-y-2.5">
                  <label className="text-sm font-medium text-gray-800 font-['Epilogue']">
                    Currency
                  </label>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setShowCurrencyDropdown(!showCurrencyDropdown)
                      }
                      className="w-full h-[55px] px-3 bg-white border border-gray-300 rounded-full text-xs font-['Inter'] text-gray-600 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all flex items-center justify-between"
                    >
                      <span>Currency ({selectedCurrency})</span>
                      <ChevronDown
                        className="w-3 h-3 text-black"
                        strokeWidth={1.5}
                      />
                    </button>

                    {showCurrencyDropdown && (
                      <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {currencies.map((currency) => (
                          <button
                            key={currency}
                            onClick={() => {
                              setSelectedCurrency(currency);
                              setShowCurrencyDropdown(false);
                            }}
                            className="w-full px-3 py-2 text-left text-xs font-['Inter'] text-gray-800 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {currency}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Wallet Address */}
                <div className="flex-[1.4] space-y-2.5">
                  <label className="text-sm font-medium text-gray-800 font-['Epilogue']">
                    Wallet Address
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                      className="w-full h-[55px] px-3 bg-white border border-gray-300 rounded-full text-xs font-['Inter'] text-gray-800 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        {/* Metamask Icon */}
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="rounded-full bg-white"
                        >
                          <rect width="24" height="24" rx="12" fill="white" />
                          <path
                            d="M18.7533 5.0625L12.9004 9.40956L13.9827 6.84485L18.7533 5.0625Z"
                            fill="#E2761B"
                          />
                          <path
                            d="M5.24121 5.0625L11.0471 9.45074L10.0177 6.84485L5.24121 5.0625Z"
                            fill="#E4761B"
                          />
                          <path
                            d="M16.6467 15.139L15.0879 17.5273L18.4232 18.4449L19.382 15.192L16.6467 15.139Z"
                            fill="#E4761B"
                          />
                          <path
                            d="M4.62305 15.192L5.57599 18.4449L8.91128 17.5273L7.35246 15.139L4.62305 15.192Z"
                            fill="#E4761B"
                          />
                        </svg>
                        <span>{selectedWallet}</span>
                      </div>
                      <ChevronDown
                        className="w-3 h-3 text-black"
                        strokeWidth={1.5}
                      />
                    </button>

                    {showWalletDropdown && (
                      <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {wallets.map((wallet) => (
                          <button
                            key={wallet}
                            onClick={() => {
                              setSelectedWallet(wallet);
                              setShowWalletDropdown(false);
                            }}
                            className="w-full px-3 py-2 text-left text-xs font-['Inter'] text-gray-800 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="rounded-full bg-white"
                            >
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                              <path
                                d="M18.7533 5.0625L12.9004 9.40956L13.9827 6.84485L18.7533 5.0625Z"
                                fill="#E2761B"
                              />
                            </svg>
                            {wallet}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Enter Password */}
              <div className="space-y-2.5">
                <label className="text-sm font-medium text-gray-800 font-['Epilogue']">
                  Enter Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-[55px] px-3 pr-12 bg-white border border-gray-300 rounded-full text-xs font-['Inter'] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                    ) : (
                      <Eye className="w-5 h-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>

              {/* Redeem Button */}
              <div className="mb-12">
                <button className="w-full h-[55px] bg-gradient-to-r from-[#0AFC5B] to-[#009933] rounded-full flex items-center justify-center">
                  <span className="text-white text-base font-medium tracking-[-0.08px] capitalize">
                    Redeem funds
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
