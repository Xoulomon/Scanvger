import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterWasteModal from "@/components/RegisterWasteModal";
import ConnectWalletModal from "@/components/ConnectWalletModal";
import {
  Eye,
  EyeOff,
  Home,
  Settings,
  TrendingUp,
  BarChart3,
  Coins,
  FileText,
  Send,
  RotateCcw,
  X,
  MapPin,
  ChevronDown,
  Recycle,
  HandCoins,
  CreditCard
} from "lucide-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/src/firebase";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [firstName, setFirstName] = useState("User");
  const [showTokenBalance, setShowTokenBalance] = useState(true);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [showRegisterWaste, setShowRegisterWaste] = useState(false);
  const [activeTab, setActiveTab] = useState<"manufacturer" | "collector">(
    "manufacturer"
  );

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const { firstName } = userDoc.data();
            setFirstName(firstName || "User");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      };
      fetchUserData();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white font-epilogue max-w-[430px] mx-auto relative">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-[21px] pt-3 pb-[19px] h-[52px]">
        <div className="text-[17px] font-semibold text-black">9:41</div>
        <div className="flex items-center gap-[5px]">
          {/* Signal bars */}
          <div className="flex items-end gap-[2px]">
            <div className="w-[3px] h-[2px] bg-black rounded-[1px]"></div>
            <div className="w-[3px] h-[4px] bg-black rounded-[1px]"></div>
            <div className="w-[3px] h-[6px] bg-black rounded-[1px]"></div>
            <div className="w-[3px] h-[8px] bg-black rounded-[1px]"></div>
          </div>
          {/* WiFi icon */}
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            className="ml-1"
          >
            <path
              d="M1.5 6.5C4.5 3.5 9.5 3.5 12.5 6.5M3.5 8.5C5.5 6.5 8.5 6.5 10.5 8.5M7 10.5L7 10.5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Battery */}
          <div className="flex items-center ml-1">
            <div className="w-[22px] h-[11px] border border-black rounded-[2px] relative">
              <div className="w-[18px] h-[7px] bg-black rounded-[1px] absolute top-[1px] left-[1px]"></div>
            </div>
            <div className="w-[1px] h-[4px] bg-black rounded-r-[1px] ml-[1px]"></div>
          </div>
        </div>
      </div>

      {/* Header with user info and connect wallet */}
      <div className="flex items-center justify-between px-[17px] mb-[26px] h-[47px]">
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/93f155d89ca134ed94c451037c468ff9a213436b?width=96"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Welcome Text */}
          <div className="flex flex-col">
            <span className="text-xs text-[#737373] font-normal leading-normal">
              Welcome Recycler,
            </span>
            <span className="text-lg font-bold text-[#1A1A1A] leading-normal">
              {firstName}
            </span>
          </div>
        </div>

        {/* Connected Wallet Display */}
        <button
          onClick={() => setShowConnectWallet(true)}
          className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <CreditCard className="w-6 h-6 text-[#009933]" />
          <span className="text-xs font-['Epilogue']">Connect Wallet</span>
        </button>

      </div>

      {/* Token Earned Card */}
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
              onClick={() => setShowTokenBalance(!showTokenBalance)}
              className="w-5 h-[13px]"
            >
              {showTokenBalance ? (
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
                {showTokenBalance ? "0." : "---.--"}
              </span>
              <span className="text-white text-[20px] font-normal leading-none">
                {showTokenBalance ? "00" : "--"}
              </span>
            </div>
            <span className="text-white text-xl font-normal">SCV</span>
          </div>

          {/* Token History Button */}
          <Link to="/tokens" className="flex items-center gap-[10px] bg-white rounded-full px-[10px] py-[10px] w-[119px] h-7">
            <Coins className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
            <span className="text-black text-[10px] font-normal">
              Token History
            </span>
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {/* Register Waste */}
        <button
          onClick={() => setShowRegisterWaste(true)}
          className="w-full h-[55px] bg-[#E9FEF0] rounded-full flex items-center justify-center gap-4"
        >
          <FileText
            className="w-[30px] h-[30px] text-[#009933]"
            strokeWidth={1.5}
          />
          <span className="text-sm font-['Epilogue'] text-gray-900">
            Register Waste
          </span>
        </button>

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
      </div><br />

      {/* Tabs and Listings */}
      <div className="mx-4 mb-8">
        {/* Tab Selector */}
        <div className="flex justify-center items-center gap-[17px] mb-7">
          <button
            onClick={() => setActiveTab("manufacturer")}
            className={`px-[10px] py-[10px] rounded-full text-xs font-normal ${activeTab === "manufacturer"
              ? "bg-black text-white"
              : "border border-[#DADADA] text-[#7B7777]"
              }`}
          >
            Available Manufacturer
          </button>
          <button
            onClick={() => setActiveTab("collector")}
            className={`px-[10px] py-[10px] rounded-full text-xs font-normal ${activeTab === "collector"
              ? "bg-black text-white"
              : "border border-[#DADADA] text-[#7B7777]"
              }`}
          >
            Available Collector
          </button>
        </div>

        {/* Listings */}
        <div className="flex flex-col items-center justify-center py-12 space-y-5">
          <BarChart3 className="w-12 h-12 text-gray-400" />
          <div className="text-center text-gray-900 font-['Epilogue'] leading-relaxed max-w-xs">
            Available Collectors/Manufacturers appears here
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

        {/* Home Indicator */}
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>

        {/* Connect Wallet Modal */}
        <ConnectWalletModal
          isOpen={showConnectWallet}
          onClose={() => setShowConnectWallet(false)}
        />

        {/* Register Waste Modal */}
        {showRegisterWaste && (
          <RegisterWasteModal
            isOpen={showRegisterWaste}
            onClose={() => setShowRegisterWaste(false)}
          />
        )}
      </div>
    </div>
  );
}