import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Send, Search } from "lucide-react";
import TransferWasteSuccessModal from "@/components/TransferWasteSuccessModal";

export default function TransferWaste() {
  const [wasteId, setWasteId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    // Optionally reset the form or redirect
    setShowDetails(false);
    setWasteId("");
    setAdditionalNotes("");
  };

  const handleTransfer = () => {
    console.log("Transferring waste with notes:", additionalNotes);
    // Here you would implement the actual transfer logic
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[430px] mx-auto bg-white">
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
          <div className="flex items-center gap-14 px-6 py-4">
            <Link
              to="/dashboard"
              className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2} />
            </Link>

            <div className="flex items-center gap-2.5">
              <Send className="w-7 h-7 text-scavngr-green" strokeWidth={2} />
              <h1 className="text-xl font-['Epilogue'] text-black capitalize">
                Transfer Waste
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6 space-y-8">
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
                        className="w-6 h-6 text-scavngr-green"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  disabled={!wasteId.trim()}
                  className={`w-full h-14 rounded-full font-['Epilogue'] font-medium text-base transition-all ${wasteId.trim()
                      ? "bg-gradient-to-r from-[#0AFC5B] to-[#009933] text-white hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Search
                </button>
              </>
            ) : (
              // Step 2: Show Waste Details
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

                {/* Additional Notes */}
                <div className="space-y-2.5">
                  <label className="block text-sm font-medium text-black font-['Epilogue']">
                    Additional Notes
                  </label>
                  <textarea
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Add Comments"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-2xl text-black text-xs font-['Inter'] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-scavngr-green focus:border-transparent resize-none"
                  />
                </div>

                {/* Transfer Button */}
                <button
                  onClick={handleTransfer}
                  className="w-full h-14 bg-gradient-to-r from-[#0AFC5B] to-[#009933] text-white rounded-full font-['Epilogue'] font-medium text-base hover:shadow-lg transition-all"
                >
                  Transfer Waste
                </button>
              </>
            )}
          </div>

          {/* Success Modal */}
          <TransferWasteSuccessModal
            isOpen={showSuccessModal}
            onClose={handleCloseSuccessModal}
          />
        </div>
      </div>
    </div>
  );
}
