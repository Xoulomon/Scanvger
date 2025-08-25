import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, HandCoins, Home, Recycle, Settings } from "lucide-react";
import WasteDetailsModal from "../components/WasteDetailsModal";

interface WasteEntry {
  id: string;
  type: string;
  amount: string;
  date: string;
  weight: string;
  location: string;
  confirmerAddress: string;
}

const wasteData: WasteEntry[] = [
  {
    id: "354436JK",
    type: "65kg Of Plastic",
    amount: "65",
    date: "10 Aug, 2025",
    weight: "10kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "904436HJ",
    type: "15kg Of Metals",
    amount: "15",
    date: "10 Jun, 2025",
    weight: "15kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "354436JK",
    type: "65kg Of Plastic",
    amount: "65",
    date: "10 Aug, 2025",
    weight: "65kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "904436HJ",
    type: "15kg Of Metals",
    amount: "15",
    date: "10 Jun, 2025",
    weight: "15kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "124436AL",
    type: "65kg Of Plastic",
    amount: "65",
    date: "10 Aug, 2025",
    weight: "65kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "904436HJ",
    type: "15kg Of Metals",
    amount: "15",
    date: "10 Jun, 2025",
    weight: "15kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
  {
    id: "354436JK",
    type: "65kg Of Plastic",
    amount: "65",
    date: "10 Aug, 2025",
    weight: "65kg",
    location: "12.11lat 13.59long",
    confirmerAddress: "0x365453647564564656",
  },
];

export default function Waste() {
  const [activeTab, setActiveTab] = useState<
    "registered" | "transferred" | "completed"
  >("registered");
  const [selectedWaste, setSelectedWaste] = useState<WasteEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = wasteData; // For now, showing all data regardless of tab

  const handleViewClick = (entry: WasteEntry) => {
    setSelectedWaste(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWaste(null);
  };

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
          <div className="flex items-center justify-between px-4 py-4 h-11">
            <Link
              to="/dashboard"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </Link>
            <div className="flex items-center gap-2.5">
              <Recycle
                className="w-7 h-7 text-scavngr-green"
                strokeWidth={2}
              />
              <h1 className="text-xl font-['Epilogue'] text-black capitalize">
                Waste
              </h1>
            </div>
            <div className="w-11"></div> {/* Spacer for center alignment */}
          </div>

          {/* Tab Navigation */}
          <div className="px-4 pt-6 pb-7">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab("registered")}
                className={`px-4 py-2.5 rounded-full text-xs font-normal font-['Epilogue'] transition-colors ${activeTab === "registered"
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-600 bg-white"
                  }`}
              >
                Registered Waste
              </button>
              <button
                onClick={() => setActiveTab("transferred")}
                className={`px-4 py-2.5 rounded-full text-xs font-normal font-['Epilogue'] transition-colors ${activeTab === "transferred"
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-600 bg-white"
                  }`}
              >
                Transfered
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-2.5 rounded-full text-xs font-normal font-['Epilogue'] transition-colors ${activeTab === "completed"
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-600 bg-white"
                  }`}
              >
                Completed
              </button>
            </div>
          </div>

          {/* Waste List */}
          <div className="px-4 pb-6">
            <div className="space-y-1.5">
              {filteredData.map((entry, index) => (
                <div key={index}>
                  <div className="flex items-center gap-20 px-2 py-4">
                    {/* Left section - Waste ID */}
                    <div className="flex-shrink-0">
                      <div className="text-[10px] text-gray-800 font-normal font-['Epilogue'] mb-1.5">
                        Waste ID
                      </div>
                      <div className="text-base text-gray-800 font-normal font-['Epilogue'] capitalize">
                        {entry.id}
                      </div>
                    </div>

                    {/* Middle section - Waste details and date */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-gray-800 font-bold font-['Epilogue'] mb-2.5">
                        {entry.type}
                      </div>
                      <div className="text-[10px] text-gray-800 font-normal font-['Epilogue']">
                        {entry.date}
                      </div>
                    </div>

                    {/* Right section - View button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => handleViewClick(entry)}
                        className="bg-[#009933] text-white text-[10px] font-bold px-[10px] py-[6px] rounded-full w-[61px] h-[27px] flex items-center justify-center"
                      >
                        View
                      </button>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < filteredData.length - 1 && (
                    <div className="w-full h-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around py-3 px-4">
              <Link to="/dashboard" className="flex flex-col items-center gap-1 py-2">
                <Home
                  className="w-[24px] h-[24px] text-[#9A9A9A]"
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
                  className="w-[24px] h-[24px] text-[#009933]"
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

      {/* Waste Details Modal */}
      {selectedWaste && (
        <WasteDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          wasteData={{
            id: selectedWaste.id,
            type: selectedWaste.type.includes("Plastic") ? "Plastic" : "Metals",
            weight: selectedWaste.weight,
            location: selectedWaste.location,
            confirmerAddress: selectedWaste.confirmerAddress,
          }}
        />
      )}
    </div>
  );
}
