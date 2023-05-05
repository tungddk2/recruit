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
import {JobSearch, AllJobFields} from "./pages/UserJobsPage";
import MainJobPage from "./pages/UserJobsPage/MainJobPage";
import JobOverview from "./components/Overview/JobOverview";
import HrOverview from "./components/Overview/HrOverview";
import JobDetail from "./components/Jobs/JobDetail/JobDetail";
import MainCompanyPage from "./pages/UserCompaniesPage/MainCompanyPage";
import {CompanySearch} from "./pages/UserCompaniesPage";
import CompanyDetail from "./components/Company/CompanyDetail/CompanyDetail";
import Profile from "./pages/Profile/Profile";
import CV from "./components/CV/CV";
import JobBookmark from "./components/CV/JobBookmark";
import JobApplied from "./components/CV/JobApplied";
import AuthProvider from "./provider/AuthContext";
import LogIn from "./components/LogIn/LogIn";
import HrPage from "./pages/HrPage";
import RecruitForm from "./pages/Hr/RecruitForm/RecruitForm";

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
			<AuthProvider>
				<Routes>
					<Route path="/" element={<UserPage />}>
						<Route index element={<LandingPage/>} />
						<Route path="job/*" element={<MainJobPage />}>
							<Route index element={<JobSearch />} />
							<Route path="all" element={<AllJobFields />} />
							<Route path=":id" element={<JobDetail />} />
						</Route>
						<Route path="company/*" element={<MainCompanyPage />}>
							<Route index element={<CompanySearch />} />
							<Route path=":id" element={<CompanyDetail />} />
						</Route>
					</Route>
					<Route path="profile/*" element={<Profile />}>
						<Route index element={<CV />} />
						<Route path="job-bookmark" element={<JobBookmark />}  />
						<Route path="job-submitted" element={<JobApplied />}  />
					</Route>
					<Route path="/sign-up">
						<Route path="user" element={<SignUp role="user" />} />
						<Route path="company" element={<SignUp role="company" />} />
					</Route>
					<Route path="/hr" element={<HrPage />} >
						<Route path="create" element={<RecruitForm />} />
					</Route>
					<Route path="*" element={<div>404</div>} />
				</Routes>
			</AuthProvider>
		</ConfigProvider>
	);
}

export default App;
