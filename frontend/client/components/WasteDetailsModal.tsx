import { motion, AnimatePresence } from "framer-motion";
import { X, Copy } from "lucide-react";

interface WasteDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wasteData: {
    id: string;
    type: string;
    weight: string;
    location: string;
    confirmerAddress: string;
  };
}

export default function WasteDetailsModal({
  isOpen,
  onClose,
  wasteData,
}: WasteDetailsModalProps) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(wasteData.id);
  };

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
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-[430px] bg-white rounded-t-[30px] shadow-lg"
            style={{
              boxShadow: "14px 30px 40.5px 41px rgba(0, 0, 0, 0.06)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-12 py-4">
              {/* Close button */}
              <div className="flex justify-end mb-2.5">
                <button onClick={onClose} className="p-1">
                  <X className="w-6 h-6 text-gray-300" strokeWidth={2} />
                </button>
              </div>

              {/* Title */}
              <div className="text-center mb-5">
                <h2 className="text-base font-medium text-[#009933] font-['Epilogue']">
                  Waste Details
                </h2>
              </div>

              {/* Content */}
              <div className="bg-gray-50 rounded-[10px] p-4 space-y-4">
                {/* Waste ID with copy icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black font-['Inter']">
                    Waste ID -
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs text-black font-['Inter']">
                      {wasteData.id}
                    </span>
                    <button
                      onClick={handleCopyId}
                      className="flex items-center justify-center w-5 h-5"
                    >
                      <Copy className="w-5 h-5 text-[#009933]" />
                    </button>
                  </div>
                </div>

                {/* Waste Type */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black font-['Inter']">
                    Waste Type -
                  </span>
                  <span className="text-xs text-black font-['Inter']">
                    {wasteData.type}
                  </span>
                </div>

                {/* Waste Weight */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black font-['Inter']">
                    Waste Weight -
                  </span>
                  <span className="text-xs text-black font-['Inter']">
                    {wasteData.weight}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black font-['Inter']">
                    Location -
                  </span>
                  <span className="text-xs text-black font-['Inter']">
                    {wasteData.location}
                  </span>
                </div>

                {/* Confirmer Address */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black font-['Inter']">
                    Confirmer Address -
                  </span>
                  <span className="text-xs text-black font-['Inter'] break-all">
                    {wasteData.confirmerAddress}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
