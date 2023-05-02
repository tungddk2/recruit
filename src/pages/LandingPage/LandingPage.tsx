import {Layout} from "antd";
import Header from "../../components/Header/Header";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import FutureJobsList from "../../components/FutureJobs/FutureJobLists";
import TopJobs from "../../components/TopJobs/TopJobs";
import Guide from "../../components/Guide/Guide";
import HrBanner from "../../components/HrBanner/HrBanner";
import SubcribePane from "../../components/SubcribePane/SubcribePane";
import Footer from "../../components/Footer/Footer";
import {ReactElement} from "react";

export default function LandingPage(): ReactElement {
	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<Layout.Content style={{ position: "relative", top: "64px" }}>
				<HeaderBanner />
				<FutureJobsList />
				<TopJobs />
				<Guide />
				<HrBanner />
				<SubcribePane />
				<Footer />
			</Layout.Content>
		</Layout>
	);
}