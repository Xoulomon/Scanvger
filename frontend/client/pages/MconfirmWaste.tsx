import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ClipboardList,
  Search,
  X,
  DollarSign,
  ChevronDown,
  EyeOff,
  Check,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ConfirmWaste() {
  const [wasteId, setWasteId] = useState("");
  const [showWasteDetails, setShowWasteDetails] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [tokenAmount, setTokenAmount] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = () => {
    if (wasteId.trim()) {
      setShowWasteDetails(true);
    }
  };

  const handleConfirmWaste = () => {
    setShowSuccessPopup(true);
  };

  const handleMakePayment = () => {
    setShowSuccessPopup(false);
    setShowPaymentPopup(true);
  };

  const wasteDetails = {
    type: "Plastic",
    weight: "10kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  };

  const handlePayment = () => {
    console.log("Processing payment...");
    // Payment logic here
    setShowPaymentPopup(false);
    setShowPaymentSuccess(true);

    // Auto-close after 3 seconds (optional)
    setTimeout(() => {
      setShowPaymentSuccess(false);
    }, 3000);
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
      <div className="flex items-center gap-14 px-6 py-4">
        <Link
          to="/manufactureDashboard"
          className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2} />
        </Link>

        <div className="flex items-center gap-2.5">
          <CheckCircle
            className="w-7 h-7 text-[#009933]"
            strokeWidth={2}
          />
          <h1 className="text-xl font-['Epilogue'] text-black capitalize">
            Confirm Waste
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        {!showWasteDetails ? (
          <div className="space-y-8">
            {/* Waste ID Input Section */}
            <div className="space-y-2.5">
              <label className="block text-sm font-medium text-black font-['Epilogue']">
                Waste ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={wasteId}
                  onChange={(e) => setWasteId(e.target.value)}
                  placeholder="Enter waste ID"
                  className="w-full h-14 px-4 pr-12 bg-white border-2 border-scavngr-green rounded-full text-black text-sm font-['Inter'] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent transition-all"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search
                    className="w-6 h-6 text-gray-300"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-8">
              <Button
                onClick={handleSearch}
                disabled={!wasteId.trim()}
                className={`w-full h-14 text-base font-medium rounded-full transition-all duration-200 ${wasteId.trim()
                  ? "bg-gradient-to-r from-[#0AFC5B] to-[#009933] hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Search
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Waste Details Section */}
            <div className="space-y-5">
              <h2 className="text-center text-scavngr-green font-['Epilogue'] text-base font-medium">
                Waste Details
              </h2>

              {/* Details Container */}
              <div className="bg-gray-100 rounded-2xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-black text-xs font-['Inter']">
                    Waste Type -
                  </span>
                  <span className="text-black text-xs font-['Inter']">
                    {wasteDetails.type}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black text-xs font-['Inter']">
                    Waste Weight -
                  </span>
                  <span className="text-black text-xs font-['Inter']">
                    {wasteDetails.weight}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black text-xs font-['Inter']">
                    Location -
                  </span>
                  <span className="text-black text-xs font-['Inter']">
                    {wasteDetails.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black text-xs font-['Inter']">
                    Confirmer Address -
                  </span>
                  <span className="text-black text-xs font-['Inter'] break-all">
                    {wasteDetails.confirmerAddress}
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Waste Button */}
            <div className="pt-8">
              <button
                onClick={handleConfirmWaste}
                className="w-full h-[55px] bg-gradient-to-r from-[#0AFC5B] to-[#009933] rounded-full flex items-center justify-center">
                <span className="text-white text-base font-medium tracking-[-0.08px] capitalize">
                  Confirm Waste
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Confirmation Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-400/60 z-50 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-[345px] mx-auto bg-white rounded-3xl p-12 animate-slide-up shadow-2xl">
            {/* Success Content */}
            <div className="space-y-11 text-center">
              {/* Success Icon */}
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
              <div className="space-y-4">
                <h2 className="text-lg text-black font-normal leading-relaxed">
                  Your Waste Confirmation is Successful
                </h2>
                <p className="text-sm">
                  <span className="text-black">Amount To Pay: </span>
                  <span className="text-green-primary font-medium">
                    2,000 SCV
                  </span>
                </p>
              </div>

              {/* Make Payment Button */}
              <div className="pt-8">
                <Button
                  onClick={handleMakePayment}
                  variant="outline"
                  className="w-full h-14 text-base font-medium rounded-full border-green-primary text-green-primary hover:bg-green-light"
                >
                  Make Payment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 bg-gray-400/60 z-50 flex items-end">
          <div className="w-full max-w-[430px] mx-auto bg-white rounded-t-3xl p-6 animate-slide-up shadow-2xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="p-1"
              >
                <X className="w-6 h-6 text-gray-border" />
              </button>
            </div>

            {/* Payment Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-gradient-start to-green-gradient-end flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl text-black font-normal">
                    Make Payment
                  </h2>
                </div>
                <p className="text-sm text-gray-600 ml-13">
                  Send Your Funds Here
                </p>
              </div>

              {/* Token Amount */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-black">
                    Token Amount
                  </label>
                  <div className="text-right">
                    <span className="text-xs text-black">Avail. Bal. </span>
                    <span className="text-xs text-green-primary font-medium">
                      3,456.06 SCV
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={tokenAmount}
                    onChange={(e) => setTokenAmount(e.target.value)}
                    placeholder="Enter token amount e.g 320 SCV"
                    className="w-full h-14 px-4 rounded-full border border-gray-border text-sm placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-green-primary/20"
                  />
                </div>
              </div>

              {/* Wallet Address */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-black">
                  Wallet Address
                </label>
                <div className="relative">
                  <div className="flex items-center w-full h-14 px-4 rounded-full border border-gray-border">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full" />
                      <span className="text-xs text-black">0x5475.....</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-black">
                  Enter Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-14 px-4 pr-12 rounded-full border border-gray-border text-sm placeholder:text-gray-text focus:outline-none focus:ring-2 focus:ring-green-primary/20"
                  />
                  <EyeOff className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Send Button */}
              <div className="pt-4">
                <Button
                  onClick={handlePayment}
                  disabled={!tokenAmount.trim() || !password.trim()}
                  className={`w-full h-14 text-base font-medium rounded-full transition-all duration-200 ${tokenAmount.trim() && password.trim()
                    ? "bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:opacity-90"
                    : "bg-gray-400 text-white cursor-not-allowed opacity-60"
                    }`}
                >
                  Send
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Final Payment Success Popup */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-gray-400/60 z-50 flex items-center justify-center">
          <div className="w-full max-w-[345px] mx-auto bg-white rounded-3xl p-12 animate-slide-up shadow-2xl">
            {/* Final Success Content */}
            <div className="space-y-11 text-center">
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-gradient-start to-green-gradient-end flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Final Success Message */}
              <div>
                <h2 className="text-lg text-black font-normal leading-relaxed">
                  Your 2,000 SCV Payment is Successful
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
