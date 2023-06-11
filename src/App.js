import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import LoginPage from "./pages/User/LoginPage";
import SignupPage from "./pages/User/SignupPage";
import OtpPage from "./pages/User/OtpPage";
import SuccessPage from "./pages/User/SuccessPage";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
