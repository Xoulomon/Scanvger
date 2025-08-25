import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, Coins, ClipboardList, Home, Wallet, MapPin, RotateCcw, Settings, X, CreditCard, EyeOff, CheckCircle, HandCoins, Recycle, Wallet2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/src/firebase";
import ConnectWalletModal from "@/components/ConnectWalletModal";

export default function ManufacturerDashboard() {
  const [user, loading] = useAuthState(auth);
  const [firstName, setFirstName] = useState("User");
  const [showTokenBalance, setShowTokenBalance] = useState(true);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [selectedRecycler, setSelectedRecycler] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const recyclers = [
    { id: 1, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82" },
    { id: 2, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82" },
    { id: 3, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82" },
    { id: 4, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82" },
    { id: 5, name: "Mr Oyebade", location: "Kaduna", waste: "65kg Of Plastic", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82" },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white max-w-[430px] mx-auto relative">
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

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/93f155d89ca134ed94c451037c468ff9a213436b?width=96"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-xs text-gray-500">Welcome Manufacturer,</div>
            <div className="text-lg font-bold text-black">{firstName}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-bg px-3 py-2 rounded-full">
          <button
            onClick={() => setShowConnectWallet(true)}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <CreditCard className="w-6 h-6 text-[#009933]" />
            <span className="text-xs font-['Epilogue']">Connect Wallet</span>
          </button>
        </div>
      </div>

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
                {showTokenBalance ? "23." : "---.--"}
              </span>
              <span className="text-white text-[20px] font-normal leading-none">
                {showTokenBalance ? "00" : "--"}
              </span>
            </div>
            <span className="text-white text-xl font-normal">SCV</span>
          </div>

          {/* Token History Button */}
          <Link
            to="/mtokens"
            className="flex items-center gap-[10px] bg-white rounded-full px-[10px] py-[10px] w-[119px] h-7">
            <Coins className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
            <span className="text-black text-[10px] font-normal">
              Token History
            </span>
          </Link>
        </div>
      </div>

      {/* Confirm Waste Button */}
      <div className="mx-3 mb-6">
        <Link
          to="/mconfirm-waste"
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
      </div>

      {/* Recycler Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-4">
          <Button className="bg-black text-white hover:bg-black/90 px-6 py-2 text-xs rounded-full">
            Available Recyler
          </Button>
          <Button
            variant="outline"
            className="border-gray-border text-gray-text hover:bg-gray-50 px-6 py-2 text-xs rounded-full"
          >
            Collector
          </Button>
        </div>
      </div>

      {/* Recycler List */}
      <div className="px-4 pb-24">
        {recyclers.map((recycler, index) => (
          <div key={recycler.id}>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                <img
                  src={recycler.avatar}
                  alt={recycler.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <div className="text-sm text-black">{recycler.name}</div>
                  <div className="text-xs text-black">{recycler.location}</div>
                </div>
              </div>
              <div className="text-xs text-black">{recycler.waste}</div>
              <button
                onClick={() => {
                  setSelectedRecycler(recycler);
                  setIsPopupOpen(true);
                }}
                className="bg-[#009933] text-white text-[10px] font-bold px-[10px] py-[6px] rounded-full w-[61px] h-[27px] flex items-center justify-center"
              >
                View
              </button>
            </div>
            {index < recyclers.length - 1 && (
              <div className="w-full h-px bg-gray-border" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
        <div className="flex items-center justify-around py-3 px-4">
          <Link to="/manufacturer-portal" className="flex flex-col items-center gap-1 py-2">
            <Home
              className="w-[24px] h-[24px] text-[#009933]"
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
              className="w-[24px] h-[24px] text-[#9A9A9A]"
              strokeWidth={1.5}
            />
            <span className="text-xs font-medium text-gray-400 font-['Epilogue']">
              Wallet
            </span>
          </Link>

          <Link
            to="/mtokens"
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

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-400/60 z-50 flex items-end">
          <div className="w-full max-w-[430px] mx-auto bg-white rounded-t-3xl p-6 animate-slide-up shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="p-1"
              >
                <X className="w-6 h-6 text-gray-border" />
              </button>
            </div>

            {/* Recycler Info */}
            {selectedRecycler && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedRecycler.avatar}
                      alt={selectedRecycler.name}
                      className="w-10 h-10 rounded-lg"
                    />
                    <div>
                      <div className="text-sm text-black">{selectedRecycler.name}</div>
                      <div className="text-xs text-black">{selectedRecycler.location}</div>
                    </div>
                  </div>
                  <div className="text-xs text-black">{selectedRecycler.waste}</div>
                  <div className="text-right">
                    <div className="text-xs text-black">Waste ID:</div>
                    <div className="text-xs font-bold text-green-primary">354436JK</div>
                  </div>
                </div>

                {/* Map */}
                <div className="relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fa7211a1644e3a9aaec49685959bf58c8af1983d?width=762"
                    alt="Location Map"
                    className="w-full h-62 object-cover rounded-lg"
                  />
                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-green-light rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg shadow-lg">
                      <div className="text-xs text-black whitespace-nowrap">No. 23 Barnawa Complex</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


      )}

      <ConnectWalletModal
        isOpen={showConnectWallet}
        onClose={() => setShowConnectWallet(false)}
      />
    </div>
  );
}