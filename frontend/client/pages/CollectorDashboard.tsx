import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Coins, CreditCard, Eye, EyeOff, HandCoins, Home, Recycle, Send, Settings } from "lucide-react";
import ConnectWalletModal from "@/components/ConnectWalletModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/src/firebase";

interface RecyclerProfile {
  id: string;
  name: string;
  location: string;
  wasteType: string;
  avatar: string;
}

const recyclerProfiles: RecyclerProfile[] = [
  {
    id: "1",
    name: "Mr Oyebade",
    location: "Kaduna",
    wasteType: "65kg Of Plastic",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82",
  },
  {
    id: "2",
    name: "Mr Oyebade",
    location: "Kaduna",
    wasteType: "65kg Of Plastic",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82",
  },
  {
    id: "3",
    name: "Mr Oyebade",
    location: "Kaduna",
    wasteType: "65kg Of Plastic",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
  },
  {
    id: "4",
    name: "Mr Oyebade",
    location: "Kaduna",
    wasteType: "65kg Of Plastic",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82",
  },
  {
    id: "5",
    name: "Mr Oyebade",
    location: "Kaduna",
    wasteType: "65kg Of Plastic",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
  },
];

export default function CollectorDashboard() {
  const [user, loading] = useAuthState(auth);
  const [firstName, setFirstName] = useState("User");
  const [showBalance, setShowBalance] = useState(true);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [activeTab, setActiveTab] = useState<"recycler" | "manufacturer">(
    "recycler"
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
    <div className="min-h-screen bg-white">
      {/* Mobile Layout Container */}
      <div className="w-full max-w-[430px] mx-auto bg-white relative">
        <div className="min-h-screen bg-white pb-20">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 py-3 h-[52px]">
            <div className="text-lg font-semibold font-['Epilogue']">9:41</div>
            <div className="flex items-center gap-2">
              {/* Signal bars */}
              <div className="flex items-end gap-0.5">
                <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-4 bg-gray-800 rounded-full"></div>
              </div>
              {/* WiFi icon */}
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                className="text-gray-800"
              >
                <path
                  d="M1 7.5C3.5 5 6.5 3.5 9.5 5C11.5 6 13 7 14 8.5M4 8.5C5.5 7 7.5 6.5 9.5 7.5C10.5 8 11.5 8.5 12 9M7 9.5C7.5 9 8.5 8.5 9.5 9C10 9.25 10.5 9.5 11 10"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
              {/* Battery */}
              <div className="w-6 h-3 border border-gray-800 rounded-sm relative">
                <div className="w-full h-full bg-gray-800 rounded-sm"></div>
                <div className="absolute -right-0.5 top-0.5 w-0.5 h-2 bg-gray-800 rounded-r-sm"></div>
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
                  Welcome Collector,
                </div>
                <div className="text-lg font-bold text-gray-900 font-['Epilogue']">
                  {firstName}
                </div>
              </div>
            </div>

            {/* Wallet connection */}
            <div className="flex items-center bg-gray-100 rounded-full px-2.5 py-2.5 gap-2.5">
              <button
                onClick={() => setShowConnectWallet(true)}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <CreditCard className="w-6 h-6 text-[#009933]" />
                <span className="text-xs font-['Epilogue']">Connect Wallet</span>
              </button>
              {/* Dropdown arrow */}
              <svg
                width="12"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                className="transform rotate-90"
              >
                <path
                  d="M10.1763 1.20605L5.58803 5.79429L0.999799 1.20605"
                  stroke="#009933"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-3 pb-6">
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
                        {showBalance ? "23." : "---.--"}
                      </span>
                      <span className="text-white text-[20px] font-normal leading-none">
                        {showBalance ? "00" : "--"}
                      </span>
                    </div>
                    <span className="text-white text-xl font-normal">SCV</span>
                  </div>

                  {/* Token History Button */}
                  <Link to="/ctokens" className="flex items-center gap-[10px] bg-white rounded-full px-[10px] py-[10px] w-[119px] h-7">
                    <Coins className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
                    <span className="text-black text-[10px] font-normal">
                      Token History
                    </span>
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Confirm Waste */}
                <Link
                  to="/confirm-waste"
                  className="flex items-center justify-center gap-4 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-6 w-full"
                >
                  <CheckCircle
                    className="w-[30px] h-[30px] text-[#009933]"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-['Epilogue'] text-gray-900">
                    Confirm Waste
                  </span>
                </Link>

                {/* Transfer Waste */}
                <button className="flex items-center justify-center gap-4 bg-green-50 hover:bg-green-100 transition-colors rounded-full h-14 px-6 w-full">
                  <Send
                    className="w-[30px] h-[30px] text-[#009933]"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-['Epilogue'] text-gray-900">
                    Transfer Waste
                  </span>
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex items-center justify-center gap-4 mt-7">
                <button
                  onClick={() => setActiveTab("recycler")}
                  className={`px-4 py-2.5 rounded-full text-xs font-normal font-['Epilogue'] transition-colors ${activeTab === "recycler"
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-600 bg-white"
                    }`}
                >
                  Available Recycler
                </button>
                <button
                  onClick={() => setActiveTab("manufacturer")}
                  className={`px-4 py-2.5 rounded-full text-xs font-normal font-['Epilogue'] transition-colors ${activeTab === "manufacturer"
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-600 bg-white"
                    }`}
                >
                  Manufacturer
                </button>
              </div>

              {/* Recycler Profiles List */}
              <div className="space-y-1.5">
                {recyclerProfiles.map((profile, index) => (
                  <div key={profile.id}>
                    <div className="flex items-center gap-14 px-2 py-4">
                      {/* Left section - Profile */}
                      <div className="flex items-center gap-2">
                        <img
                          src={profile.avatar}
                          alt={profile.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="space-y-1">
                          <div className="text-[13px] text-gray-800 font-normal font-['Epilogue']">
                            {profile.name}
                          </div>
                          <div className="text-[10px] text-gray-800 font-normal font-['Epilogue']">
                            {profile.location}
                          </div>
                        </div>
                      </div>

                      {/* Middle section - Waste Type */}
                      <div className="flex-1">
                        <div className="text-[10px] text-gray-800 font-normal font-['Epilogue']">
                          {profile.wasteType}
                        </div>
                      </div>

                      {/* Right section - View button */}
                      <div className="flex-shrink-0">
                        <button className="bg-scavngr-green hover:bg-scavngr-green/90 transition-colors text-white px-4 py-1.5 rounded-full text-[10px] font-bold font-['Epilogue']">
                          View
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    {index < recyclerProfiles.length - 1 && (
                      <div className="w-full h-px bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around py-3 px-4">
              <Link to="/collectorDashboard" className="flex flex-col items-center gap-1 py-2">
                <Home
                  className="w-[24px] h-[24px] text-[#009933]"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-scavngr-green font-['Epilogue']">
                  Home
                </span>
              </Link>

              <Link
                to="/ctokens"
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
                to="/cwaste"
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

          {/* Connect wallet modal */}
          <ConnectWalletModal
            isOpen={showConnectWallet}
            onClose={() => setShowConnectWallet(false)}
          />
        </div>
      </div>
    </div>
  );
}