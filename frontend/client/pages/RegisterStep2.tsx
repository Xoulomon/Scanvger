import { useState, useEffect } from "react";
import {
  EyeOff,
  Eye,
  ChevronLeft,
  Target,
  CheckCircle,
  Circle,
  User,
  Building2,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase";
import ScavngrLogo from "../components/ScavngrLogo";
import RegistrationSuccessModal from "../components/RegistrationSuccessModal";

export default function RegisterStep2() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split("/");
  const userType = pathParts[2] || "recycler";
  const { formData: step1Data } = location.state || {};

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
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

  const validateField = (field, value) => {
    switch (field) {
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/^(?=.*[a-z])(?=.*[A-Z])/.test(value))
          return "Password must contain both uppercase and lowercase letters";
        if (!/[^A-Za-z0-9]/.test(value))
          return "Password must contain at least one special character";
        if (!/\d/.test(value))
          return "Password must contain at least one number";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    if (field === "password" && formData.confirmPassword) {
      const confirmError = validateField("confirmPassword", formData.confirmPassword);
      setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const hasMinLength = formData.password.length >= 8;
  const hasUpperLower = /^(?=.*[a-z])(?=.*[A-Z])/.test(formData.password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(formData.password);
  const hasNumber = /\d/.test(formData.password);

  const isFormValid = () => {
    return (
      step1Data &&
      Object.values(formData).every((value) => value.trim() !== "") &&
      Object.values(errors).every((error) => error === "") &&
      hasMinLength &&
      hasUpperLower &&
      hasSpecialChar &&
      hasNumber &&
      formData.password === formData.confirmPassword
    );
  };

  const handleRegister = async () => {
    setTouched({
      email: true,
      password: true,
      confirmPassword: true,
    });

    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField("confirmPassword", formData.confirmPassword),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "") && isFormValid()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          email: formData.email,
          firstName: step1Data.firstName,
          surname: step1Data.surname,
          phoneNumber: step1Data.phoneNumber,
          address: step1Data.address,
          role: userType,
          createdAt: new Date(),
        });

        setShowConfirmationModal(true);
      } catch (err) {
        setErrors({ ...errors, email: err.message || "Registration failed" });
      }
    }
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
    navigate("/login"); // Navigate to login page
  };

  useEffect(() => {
    if (showConfirmationModal) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmationModal]);

  return (
    <div className="min-h-screen bg-white font-epilogue text-scavngr-gray-text relative max-w-[430px] mx-auto">
      <div className="flex items-center justify-between px-6 pt-6 mb-12">
        <Link
          to={`/register/${userType}`}
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
            <span className="text-xs text-scavngr-gray-text">Step 2 Of 2</span>
            <div className="flex gap-2">
              <div className="w-10 h-1 bg-scavngr-green-primary rounded-full"></div>
              <div className="w-10 h-1 bg-scavngr-green-primary rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-bold text-scavngr-green-primary mb-5">
            Security Details
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2.5">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="Enter your email"
                  className={`w-full h-[55px] px-3 py-2 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${touched.email && errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                    }`}
                />
              </div>
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2.5">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onBlur={() => handleBlur("password")}
                  placeholder="Enter password"
                  className={`w-full h-[55px] px-3 py-2 pr-12 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${touched.password && errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5 text-scavngr-gray-text" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-scavngr-gray-text" />
                  )}
                </button>
              </div>
              {touched.password && errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2.5">
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  onBlur={() => handleBlur("confirmPassword")}
                  placeholder="Re-enter password"
                  className={`w-full h-[55px] px-3 py-2 pr-12 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${touched.confirmPassword && errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showConfirmPassword ? (
                    <Eye className="w-5 h-5 text-scavngr-gray-text" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-scavngr-gray-text" />
                  )}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-xs text-scavngr-gray-text mb-2.5">
            Password must include:
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              {hasMinLength ? (
                <CheckCircle className="w-[18px] h-[18px] text-scavngr-green-dark fill-scavngr-green-light" />
              ) : (
                <Circle
                  className="w-[18px] h-[18px] text-scavngr-gray-dark"
                  strokeWidth={1.5}
                />
              )}
              <span
                className={`text-xs ${hasMinLength ? "text-scavngr-green-dark" : "text-scavngr-gray-light"}`}
              >
                At Least 8 Characters
              </span>
            </div>
            <div className="flex items-center gap-2">
              {hasUpperLower ? (
                <CheckCircle className="w-[18px] h-[18px] text-scavngr-green-dark fill-scavngr-green-light" />
              ) : (
                <Circle
                  className="w-[18px] h-[18px] text-scavngr-gray-dark"
                  strokeWidth={1.5}
                />
              )}
              <span
                className={`text-xs ${hasUpperLower ? "text-scavngr-green-dark" : "text-scavngr-gray-light"}`}
              >
                Capital & Lowercase Letters
              </span>
            </div>
            <div className="flex items-center gap-2">
              {hasSpecialChar ? (
                <CheckCircle className="w-[18px] h-[18px] text-scavngr-green-dark fill-scavngr-green-light" />
              ) : (
                <Circle
                  className="w-[18px] h-[18px] text-scavngr-gray-dark"
                  strokeWidth={1.5}
                />
              )}
              <span
                className={`text-xs ${hasSpecialChar ? "text-scavngr-green-dark" : "text-scavngr-gray-light"}`}
              >
                A Special Character '*+@' etc
              </span>
            </div>
            <div className="flex items-center gap-2">
              {hasNumber ? (
                <CheckCircle className="w-[18px] h-[18px] text-scavngr-green-dark fill-scavngr-green-light" />
              ) : (
                <Circle
                  className="w-[18px] h-[18px] text-scavngr-gray-dark"
                  strokeWidth={1.5}
                />
              )}
              <span
                className={`text-xs ${hasNumber ? "text-scavngr-green-dark" : "text-scavngr-gray-light"}`}
              >
                A Number '1,2,3,4,5,6,7,8,9,0'
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <button
            onClick={handleRegister}
            disabled={!isFormValid()}
            className={`w-full h-[55px] font-medium text-base rounded-full transition-all duration-200 ${isFormValid()
                ? "bg-gradient-to-r from-scavngr-green-light to-scavngr-green-primary text-white hover:shadow-lg cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Register
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

      {showConfirmationModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-[42px]"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-[30px] w-full max-w-[345px] px-12 py-[93px] shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex flex-col items-center gap-[21px]">
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
              <p className="text-black text-lg font-normal text-center leading-[157%] lowercase">
                Your Registration is Successfully
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}