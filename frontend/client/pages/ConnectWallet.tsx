import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ScavngrLogo from "../components/ScavngrLogo";
import PhantomIcon from "public/phantom.png";

export default function ConnectWallet() {
  return (
    <div className="min-h-screen bg-white font-epilogue text-black relative max-w-[430px] mx-auto">
      {/* Header with back button */}
      <div className="flex items-center justify-start px-6 pt-6 mb-8">
        <Link
          to="/login"
          className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <ChevronLeft
            className="w-5 h-5 text-scavngr-green-primary"
            strokeWidth={2}
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-64 px-8">
        {/* Logo and Tagline Section - Centered */}
        <div className="flex flex-col items-center text-center mb-36">
          {/* Logo */}
          <ScavngrLogo size="large" className="mb-5" />

          {/* Tagline */}
          <p className="text-black text-[17px] italic font-medium">
            Earn tokens as you recycle...
          </p>
        </div>

        {/* Wallet Connection Options */}
        <div className="w-full space-y-4 mb-8">
          {/* Connect Phantom */}
          <button className="w-full h-[55px] bg-[#EEF3F0] rounded-full flex items-center justify-center gap-4 hover:bg-opacity-80 transition-colors">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_280)">
                <path
                  d="M14.5 29C22.5081 29 29 22.5081 29 14.5C29 6.49187 22.5081 0 14.5 0C6.49187 0 0 6.49187 0 14.5C0 22.5081 6.49187 29 14.5 29Z"
                  fill="url(#paint0_linear_9_280)"
                />
                <path
                  d="M25.0541 14.7071H22.4618C22.4618 9.46241 18.1641 5.21094 12.8624 5.21094C7.62631 5.21094 3.3693 9.35832 3.26512 14.5132C3.15732 19.8417 8.2108 24.4688 13.5979 24.4688H14.2755C19.0249 24.4688 25.3906 20.7909 26.3852 16.3096C26.5689 15.4836 25.9092 14.7071 25.0541 14.7071ZM9.01009 14.9408C9.01009 15.6421 8.43023 16.2157 7.72124 16.2157C7.01226 16.2157 6.43242 15.6419 6.43242 14.9408V12.8781C6.43242 12.1768 7.01226 11.6031 7.72124 11.6031C8.43023 11.6031 9.01009 12.1768 9.01009 12.8781V14.9408ZM13.4855 14.9408C13.4855 15.6421 12.9057 16.2157 12.1967 16.2157C11.4877 16.2157 10.9078 15.6419 10.9078 14.9408V12.8781C10.9078 12.1768 11.4879 11.6031 12.1967 11.6031C12.9057 11.6031 13.4855 12.1768 13.4855 12.8781V14.9408Z"
                  fill="url(#paint1_linear_9_280)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_9_280"
                  x1="14.5"
                  y1="0"
                  x2="14.5"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#534BB1" />
                  <stop offset="1" stopColor="#551BF9" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_9_280"
                  x1="14.8397"
                  y1="5.21094"
                  x2="14.8397"
                  y2="24.4688"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.82" />
                </linearGradient>
                <clipPath id="clip0_9_280">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-normal text-scavngr-gray-text">
              Connect Phantom
            </span>
          </button>

          {/* Connect Trust Wallet */}
          <button className="w-full h-[55px] bg-[#EAF4FF] rounded-full flex items-center justify-center gap-4 hover:bg-opacity-80 transition-colors">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_144)">
                <path
                  d="M18 35C27.665 35 35.5 27.165 35.5 17.5C35.5 7.83502 27.665 0 18 0C8.33502 0 0.5 7.83502 0.5 17.5C0.5 27.165 8.33502 35 18 35Z"
                  fill="white"
                />
                <path
                  d="M18.0103 7.34863C21.5417 10.2979 25.5913 10.116 26.7484 10.116C26.4953 26.8894 24.5669 23.5633 18.0103 28.2666C11.4536 23.5633 9.53728 26.8894 9.28418 10.116C10.4292 10.116 14.4788 10.2979 18.0103 7.34863Z"
                  stroke="#3375BB"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_144">
                  <rect
                    width="35"
                    height="35"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-normal text-scavngr-gray-text">
              Connect Trust Wallet
            </span>
          </button>

          {/* Connect Metamask */}
          <button className="w-full h-[55px] bg-[#FFF6EE] rounded-full flex items-center justify-center gap-4 hover:bg-opacity-80 transition-colors">
            <svg
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_189)">
                <path
                  d="M18 35C27.665 35 35.5 27.165 35.5 17.5C35.5 7.83502 27.665 0 18 0C8.33502 0 0.5 7.83502 0.5 17.5C0.5 27.165 8.33502 35 18 35Z"
                  fill="white"
                />
                <path
                  d="M27.8483 7.38281L19.3127 13.7223L20.8912 9.98208L27.8483 7.38281Z"
                  fill="#E2761B"
                  stroke="#E2761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.14355 7.38281L16.6105 13.7823L15.1092 9.98208L8.14355 7.38281Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7769 22.0776L22.5037 25.5605L27.3676 26.8987L28.7659 22.1548L24.7769 22.0776Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.24268 22.1548L8.63238 26.8987L13.4964 25.5605L11.2231 22.0776L7.24268 22.1548Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.2218 16.1928L11.8665 18.2431L16.6961 18.4575L16.5245 13.2676L13.2218 16.1928Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7696 16.1928L19.424 13.2075L19.3125 18.4575L24.1336 18.2431L22.7696 16.1928Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4963 25.5608L16.3958 24.1453L13.8909 22.1895L13.4963 25.5608Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5957 24.1453L22.5038 25.5608L22.1006 22.1895L19.5957 24.1453Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5038 25.5605L19.5957 24.145L19.8273 26.0409L19.8016 26.8386L22.5038 25.5605Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4963 25.5605L16.1985 26.8386L16.1814 26.0409L16.3958 24.145L13.4963 25.5605Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.2416 20.9365L13.8225 20.2245L15.5296 19.4438L16.2416 20.9365Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.75 20.9365L20.462 19.4438L22.1777 20.2245L19.75 20.9365Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.4964 25.5605L13.9082 22.0776L11.2231 22.1548L13.4964 25.5605Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.092 22.0776L22.5038 25.5605L24.7771 22.1548L22.092 22.0776Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.1336 18.2432L19.3125 18.4576L19.7586 20.9368L20.4706 19.4441L22.1863 20.2248L24.1336 18.2432Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8223 20.2248L15.538 19.4441L16.2415 20.9368L16.6961 18.4576L11.8665 18.2432L13.8223 20.2248Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.8665 18.2432L13.891 22.1892L13.8223 20.2248L11.8665 18.2432Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.1864 20.2248L22.1006 22.1892L24.1337 18.2432L22.1864 20.2248Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6964 18.4575L16.2417 20.9367L16.8079 23.8619L16.9366 20.0102L16.6964 18.4575Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.3127 18.4575L19.0811 20.0016L19.184 23.8619L19.7588 20.9367L19.3127 18.4575Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.7586 20.9366L19.1838 23.8619L19.5956 24.145L22.1005 22.1891L22.1863 20.2246L19.7586 20.9366Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8225 20.2246L13.8911 22.1891L16.396 24.145L16.8078 23.8619L16.2416 20.9366L13.8225 20.2246Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8015 26.8387L19.8272 26.0409L19.6128 25.8522H16.3787L16.1814 26.0409L16.1985 26.8387L13.4963 25.5605L14.44 26.3326L16.353 27.6623H19.6385L21.5601 26.3326L22.5037 25.5605L19.8015 26.8387Z"
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5956 24.1449L19.1838 23.8618H16.8076L16.3959 24.1449L16.1814 26.0407L16.3787 25.852H19.6128L19.8272 26.0407L19.5956 24.1449Z"
                  fill="#161616"
                  stroke="#161616"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.2082 14.134L28.9374 10.634L27.8479 7.38281L19.5955 13.5078L22.7695 16.1929L27.256 17.5054L28.2511 16.3473L27.8222 16.0384L28.5084 15.4122L27.9766 15.0005L28.6629 14.4772L28.2082 14.134Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.0625 10.634L7.79167 14.134L7.32843 14.4772L8.01471 15.0005L7.49142 15.4122L8.1777 16.0384L7.74877 16.3473L8.73529 17.5054L13.2218 16.1929L16.3958 13.5078L8.14338 7.38281L7.0625 10.634Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.2562 17.5054L22.7697 16.1929L24.1337 18.2431L22.1006 22.1892L24.7771 22.1549H28.766L27.2562 17.5054Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.2218 16.1929L8.73532 17.5054L7.24268 22.1549H11.2231L13.891 22.1892L11.8665 18.2431L13.2218 16.1929Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.3126 18.4574L19.5956 13.5077L20.8996 9.98193H15.1091L16.3959 13.5077L16.6961 18.4574L16.7991 20.0187L16.8077 23.8618H19.1839L19.201 20.0187L19.3126 18.4574Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.694742"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_189">
                  <rect
                    x="0.5"
                    width="35"
                    height="35"
                    rx="16.6738"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-normal text-scavngr-gray-text">
              Connect Metamask
            </span>
          </button>

          {/* Connect Coinbase */}
          <button className="w-full h-[55px] bg-[#E5EDFF] rounded-full flex items-center justify-center gap-4 hover:bg-opacity-80 transition-colors">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_142)">
                <path
                  d="M15 30.5C23.2843 30.5 30 23.7843 30 15.5C30 7.21573 23.2843 0.5 15 0.5C6.71573 0.5 0 7.21573 0 15.5C0 23.7843 6.71573 30.5 15 30.5Z"
                  fill="#0052FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.45312 15.5C4.45312 21.3249 9.17511 26.0469 15 26.0469C20.8249 26.0469 25.5469 21.3249 25.5469 15.5C25.5469 9.67511 20.8249 4.95312 15 4.95312C9.17511 4.95312 4.45312 9.67511 4.45312 15.5ZM12.3047 12.1016C11.9164 12.1016 11.6016 12.4164 11.6016 12.8047V18.1953C11.6016 18.5836 11.9164 18.8984 12.3047 18.8984H17.6953C18.0836 18.8984 18.3984 18.5836 18.3984 18.1953V12.8047C18.3984 12.4164 18.0836 12.1016 17.6953 12.1016H12.3047Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_142">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-sm font-normal text-scavngr-gray-text">
              Connect Coinbase
            </span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>
    </div>
  );
}
