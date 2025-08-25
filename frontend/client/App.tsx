import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./src/firebase";
import { useEffect, useState } from "react";
import Onboarding from "./pages/Onboarding";
import RegisterStep1 from "./pages/RegisterStep1";
import RegisterStep2 from "./pages/RegisterStep2";
import ConnectWallet from "./pages/ConnectWallet";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import InactiveDashboard from "./pages/InactiveDashboard";
import TransferWaste from "./pages/TransferWaste";
import RegisterWasteModal from "./components/RegisterWasteModal";
import Tokens from "./pages/Tokens";
import CollectorDashboard from "./pages/CollectorDashboard";
import Waste from "./pages/Waste";
import ResetWaste from "./pages/ResetWaste";
import ConfirmWaste from "./pages/ConfirmWaste";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import MconfirmWaste from "./pages/MconfirmWaste";
import Ctokens from "./pages/Ctokens";
import Cwaste from "./pages/Cwaste";
import Mtokens from "./pages/Mtokens";
import Mwaste from "./pages/Mwaste";
import Landing from "./pages/Landing";
import Wallet from "./pages/Wallet";

const queryClient = new QueryClient();

// ProtectedRoute component for role-based access
function ProtectedRoute({ allowedRoles, children }) {
  const [user, loading] = useAuthState(auth);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchRole = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      };
      fetchRole();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (userRole && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/register/recycler" element={<RegisterStep1 />} />
          <Route path="/register/collector" element={<RegisterStep1 />} />
          <Route path="/register/manufacturer" element={<RegisterStep1 />} />
          <Route path="/register/recycler/step2" element={<RegisterStep2 />} />
          <Route path="/register/collector/step2" element={<RegisterStep2 />} />
          <Route path="/register/manufacturer/step2" element={<RegisterStep2 />} />
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-waste" element={<ResetWaste />} />
          <Route path="/confirm-waste" element={<ConfirmWaste />} />
          <Route path="/ctokens" element={<Ctokens />} />
          <Route path="/cwaste" element={<Cwaste />} />
          <Route path="/mtokens" element={<Mtokens />} />
          <Route path="/mwaste" element={<Mwaste />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/inactive" element={<InactiveDashboard />} />
          <Route path="/transfer-waste" element={<TransferWaste />} />
          <Route path="/mconfirm-waste" element={<MconfirmWaste />} />
          <Route
            path="/register-waste"
            element={
              <RegisterWasteModal
                isOpen={true}
                onClose={() => {
                  window.history.back();
                }}
              />
            }
          />
          <Route
            path="/unauthorized"
            element={<div>Unauthorized Access</div>}
          />
          {/* === Input your dashboard paths here === */}
          {/* Replace the paths and component imports with your actual dashboard routes */}
          <Route
            path="/dashboard" // e.g., "/recycler-home"
            element={
              <ProtectedRoute allowedRoles={["recycler"]}>
                <Dashboard /> {/* Replace with your RecyclerDashboard component */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/collectorDashboard" // e.g., "/collector-home"
            element={
              <ProtectedRoute allowedRoles={["collector"]}>
                <CollectorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manufactureDashboard" // e.g., "/manufacturer-portal"
            element={
              <ProtectedRoute allowedRoles={["manufacturer"]}>
                <ManufacturerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Prevent multiple root creation during hot reloading
const container = document.getElementById("root")!;
let root = (window as any).__reactRoot;

if (!root) {
  root = createRoot(container);
  (window as any).__reactRoot = root;
}

root.render(<App />);