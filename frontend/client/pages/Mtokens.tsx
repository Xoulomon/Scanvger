import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Eye, HandCoins, Home, Recycle, Settings, Wallet2 } from "lucide-react";
import RedeemModal from "../components/RedeemModal";
import DonateModal from "../components/DonateModal";
import DonateSuccessModal from "../components/DonateSuccessModal";

export default function Tokens() {
  const [activeTab, setActiveTab] = useState("received");
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showDonateSuccessModal, setShowDonateSuccessModal] = useState(false);
  const [donationDetails, setDonationDetails] = useState({
    amount: "",
    currency: "",
  });

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "successful",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/5c49b802e9013dd1d9ae23bae4e43c32ed2e4792?width=82",
    },
    {
      id: 2,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "pending",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4d35a2268442d358af95fa8cf5c63cdfcaf902b7?width=82",
    },
    {
      id: 3,
      name: "Mr Fidelis",
      role: "Recycler",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "failed",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
    },
    {
      id: 4,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "pending",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82",
    },
    {
      id: 5,
      name: "Mr Solomon",
      role: "Manufacturer",
      amount: "234 SCV",
      description: "65kg Of Plastic",
      status: "failed",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbdd1ab97565b5f5af992691d18d8d08c1f6fe49?width=82",
    },
    {
      id: 6,
      name: "Miss Bisi",
      role: "Collector",
      amount: "34 SCV",
      description: "65kg Of Plastic",
      status: "pending",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/843aa10cf5a6c499d3a962ed7ff9c456d9bad54b?width=82",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "successful":
        return "text-scavngr-green";
      case "pending":
        return "text-orange-500";
      case "failed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "successful":
        return "Successful";
      case "pending":
        return "Pending";
      case "failed":
        return "Failed";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-white font-epilogue max-w-[430px] mx-auto relative">
      <div>
        <div>
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
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              to="/manufactureDashboard"
              className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2} />
            </Link>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/28243d70b3922d379a2209498d826dc75e11a946?width=96"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Settings className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-3 space-y-6">
            {/* Token Balance Card */}
            <div className="relative h-[116px] bg-gradient-to-r from-[#009933] to-[#0AFC5B] rounded-lg overflow-hidden">
              {/* Background decoration */}
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

              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-['Epilogue']">
                    My Token Balance
                  </span>
                  <Eye className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-white text-4xl font-semibold font-['Epilogue']">
                    0
                  </span>
                  <span className="text-white text-2xl font-light font-['Epilogue']">
                    .00
                  </span>
                  <span className="text-white text-xl font-light font-['Epilogue'] ml-2">
                    SCV
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowRedeemModal(true)}
                className="flex-1 h-[55px] bg-green-50 rounded-full flex items-center justify-center gap-4 hover:bg-green-100 transition-colors"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M7.27916 8.00046C7.79787 8.45854 8.125 9.12857 8.125 9.875C8.125 11.2557 7.00571 12.375 5.625 12.375C4.87857 12.375 4.20854 12.0479 3.75046 11.5292M7.27916 8.00046C7.4268 8 7.58345 8 7.75 8H22.25C22.4166 8 22.5732 8 22.7208 8.00046M7.27916 8.00046C6.18566 8.00386 5.58619 8.03241 5.11502 8.27248C4.64462 8.51217 4.26217 8.89462 4.02248 9.36502C3.78241 9.83619 3.75386 10.4357 3.75046 11.5292M3.75046 11.5292C3.75 11.6768 3.75 11.8334 3.75 12V19C3.75 19.1666 3.75 19.3232 3.75046 19.4708M3.75046 19.4708C4.20854 18.9521 4.87857 18.625 5.625 18.625C7.00571 18.625 8.125 19.7443 8.125 21.125C8.125 21.8714 7.79787 22.5415 7.27916 22.9995M3.75046 19.4708C3.75386 20.5643 3.78241 21.1638 4.02248 21.635C4.26217 22.1054 4.64462 22.4878 5.11502 22.7275C5.58619 22.9676 6.18565 22.9961 7.27916 22.9995M7.27916 22.9995C7.4268 23 7.58345 23 7.75 23H22.25C22.4166 23 22.5732 23 22.7208 22.9995M26.25 19.4714C25.7919 18.9523 25.1217 18.625 24.375 18.625C22.9943 18.625 21.875 19.7443 21.875 21.125C21.875 21.8714 22.2021 22.5415 22.7208 22.9995M26.25 19.4714C26.2505 19.3236 26.25 19.1667 26.25 19V12C26.25 11.8334 26.25 11.6768 26.2495 11.5292M26.25 19.4714C26.2466 20.5645 26.2176 21.1639 25.9775 21.635C25.7378 22.1054 25.3554 22.4878 24.885 22.7275C24.4138 22.9676 23.8143 22.9961 22.7208 22.9995M26.2495 11.5292C25.7915 12.0479 25.1214 12.375 24.375 12.375C22.9943 12.375 21.875 11.2557 21.875 9.875C21.875 9.12857 22.2021 8.45854 22.7208 8.00046M26.2495 11.5292C26.2461 10.4357 26.2176 9.83619 25.9775 9.36502C25.7378 8.89462 25.3554 8.51217 24.885 8.27248C24.4138 8.03241 23.8143 8.00386 22.7208 8.00046M17.5 15.5C17.5 16.8807 16.3807 18 15 18C13.6193 18 12.5 16.8807 12.5 15.5C12.5 14.1193 13.6193 13 15 13C16.3807 13 17.5 14.1193 17.5 15.5Z"
                    stroke="url(#paint0_linear_327_1079)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_327_1079"
                      x1="15.0001"
                      y1="8"
                      x2="15.0001"
                      y2="23"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#019933" />
                      <stop offset="1" stopColor="#0AFC5B" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-800 text-sm font-['Epilogue']">
                  Redeem
                </span>
              </button>

              <button
                onClick={() => setShowDonateModal(true)}
                className="flex-1 h-[55px] bg-green-50 rounded-full flex items-center justify-center gap-4 hover:bg-green-100 transition-colors"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M15 4.25V11.75M15 4.25L11.875 7.375M15 4.25L18.125 7.375M7.27916 11.7505C7.79787 12.2085 8.125 12.8786 8.125 13.625C8.125 15.0057 7.00571 16.125 5.625 16.125C4.87857 16.125 4.20854 15.7979 3.75046 15.2792M7.27916 11.7505C7.9268 11.75 8.08345 11.75 8.25 11.75H10.5M7.27916 11.7505C6.68566 11.7539 6.08619 11.7824 5.61502 12.0225C5.14462 12.2622 4.76217 12.6446 4.52248 13.115C4.28241 13.5862 4.25386 14.1857 4.25046 15.2792M4.25046 15.2792C4.25 15.4268 4.25 15.5834 4.25 15.75V22.75C4.25 22.9166 4.25 23.0732 4.25046 23.2208M4.25046 23.2208C4.70854 22.7021 5.37857 22.375 6.125 22.375C7.50571 22.375 8.625 23.4943 8.625 24.875C8.625 25.6214 8.29787 26.2915 7.77916 26.7495M4.25046 23.2208C4.25386 24.3143 4.28241 24.9138 4.52248 25.385C4.76217 25.8554 5.14462 26.2378 5.61502 26.4775C6.08619 26.7176 6.68565 26.7461 7.77916 26.7495M7.77916 26.7495C7.9268 26.75 8.08345 26.75 8.25 26.75H22.25C22.4166 26.75 22.5732 26.75 22.7208 26.7495M26.25 23.2214C25.7919 22.7023 25.1217 22.375 24.375 22.375C22.9943 22.375 21.875 23.4943 21.875 24.875C21.875 25.6214 22.2021 26.2915 22.7208 26.7495M26.25 23.2214C26.2505 23.0736 26.25 22.9167 26.25 22.75V15.75C26.25 15.5834 26.25 15.4268 26.2495 15.2792M26.25 23.2214C26.2466 24.3145 26.2176 24.9139 26.4775 25.385C26.2378 25.8554 25.8554 26.2378 25.385 26.4775C24.9138 26.7176 24.3143 26.7461 23.2208 26.7495M26.2495 15.2792C26.2915 15.7979 25.6214 16.125 24.875 16.125C23.4943 16.125 22.375 15.0057 22.375 13.625C22.375 12.8786 22.7021 12.2085 23.2208 11.7505M26.2495 15.2792C26.2461 14.1857 26.2176 13.5862 26.4775 13.115C26.2378 12.6446 25.8554 12.2622 25.385 12.0225C24.9138 11.7824 24.3143 11.7539 23.2208 11.7505M23.2208 11.7505C23.0732 11.75 22.9166 11.75 22.75 11.75H20.5M17.5 19.25C17.5 20.6307 16.3807 21.75 15 21.75C13.6193 21.75 12.5 20.6307 12.5 19.25C12.5 17.8693 13.6193 16.75 15 16.75C16.3807 16.75 17.5 17.8693 17.5 19.25Z"
                    stroke="url(#paint0_linear_327_1083)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_327_1083"
                      x1="15.0001"
                      y1="4.25"
                      x2="15.0001"
                      y2="26.75"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#019933" />
                      <stop offset="1" stopColor="#0AFC5B" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-800 text-sm font-['Epilogue']">
                  Donate
                </span>
              </button>
            </div>

            {/* Token History Section */}
            <div className="space-y-6">
              <h2 className="text-sm font-medium text-gray-800 font-['Epilogue']">
                Token History
              </h2>

              {/* Tab Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setActiveTab("received")}
                  className={`px-6 py-2.5 rounded-full text-xs font-['Epilogue'] transition-all ${activeTab === "received"
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-500"
                    }`}
                >
                  Received
                </button>
                <button
                  onClick={() => setActiveTab("sent")}
                  className={`px-6 py-2.5 rounded-full text-xs font-['Epilogue'] transition-all ${activeTab === "sent"
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-500"
                    }`}
                >
                  Sent
                </button>
              </div>

              {/* Transaction List */}
              <div className="space-y-0">
                {transactions.map((transaction, index) => (
                  <div key={transaction.id}>
                    <div className="flex items-center justify-between py-4 px-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={transaction.avatar}
                          alt={transaction.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="space-y-1">
                          <p className="text-xs font-['Epilogue'] text-gray-800">
                            {transaction.name}
                          </p>
                          <p className="text-xs font-['Epilogue'] text-gray-600">
                            {transaction.role}
                          </p>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-xs font-medium font-['Epilogue'] text-gray-800">
                          {transaction.amount}
                        </p>
                        <p className="text-xs font-['Epilogue'] text-gray-600">
                          {transaction.description}
                        </p>
                      </div>

                      <div className="text-right">
                        <p
                          className={`text-xs font-['Epilogue'] capitalize ${getStatusColor(transaction.status)}`}
                        >
                          {getStatusText(transaction.status)}
                        </p>
                      </div>
                    </div>
                    {index < transactions.length - 1 && (
                      <div className="w-full h-px bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex items-center justify-around py-3 px-4">
              <Link to="/manufactureDashboard" className="flex flex-col items-center gap-1 py-2">
                <Home
                  className="w-[24px] h-[24px] text-[#9A9A9A]"
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
                to="/Mtokens"
                className="flex flex-col items-center gap-1 py-2"
              >
                <HandCoins
                  className="w-[24px] h-[24px] text-[#009933]"
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

          {/* Redeem Modal */}
          <RedeemModal
            isOpen={showRedeemModal}
            onClose={() => setShowRedeemModal(false)}
            availableBalance="3,456.06 SCV"
          />

          {/* Donate Modal */}
          <DonateModal
            isOpen={showDonateModal}
            onClose={() => setShowDonateModal(false)}
            availableBalance="3,456.06 SCV"
            onSuccess={(amount, currency) => {
              setDonationDetails({ amount, currency });
              setShowDonateSuccessModal(true);
            }}
          />

          {/* Donate Success Modal */}
          <DonateSuccessModal
            isOpen={showDonateSuccessModal}
            onClose={() => setShowDonateSuccessModal(false)}
            amount={donationDetails.amount}
            currency={donationDetails.currency}
          />
        </div>
      </div>
    </div>
  );
}
