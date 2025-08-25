import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, ChevronDown } from "lucide-react";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableBalance: string;
  onSuccess: (amount: string, currency: string) => void;
}

export default function DonateModal({
  isOpen,
  onClose,
  availableBalance,
  onSuccess,
}: DonateModalProps) {
  const [tokenAmount, setTokenAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [selectedWallet, setSelectedWallet] = useState("0x5475.....");
  const [password, setPassword] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  const handleDonateFunds = () => {
    console.log("Donating funds:", {
      tokenAmount,
      selectedCurrency,
      selectedWallet,
      password,
      additionalNotes,
    });
    onSuccess(tokenAmount || "320", selectedCurrency);
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
            style={{ height: "700px" }}
          >
            {/* Close button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={onClose}
                className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5.5V15.5M20 5.5L15.8333 9.66667M20 5.5L24.1667 9.66667M9.70555 15.5006C10.3972 16.1114 10.8333 17.0048 10.8333 18C10.8333 19.8409 9.34095 21.3333 7.5 21.3333C6.50476 21.3333 5.61138 20.8972 5.00061 20.2055M9.70555 15.5006C9.9024 15.5 10.1113 15.5 10.3333 15.5H13.3333M9.70555 15.5006C8.24754 15.5051 7.44825 15.5432 6.82003 15.8633C6.19282 16.1829 5.68289 16.6928 5.36331 17.32C5.04322 17.9483 5.00514 18.7475 5.00061 20.2055M5.00061 20.2055C5 20.4024 5 20.6113 5 20.8333V30.1667C5 30.3887 5 30.5976 5.00061 30.7945M5.00061 30.7945C5.61138 30.1028 6.50476 29.6667 7.5 29.6667C9.34095 29.6667 10.8333 31.1591 10.8333 33C10.8333 33.9952 10.3972 34.8886 9.70555 35.4994M5.00061 30.7945C5.00514 32.2525 5.04322 33.0518 5.36331 33.68C5.68289 34.3072 6.19282 34.8171 6.82003 35.1367C7.44825 35.4568 8.24754 35.4949 9.70555 35.4994M9.70555 35.4994C9.9024 35.5 10.1113 35.5 10.3333 35.5H29.6667C29.8887 35.5 30.0976 35.5 30.2945 35.4994M35 30.7951C34.3892 30.1031 33.4956 29.6667 32.5 29.6667C30.6591 29.6667 29.1667 31.1591 29.1667 33C29.1667 33.9952 29.6028 34.8886 30.2945 35.4994M35 30.7951C35.0006 30.5981 35 30.389 35 30.1667V20.8333C35 20.6113 35 20.4024 34.9994 20.2055M35 30.7951C34.9955 32.2527 34.9567 33.0519 34.6367 33.68C34.3171 34.3072 33.8072 34.8171 33.18 35.1367C32.5518 35.4568 31.7525 35.4949 30.2945 35.4994M34.9994 20.2055C34.3886 20.8972 33.4952 21.3333 32.5 21.3333C30.6591 21.3333 29.1667 19.8409 29.1667 18C29.1667 17.0048 29.6028 16.1114 30.2945 15.5006M34.9994 20.2055C34.9949 18.7475 34.9568 17.9483 34.6367 17.32C34.3171 16.6928 33.8072 16.1829 33.18 15.8633C32.5518 15.5432 31.7525 15.5051 30.2945 15.5006M30.2945 15.5006C30.0976 15.5 29.8887 15.5 29.6667 15.5H26.6667M23.3333 25.5C23.3333 27.3409 21.841 28.8333 20 28.8333C18.1591 28.8333 16.6667 27.3409 16.6667 25.5C16.6667 23.6591 18.1591 22.1667 20 22.1667C21.841 22.1667 23.3333 23.6591 23.3333 25.5Z"
                    stroke="url(#paint0_linear_363_1546)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_363_1546"
                      x1="20.0001"
                      y1="5.5"
                      x2="20.0001"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#019933" />
                      <stop offset="1" stopColor="#0AFC5B" />
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="text-xl font-['Epilogue'] text-black capitalize">
                  Donate
                </h2>
              </div>
              <p className="text-sm font-['Epilogue'] text-gray-800 capitalize">
                Gift Your Funds Here
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

              {/* Additional Notes */}
              <div className="space-y-2.5">
                <label className="text-sm font-medium text-gray-800 font-['Epilogue']">
                  Additional Notes
                </label>
                <textarea
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Add comments"
                  rows={3}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg text-xs font-['Inter'] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Donate Button */}
              <div className="mb-12">
                <button className="w-full h-[55px] bg-gradient-to-r from-[#0AFC5B] to-[#009933] rounded-full flex items-center justify-center">
                  <span className="text-white text-base font-medium tracking-[-0.08px] capitalize">
                    Donate funds
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
