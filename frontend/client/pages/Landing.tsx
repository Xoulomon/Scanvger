import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("Manufacturer");

  // Content for each tab
  const tabContent = {
    Recycler: {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d287bcf1a73e07c9706bbad7c7a76e651e2db5be?width=762",
      title: "As a Recycler :",
      features: [
        "* Log In App → Confirm Waste → Make Payment",
        "* View Supply Chain",
        "* And So Much More",
      ],
    },
    Collector: {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d287bcf1a73e07c9706bbad7c7a76e651e2db5be?width=762",
      title: "As a Collector :",
      features: [
        "* Log In App → Confirm Waste → Make Payment",
        "* View Supply Chain",
        "* And So Much More",
      ],
    },
    Manufacturer: {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3478ea30d2eed320097882e9df69bc2cc343f90c?width=762",
      title: "As a Manufacturer :",
      features: [
        "* Log In App → Confirm Waste → Make Payment",
        "* View Supply Chain",
        "* And So Much More",
      ],
    },
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
                className={`w-1 bg-black rounded-sm ${
                  bar === 1
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

      {/* Green Hero Section */}
      <div className="relative bg-gradient-to-r from-green-gradient-start to-green-gradient-end pb-20">
        {/* Overlay Content */}
        <div className="relative z-10">
          {/* Header with Logo and Login */}
          <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-green-gradient-start to-green-gradient-end flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4847 0.702202C20.9323 0.702202 26.9694 6.73937 26.9694 14.1869C26.9694 21.6345 20.9323 27.6716 13.4847 27.6716C6.03717 27.6716 0 21.6345 0 14.1869C0 6.73937 6.03717 0.702202 13.4847 0.702202Z"
                    fill="url(#paint0_linear)"
                  />
                  <mask
                    id="mask0"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="27"
                    height="28"
                  >
                    <path
                      d="M13.4847 0.702202C20.9323 0.702202 26.9694 6.73937 26.9694 14.1869C26.9694 21.6345 20.9323 27.6716 13.4847 27.6716C6.03717 27.6716 0 21.6345 0 14.1869C0 6.73937 6.03717 0.702202 13.4847 0.702202Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.193 25.4182L17.7194 26.5762C17.1275 22.6611 17.9786 19.0082 19.613 15.4985C16.7073 18.7424 13.3852 20.5301 9.66959 20.9409L11.4303 22.3714C9.59206 24.1019 7.31166 25.0223 5.04724 25.03V31.0103C9.139 30.652 13.1701 28.7808 16.193 25.4185V25.4182Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.7213 2.31565C19.4994 1.45539 13.1183 4.28236 10.4014 7.34904L8.8289 5.68387C8.88276 9.68803 7.70586 13.5925 5.19849 16.6645C8.82032 14.3758 11.8938 12.6121 15.5153 12.8837L14.3035 11.6255C15.9024 8.74373 23.4958 5.58799 26.4868 8.74817L23.7213 2.31535V2.31565Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0"
                      y1="14.1869"
                      x2="26.9694"
                      y2="14.1869"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#009933" />
                      <stop offset="1" stopColor="#0AFC5B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Sca
              </span>
              <span className="text-black font-bold text-xl tracking-tight">
                vngr
              </span>
            </div>
            <Button
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 text-sm"
            >
              Login
            </Button>
          </div>

          {/* Central Content */}
          <div className="px-8 pt-4 pb-8">
            {/* 3D Image with Role Labels */}
            <div className="relative flex justify-center items-center mb-6 h-48">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/aecfed807d6a02d5c124d4ad3198492935f24ff2?width=309"
                alt="3D Recycling Icon"
                className="w-32 h-36 z-10"
              />
              {/* Role Labels */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                  <span className="text-white text-sm">Manufacturer</span>
                </div>
                <div className="absolute top-12 right-0 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                  <span className="text-white text-sm">Collector</span>
                </div>
                <div className="absolute bottom-4 left-8 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                  <span className="text-white text-sm">Recycler</span>
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-normal mb-3">
                <span className="text-black">Earn As You </span>
                <span className="text-white font-bold">Recycle</span>
              </h1>
              <p className="text-white text-sm leading-relaxed px-2">
                Scavenger is a blockchain app rewards users with tokens based on
                waste weight, ensuring transparency via supply chain tracking
              </p>
            </div>

            {/* Get Started Button */}
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-base font-medium"
              >
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offerings Section */}
      <div className="bg-white px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-green-gradient-start to-green-gradient-end bg-clip-text text-transparent">
          Our Offerings
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-6">
          {["Recycler", "Collector", "Manufacturer"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-400 border border-gray-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Image */}
        <div className="mb-6">
          <img
            src={tabContent[activeTab as keyof typeof tabContent].image}
            alt={`${activeTab} facility`}
            className="w-full h-64 object-cover rounded-2xl"
          />
        </div>

        {/* Content Description */}
        <div className="mb-8">
          <h3 className="text-base font-bold mb-3 bg-gradient-to-r from-green-gradient-start to-green-gradient-end bg-clip-text text-transparent">
            {tabContent[activeTab as keyof typeof tabContent].title}
          </h3>
          <div className="space-y-2">
            {tabContent[activeTab as keyof typeof tabContent].features.map(
              (feature, index) => (
                <p key={index} className="text-sm text-black capitalize">
                  {feature}
                </p>
              ),
            )}
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-white hover:from-green-gradient-start/90 hover:to-green-gradient-end/90 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-[681px] right-8">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/64ab99f7137ca7e3039eedcc43340afe16b495e4?width=112"
          alt="Decorative element"
          className="w-14 h-16"
        />
      </div>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-green-gradient-start to-green-gradient-end flex items-center justify-center">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4847 0C20.9323 0 26.9694 6.03717 26.9694 13.4847C26.9694 20.9323 20.9323 26.9694 13.4847 26.9694C6.03717 26.9694 0 20.9323 0 13.4847C0 6.03717 6.03717 0 13.4847 0Z"
                  fill="url(#paint0_linear_footer)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_footer"
                    x1="0"
                    y1="13.4847"
                    x2="26.9694"
                    y2="13.4847"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#009933" />
                    <stop offset="1" stopColor="#0AFC5B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-green-primary font-bold text-xl tracking-tight">
                  Sca
                </span>
                <span className="text-black font-bold text-xl tracking-tight">
                  vngr
                </span>
              </div>
              <p className="text-xs italic text-black">Earn As You Recycle</p>
            </div>
          </div>
          <p className="text-xs text-black">© 2025 Scavenger</p>
        </div>
      </div>
    </div>
  );
}
