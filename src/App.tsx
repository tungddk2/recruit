import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserPage from "./pages/UserPage";
import SearchJob from "./components/Search/SearchJob/SearchJob";

const theme = {
	token: {
		colorPrimary: "#005773",
		colorLink: "#005773",
		colorLinkHover: "#007da5",
		colorLinkActive: "#00374d",
		borderRadius: 8,
		borderRadiusLG: 8,
	},
};

function App() {
	return (
		<ConfigProvider theme={theme}>
			<Routes>
				<Route path="/*" element={<UserPage />}>
					<Route index element={<LandingPage/>} />
					<Route path="jobs" element={<SearchJob />} />
				</Route>
				<Route path="/sign-up">
					<Route path="user" element={<SignUp role="user" />} />
					<Route path="company" element={<SignUp role="company" />} />
				</Route>
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</ConfigProvider>
	);
}

export default App;
