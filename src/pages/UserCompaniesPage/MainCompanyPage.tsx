import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router";
import {ReactElement} from "react";

export default function MainCompanyPage(): ReactElement {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
}