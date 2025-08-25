import { useState } from "react";
import {
  ChevronLeft,
  Target,
  MapPin,
  ChevronDown,
  User,
  Building2,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScavngrLogo from "../components/ScavngrLogo";

export default function RegisterStep1() {
  const location = useLocation();
  const navigate = useNavigate();
  const userType = location.pathname.split("/")[2] || "recycler";

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    surname: "",
    phoneNumber: "",
    address: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    surname: false,
    phoneNumber: false,
    address: false,
  });

  const getUserTypeInfo = () => {
    switch (userType) {
      case "collector":
        return { icon: User, label: "Collector" };
      case "manufacturer":
        return { icon: Building2, label: "Manufacturer" };
      default:
        return { icon: Target, label: "Recycler" };
    }
  };

  const { icon: TypeIcon, label } = getUserTypeInfo();

  // Validation functions
  const validateField = (field, value) => {
    switch (field) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2)
          return "First name must be at least 2 characters";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "First name should only contain letters";
        return "";

      case "surname":
        if (!value.trim()) return "Surname is required";
        if (value.trim().length < 2)
          return "Surname must be at least 2 characters";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "Surname should only contain letters";
        return "";

      case "phoneNumber":
        if (!value.trim()) return "Phone number is required";
        if (!/^\d{10,15}$/.test(value.replace(/\s/g, "")))
          return "Please enter a valid phone number (10-15 digits)";
        return "";

      case "address":
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 5)
          return "Address must be at least 5 characters";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleProceed = () => {
    setTouched({
      firstName: true,
      surname: true,
      phoneNumber: true,
      address: true,
    });

    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      surname: validateField("surname", formData.surname),
      phoneNumber: validateField("phoneNumber", formData.phoneNumber),
      address: validateField("address", formData.address),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      // Pass formData and userType to RegisterStep2
      navigate(`/register/${userType}/step2`, { state: { formData, userType } });
    }
  };

  return (
    <div className="min-h-screen bg-white font-epilogue text-scavngr-gray-text relative max-w-[430px] mx-auto">
      <div className="flex items-center justify-between px-6 pt-6 mb-12">
        <Link
          to="/"
          className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <ChevronLeft
            className="w-5 h-5 text-scavngr-green-primary"
            strokeWidth={2}
          />
        </Link>
        <ScavngrLogo size="small" />
      </div>

      <div className="px-6 pb-8">
        <div className="mb-7">
          <div className="flex items-center gap-2.5 mb-5">
            <TypeIcon
              className="w-10 h-10 text-scavngr-green-primary"
              strokeWidth={2}
            />
            <h1 className="text-xl font-normal">
              Register as a{" "}
              <span className="text-scavngr-green-primary font-semibold">
                {label}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-7">
            <span className="text-xs text-scavngr-gray-text">Step 1 Of 2</span>
            <div className="flex gap-2">
              <div className="w-10 h-1 bg-scavngr-green-primary rounded-full"></div>
              <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-scavngr-green-primary mb-6">
            Basic Details
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2.5">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  onBlur={() => handleBlur("firstName")}
                  placeholder="Enter your first name"
                  className={`w-full h-[55px] px-3 py-2 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${
                    touched.firstName && errors.firstName
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                  }`}
                />
              </div>
              {touched.firstName && errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2.5">
                Surname
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.surname}
                  onChange={(e) => handleInputChange("surname", e.target.value)}
                  onBlur={() => handleBlur("surname")}
                  placeholder="Enter your Surname"
                  className={`w-full h-[55px] px-3 py-2 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${
                    touched.surname && errors.surname
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                  }`}
                />
              </div>
              {touched.surname && errors.surname && (
                <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2.5">
                Phone Number
              </label>
              <div className="relative">
                <div
                  className={`w-full h-[55px] rounded-full border bg-white flex items-center overflow-hidden ${
                    touched.phoneNumber && errors.phoneNumber
                      ? "border-red-500"
                      : "border-scavngr-gray-light focus-within:border-scavngr-green-primary"
                  }`}
                >
                  <div className="flex items-center gap-3 px-3 border-r border-scavngr-gray-light">
                    <div className="flex gap-1">
                      <div className="w-2 h-3 bg-scavngr-green-primary rounded-sm"></div>
                      <div className="w-2 h-3 bg-scavngr-green-primary rounded-sm"></div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-scavngr-green-primary" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    onBlur={() => handleBlur("phoneNumber")}
                    placeholder="Enter phone number"
                    className="flex-1 h-full px-3 text-sm placeholder:text-scavngr-gray-medium focus:outline-none"
                  />
                </div>
              </div>
              {touched.phoneNumber && errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2.5">
                Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                  <MapPin
                    className="w-6 h-6 text-scavngr-green-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  onBlur={() => handleBlur("address")}
                  placeholder="Enter your Address"
                  className={`w-full h-[55px] pl-12 pr-3 py-2 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${
                    touched.address && errors.address
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                  }`}
                />
              </div>
              {touched.address && errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <button
            onClick={handleProceed}
            disabled={!isFormValid()}
            className={`w-full h-[55px] font-medium text-base rounded-full transition-all duration-200 ${
              isFormValid()
                ? "bg-gradient-to-r from-scavngr-green-primary to-scavngr-green-light text-white hover:shadow-lg cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Proceed
          </button>

          <p className="text-center text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-scavngr-green-primary font-bold">
              Login Here
            </Link>
          </p>
        </div>
      </div>

      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>
    </div>
  );
}