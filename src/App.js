import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import HomePage from "./pages/User/HomePage";
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import OtpPage from "./pages/User/OtpPage";
import SuccessPage from "./pages/User/SuccessPage";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import LoginOtpPage from "./pages/User/LoginOtpPage";
function App() {
  const [progress, setProgress] = useState(0);
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading && (
          <div className="spinner-parent">
            <CircularProgress
              variant="determinate"
              value={progress}
              sx={{ color: "white" }}
            />
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/loginotp" element={<LoginOtpPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
