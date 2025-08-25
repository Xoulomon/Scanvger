import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DonateSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  currency: string;
}

export default function DonateSuccessModal({
  isOpen,
  onClose,
  amount,
  currency,
}: DonateSuccessModalProps) {
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

  // Calculate USDT equivalent (using mock conversion rate)
  const usdtAmount = Math.round((parseFloat(amount) || 320) * 0.31); // Mock conversion rate

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
            className="bg-white rounded-[30px] p-12 max-w-[345px] w-full shadow-[0_8px_37.3px_rgba(0,0,0,0.06)]"
            onClick={(e) => e.stopPropagation()}
            style={{ height: "333px" }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-[70px] h-[70px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                  }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-scavngr-green to-scavngr-green-light flex items-center justify-center"
                >
                  <motion.svg
                    width="43"
                    height="27"
                    viewBox="0 0 43 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ pathLength: 0 }}
                    animate={showCheck ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <motion.path
                      d="M3.02368 10.8865L13.5547 21.1137L39.9766 4.3865"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </motion.svg>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-lg font-['Epilogue'] leading-[157%] capitalize text-black">
                  You just converted{" "}
                  <span className="font-bold">{amount} SCV</span> to{" "}
                  <span className="font-bold text-scavngr-green">
                    {usdtAmount} {currency}
                  </span>{" "}
                  to your wallet
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
