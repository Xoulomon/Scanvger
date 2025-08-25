import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../src/firebase";
import ScavngrLogo from "../components/ScavngrLogo";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  const navigate = useNavigate();

  const validateField = (field, value) => {
    switch (field) {
      case "username":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email";
        return "";
      case "password":
        if (!value) return "Password is required";
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

  const handleLogin = async () => {
    setTouched({ username: true, password: true });
    const newErrors = {
      username: validateField("username", formData.username),
      password: validateField("password", formData.password),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.username,
          formData.password
        );
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (!userDoc.exists()) {
          throw new Error("User data not found");
        }
        const { role } = userDoc.data();

        localStorage.setItem("isAuthenticated", "true");

        // === Input your dashboard paths here ===
        // Replace the paths below with your actual dashboard routes
        if (role === "recycler") navigate("/dashboard"); // e.g., "/recycler-home"
        else if (role === "collector") navigate("/collectorDashboard"); // e.g., "/collector-dashboard"
        else if (role === "manufacturer") navigate("/manufactureDashboard"); // e.g., "/manufacturer-portal"
        else navigate("/dashboard"); // Fallback
      } catch (err) {
        setErrors({ ...errors, password: err.message || "Invalid credentials" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-epilogue text-black relative max-w-[430px] mx-auto overflow-hidden">
      <div className="absolute -top-[91px] -right-[78px] w-[352px] h-[352px] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fce6a43c9fa314d36b8d06fc2cfdf6b68%2Febf12943e6b44652808b6ede31c48fbd?format=webp&width=800"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 pt-52 px-6">
        <div className="mb-16">
          <h1 className="text-xl font-medium text-black mb-8">Welcome To</h1>
          <ScavngrLogo size="large" />
        </div>

        <div className="space-y-5 mb-12">
          <div>
            <label className="block text-sm font-medium mb-2.5 text-scavngr-gray-text">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                onBlur={() => handleBlur("username")}
                placeholder="Enter your email"
                className={`w-full h-[55px] px-3 py-2 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${
                  touched.username && errors.username
                    ? "border-red-500 focus:border-red-500"
                    : "border-scavngr-gray-light focus:border-scavngr-green-primary"
                }`}
              />
            </div>
            {touched.username && errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2.5 text-scavngr-gray-text">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="Enter password"
                className={`w-full h-[55px] px-3 py-2 pr-12 rounded-full border bg-white text-sm placeholder:text-scavngr-gray-medium focus:outline-none ${
                  touched.password && errors.password
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
        </div>

        <div className="space-y-5 mb-8">
          <button
            onClick={handleLogin}
            disabled={!isFormValid()}
            className={`w-full h-[55px] font-medium text-base rounded-full transition-all duration-200 ${
              isFormValid()
                ? "bg-gradient-to-r from-scavngr-green-light to-scavngr-green-primary text-white hover:shadow-lg cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Login
          </button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-scavngr-green-primary font-bold">
              Register Here
            </Link>
          </p>
        </div>

        {/* <div className="space-y-4 mb-8">
          <button className="w-full h-[55px] border border-gray-200 rounded-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition-colors">
            <span className="text-sm font-normal text-scavngr-gray-text">
              Continue with Google
            </span>
          </button>
          <button className="w-full h-[55px] border border-gray-200 rounded-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition-colors">
            
            <span className="text-sm font-normal text-scavngr-gray-text">
              Continue with Apple
            </span>
          </button>
        </div> */}
      </div>

      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-black rounded-full"></div>
    </div>
  );
}