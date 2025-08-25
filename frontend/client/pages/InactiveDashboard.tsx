import { useState } from "react";
import { Eye, EyeOff, CreditCard, BarChart3, Coins, FileText, Send, RotateCcw, HandCoins, Recycle, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import ConnectWalletModal from "../components/ConnectWalletModal";

export default function InactiveDashboard() {
  const [showBalance, setShowBalance] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout Container */}
      <div className="w-full max-w-[430px] mx-auto bg-white relative">
        <div className="min-h-screen bg-white pb-20">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 py-3 h-[52px]">
            <div className="text-lg font-semibold">9:41</div>
            <div className="flex items-center gap-1">
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                </div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              <div className="w-6 h-3 border border-gray-800 rounded-sm">
                <div className="w-full h-full bg-gray-800 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93f155d89ca134ed94c451037c468ff9a213436b?width=96"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-['Epilogue']">
                  Welcome Recycler,
                </div>
                <div className="text-lg font-bold text-gray-900 font-['Epilogue']">
                  User
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowConnectWallet(true)}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs font-['Epilogue']">Connect Wallet</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="px-4 pb-24">
            <div className="space-y-6">
              {/* Token Card */}
              <div className="mx-[13px] mb-6 h-[141px] rounded-[10px] bg-gradient-to-r from-[#009933] to-[#0AFC5B] relative overflow-hidden">
                {/* White Arrow Decorative Elements */}
                <div className="absolute right-0 top-0 w-full h-full">
                  {/* Arrow shape 1 */}
                  <div className="absolute right-0 top-0 w-16 h-16">
                    <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none">
                      <path
                        d="M0 0L64 0L64 32L32 64L0 32Z"
                        fill="white"
                        fillOpacity="0.15"
                      />
                    </svg>
                  </div>
                  {/* Arrow shape 2 */}
                  <div className="absolute right-8 bottom-4 w-12 h-12">
                    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M0 24L24 0L48 24L24 48Z"
                        fill="white"
                        fillOpacity="0.1"
                      />
                    </svg>
                  </div>
                  {/* Arrow shape 3 */}
                  <div className="absolute right-16 top-8 w-8 h-8">
                    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M16 0L32 16L16 32L0 16Z"
                        fill="white"
                        fillOpacity="0.12"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 px-[31px] pt-[20px] pb-[31px] h-full flex flex-col justify-between">
                  {/* Title and Eye Icon */}
                  <div className="flex items-center gap-5">
                    <span className="text-white text-lg font-normal">
                      Total Token Earned
                    </span>
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="w-5 h-[13px]"
                    >
                      {showBalance ? (
                        <Eye className="w-5 h-[13px] text-white" />
                      ) : (
                        <EyeOff className="w-5 h-[13px] text-white" />
                      )}
                    </button>
                  </div>

                  {/* Token Amount */}
                  <div className="flex items-center gap-[10px] -mt-2">
                    <div className="flex items-baseline">
                      <span className="text-white text-[28px] font-bold leading-none">
                        {showBalance ? "0." : "---.--"}
                      </span>
                      <span className="text-white text-[20px] font-normal leading-none">
                        {showBalance ? "00" : "--"}
                      </span>
                    </div>
                    <span className="text-white text-xl font-normal">SCV</span>
                  </div>

                  {/* Token History Button */}
                  <button className="flex items-center gap-[10px] bg-white rounded-full px-[10px] py-[10px] w-[119px] h-7">
                    <Coins className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
                    <span className="text-black text-[10px] font-normal">
                      Token History
                    </span>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Register Waste */}
                <Link
                  to="/register-waste"
                  className="flex items-center justify-center gap-4 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-6"
                >
                  <FileText
                    className="w-[30px] h-[30px] text-[#009933]"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-['Epilogue'] text-gray-900">
                    Register Waste
                  </span>
                </Link>

                {/* Transfer and Reset Waste */}
                <div className="flex gap-4">
                  <Link
                    to="/transfer-waste"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-4"
                  >
                    <Send
                      className="w-[30px] h-[30px] text-[#009933]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-['Epilogue'] text-gray-900">
                      Transfer Waste
                    </span>
                  </Link>

                  <Link
                    to="/reset-waste"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-4"
                  >
                    <RotateCcw
                      className="w-[30px] h-[30px] text-[#009933]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-['Epilogue'] text-gray-900">
                      Reset Waste
                    </span>
                  </Link>
                </div>
              </div>

              {/* Collectors Section */}
              <div className="flex flex-col items-center justify-center py-12 space-y-5">
                <BarChart3 className="w-12 h-12 text-gray-400" />
                <div className="text-center text-gray-900 font-['Epilogue'] leading-relaxed max-w-xs">
                  Available Collectors/Manufacturers appears here
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around py-3 px-4">
              <Link to="/" className="flex flex-col items-center gap-1 py-2">
                <Home
                  className="w-[24px] h-[24px] text-[#009933]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-scavngr-green font-['Epilogue']">
                  Home
                </span>
              </Link>

              <Link
                to="/tokens"
                className="flex flex-col items-center gap-1 py-2"
              >
                <HandCoins
                  className="w-[24px] h-[24px] text-[#9A9A9A]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-gray-400 font-['Epilogue']">
                  My Tokens
                </span>
              </Link>

              <Link
                to="/waste"
                className="flex flex-col items-center gap-1 py-2"
              >
                <Recycle
                  className="w-[24px] h-[24px] text-[#9A9A9A]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-gray-400 font-['Epilogue']">
                  Waste
                </span>
              </Link>

              <Link
                to="/settings"
                className="flex flex-col items-center gap-1 py-2"
              >
                <Settings
                  className="w-[24px] h-[24px] text-[#9A9A9A]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-gray-400 font-['Epilogue']">
                  Settings
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ConnectWalletModal
        isOpen={showConnectWallet}
        onClose={() => setShowConnectWallet(false)}
      />
    </div>
  );
}
