import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import SignIn from "./components/signin/SignIn";

const theme = {
  token: {
    colorPrimary: "#005773",
    colorLink: "#005773",
    colorLinkHover: "#007da5",
    colorLinkActive: "#00374d",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
