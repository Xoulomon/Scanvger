import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Eye,
  RefreshCw,
  Home,
  Wallet,
  MapPin,
  RotateCcw,
  Settings,
  X,
  ChevronDown,
  EyeOff,
  Recycle,
  HandCoins,
  Wallet2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WalletPage() {
  const [showSwapPopup, setShowSwapPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("SCV");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const transactions = [
    {
      id: 1,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Successful",
      statusColor: "text-green-primary",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82",
    },
    {
      id: 2,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82",
    },
    {
      id: 3,
      name: "Mr Fidelis",
      role: "Recycler",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Failed",
      statusColor: "text-red-500",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
    },
    {
      id: 4,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82",
    },
    {
      id: 5,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "Failed",
      statusColor: "text-red-500",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
    },
    {
      id: 6,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "Pending",
      statusColor: "text-orange-500",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82",
    },
  ];

  const handleSwap = () => {
    setShowSwapPopup(true);
  };

  const handleCloseSwapPopup = () => {
    setShowSwapPopup(false);
    setAmount("");
    setPassword("");
  };

  const handleSwapSubmit = () => {
    // Handle swap logic here
    console.log("Swap submitted:", { amount, fromCurrency, toCurrency });
    handleCloseSwapPopup();
  };

  return (
    <div className="min-h-screen bg-white max-w-[430px] mx-auto relative">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-5 py-3 bg-white">
        <div className="text-black font-medium text-lg">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-1 bg-black rounded-sm ${bar === 1
                  ? "h-3"
                  : bar === 2
                    ? "h-4"
                    : bar === 3
                      ? "h-5"
                      : "h-6"
                  }`}
              />
            ))}
          </div>
          <div className="w-6 h-3 border border-black rounded-sm relative">
            <div className="absolute inset-0.5 bg-black rounded-sm" />
          </div>
          <div className="w-1 h-2 bg-black rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <Link
          to="/dashboard"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/28243d70b3922d379a2209498d826dc75e11a946?width=96"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
            <Settings className="w-7 h-7 text-black" />
          </div>
        </div>
      </div>

      {/* Wallet Balance Card */}
      <div className="relative h-[116px] bg-gradient-to-r from-[#009933] to-[#0AFC5B] rounded-lg overflow-hidden">
        {/* Background decoration */}
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

        <div className="relative p-8 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm font-['Epilogue']">
              My Token Balance
            </span>
            <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-white text-4xl font-semibold font-['Epilogue']">
              0
            </span>
            <span className="text-white text-2xl font-light font-['Epilogue']">
              .00
            </span>
            <span className="text-white text-xl font-light font-['Epilogue'] ml-2">
              SCV
            </span>
          </div>
        </div>
      </div><br />

      {/* Swap Button */}
      <div className="mx-3 mb-6">
        <Button
          onClick={handleSwap}
          className="flex items-center justify-center gap-4 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-6 w-full"
        >
          <RefreshCw
            className="w-[35px] h-[35px] text-[#009933]"
            strokeWidth={1.5}
          />
          <span className="text-sm font-['Epilogue'] text-gray-900">
            Swap
          </span>
        </Button>
      </div>

      {/* Wallet History */}
      <div className="px-4 pb-24">
        <h2 className="text-sm font-medium text-black mb-6">Wallet History</h2>

        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={transaction.id}>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <img
                    src={transaction.avatar}
                    alt={transaction.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div>
                    <div className="text-sm text-black">{transaction.name}</div>
                    <div className="text-xs text-black">{transaction.role}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-black">
                    {transaction.amount}
                  </div>
                  <div className="text-xs text-black">
                    {transaction.description}
                  </div>
                </div>
                <div
                  className={`text-xs font-medium ${transaction.statusColor}`}
                >
                  {transaction.status}
                </div>
              </div>
              {index < transactions.length - 1 && (
                <div className="w-full h-px bg-gray-border" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center justify-around py-3 px-4">
          <Link to="/manufactureDashboard" className="flex flex-col items-center gap-1 py-2">
            <Home
              className="w-[24px] h-[24px] text-[#9A9A9A]"
              strokeWidth={1.5}
            />
            <span className="text-xs font-medium text-scavngr-green font-['Epilogue']">
              Home
            </span>
          </Link>

          <Link
            to="/wallet"
            className="flex flex-col items-center gap-1 py-2"
          >
            <Wallet2
              className="w-[24px] h-[24px] text-[#009933]"
              strokeWidth={1.5}
            />
            <span className="text-xs font-medium text-gray-400 font-['Epilogue']">
              Wallet
            </span>
          </Link>

          <Link
            to="/Mtokens"
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
            to="/mwaste"
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

      {/* Swap Popup */}
      {showSwapPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-white rounded-t-lg w-full max-w-[430px] min-h-[500px] max-h-[80vh] transform transition-transform duration-300 ease-out animate-slide-up relative">
            {/* Close Button */}
            <button
              onClick={handleCloseSwapPopup}
              className="absolute top-6 right-6 z-10"
            >
              <X className="w-6 h-6 text-gray-border" />
            </button>

            {/* Popup Content */}
            <div className="p-6 pt-12 pb-8">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-2">
                <RefreshCw className="w-8 h-8 text-[#009933]" />
                <h2 className="text-xl font-medium text-black">Swap</h2>
              </div>
              <p className="text-sm text-black text-center mb-6">
                Convert your funds here
              </p>

              {/* Form */}
              <div className="space-y-4">
                {/* Amount Input */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-black">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount e.g 320 SCV"
                    className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs placeholder:text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>

                {/* Currency Selection Row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* From Currency */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-black">
                      From Currency
                    </label>
                    <div className="relative">
                      <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent appearance-none"
                      >
                        <option value="SCV">Currency (SCV)</option>
                        <option value="USDT">Currency (USDT)</option>
                        <option value="BTC">Currency (BTC)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-2 text-black" />
                    </div>
                  </div>

                  {/* To Currency */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-black">
                      To Currency
                    </label>
                    <div className="relative">
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-full text-xs text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent appearance-none"
                      >
                        <option value="USDT">Currency (USDT)</option>
                        <option value="SCV">Currency (SCV)</option>
                        <option value="BTC">Currency (BTC)</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-2 text-black" />
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-black">
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-full text-xs placeholder:text-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <EyeOff className="w-5 h-5 text-black" />
                    </button>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSwapSubmit}
                    className="w-full bg-gradient-to-r from-[#0AFC5B] to-[#009933] text-white hover:shadow-lg hover:from-green-gradient-start/90 hover:to-green-gradient-end/90 h-12 text-base font-medium rounded-full"
                  >
                    Swap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
