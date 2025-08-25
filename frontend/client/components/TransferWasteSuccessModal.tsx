import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransferWasteSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferWasteSuccessModal({
  isOpen,
  onClose,
}: TransferWasteSuccessModalProps) {
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowCheck(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setShowCheck(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(247, 244, 244, 0.61)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-[30px] py-16 px-12 max-w-[345px] w-full shadow-[0_8px_37.3px_rgba(0,0,0,0.06)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-8">
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <h2 className="text-black text-lg font-['Epilogue'] leading-[157%] lowercase">
                  Waste Transfer Successful 
                </h2>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
