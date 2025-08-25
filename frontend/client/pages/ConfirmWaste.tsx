import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Search, CheckCircle } from "lucide-react";

export default function ConfirmWaste() {
  const [wasteId, setWasteId] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  // Mock waste data - in real app this would come from API
  const wasteDetails = {
    type: "Plastic",
    weight: "10kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  };

  const handleSearch = () => {
    if (wasteId.trim()) {
      console.log("Searching for waste ID:", wasteId);
      setShowDetails(true);
    }
  };

  const handleConfirm = () => {
    console.log("Confirming waste ID:", wasteId);
    // Here you would implement the actual confirmation logic
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[430px] mx-auto bg-white">
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
          <div className="flex items-center gap-14 px-6 py-4">
            <Link
              to="/collectorDashboard"
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

          {/* Main Content */}
          <div className="px-6 space-y-8 mt-8">
            {!showDetails ? (
              // Step 1: Search for Waste ID
              <>
                {/* Waste ID Input */}
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
                <button
                  onClick={handleSearch}
                  disabled={!wasteId.trim()}
                  className={`w-full h-14 rounded-full font-['Epilogue'] font-medium text-white text-base transition-all ${
                    wasteId.trim()
                      ? "bg-gradient-to-r from-[#0AFC5B] to-[#009933] hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Search
                </button>
              </>
            ) : (
              // Step 2: Show Waste Details for Confirmation
              <>
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

                {/* Confirm Button */}
                <button
                  onClick={handleConfirm}
                  className="w-full h-[55px] bg-gradient-to-r from-[#0AFC5B] to-[#009933] rounded-full flex items-center justify-center">
                  <span className="text-white text-base font-medium tracking-[-0.08px] capitalize">
                    Confirm Waste
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
