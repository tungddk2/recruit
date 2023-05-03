import {Layout} from "antd";
import Header from "../../components/Header/Header";
import HeaderBanner from "../../components/Banners/HeaderBanner/HeaderBanner";
import FutureJobsList from "../../components/Jobs/FutureJobs/FutureJobLists";
import TopJobs from "../../components/Jobs/TopJobs/TopJobs";
import Guide from "../../components/Guide/Guide";
import HrBanner from "../../components/Banners/HrBanner/HrBanner";
import SubcribePane from "../../components/SubcribePane/SubcribePane";
import Footer from "../../components/Footer/Footer";
import {ReactElement} from "react";

export default function LandingPage(): ReactElement {
	return (
		<>
			<HeaderBanner />
			<FutureJobsList />
			<TopJobs />
			<Guide />
			<HrBanner />
			<SubcribePane />
			<Footer />
		</>
	);
}