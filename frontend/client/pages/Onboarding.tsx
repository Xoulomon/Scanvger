import { Target, User, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScavngrLogo from "../components/ScavngrLogo";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-white font-epilogue text-black relative max-w-[430px] mx-auto overflow-hidden">
      {/* Background Green Icon - Top Right Corner (Decoration Only) */}
      <div className="absolute -top-32 -right-16 w-[352px] h-[352px] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fce6a43c9fa314d36b8d06fc2cfdf6b68%2Febf12943e6b44652808b6ede31c48fbd?format=webp&width=800"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-64 px-6">
        {/* Logo and Tagline Section - Centered and Below Background Circle */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Logo */}
          <ScavngrLogo size="large" className="mb-5" />

          {/* Tagline */}
          <p className="text-black text-[17px] italic font-medium">
            Earn Tokens As You Recycle...
          </p>
        </div>

        {/* Registration Options */}
        <div className="space-y-5 mb-16">
          {/* Register as Recycler */}
          <Link
            to="/register/recycler"
            className="w-full h-[55px] border-2 border-scavngr-green-primary rounded-full flex items-center justify-center gap-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <Target
              className="w-6 h-6 text-scavngr-green-primary"
              strokeWidth={2}
            />
            <span className="text-base font-normal">
              Register as a <span className="font-bold">Recycler</span>
            </span>
          </Link>

          {/* Register as Collector */}
          <Link
            to="/register/collector"
            className="w-full h-[55px] border-2 border-scavngr-green-primary rounded-full flex items-center justify-center gap-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <User
              className="w-6 h-6 text-scavngr-green-primary"
              strokeWidth={2}
            />
            <span className="text-base font-normal">
              Register as a <span className="font-bold">Collector</span>
            </span>
          </Link>

          {/* Register as Manufacturer */}
          <Link
            to="/register/manufacturer"
            className="w-full h-[55px] border-2 border-scavngr-green-primary rounded-full flex items-center justify-center gap-4 bg-white hover:bg-gray-50 transition-colors"
          >
            <Building2
              className="w-6 h-6 text-scavngr-green-primary"
              strokeWidth={2}
            />
            <span className="text-base font-normal">
              Register as a <span className="font-bold">Manufacturer</span>
            </span>
          </Link>
        </div>

        {/* Login Section */}
        <div className="space-y-5 mb-8">
          <p className="text-center text-sm text-black lowercase">
            Already have an account ? login below
          </p>

          <Link
            to="/login"
            className="w-full h-[55px] bg-gradient-to-r from-scavngr-green-primary to-scavngr-green-light text-white font-medium text-base rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>
    </div>
  );
}
