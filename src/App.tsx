import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import SignUp from "./components/SignUp/SignUp";
import TopJobs from "./components/TopJobs/TopJobs";

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
				<Route path="/" element={
					<TopJobs/>
				}/>
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
