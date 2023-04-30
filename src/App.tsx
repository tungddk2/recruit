import React from "react";
import logo from "./logo.svg";
import "antd/dist/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Button from "./components/common/Button";
import SignIn from "./components/signin/SignIn";
import SearchJob from "./components/search-job/SearchJob";

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
        <Route path="/search" element={<SearchJob />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
