import {ReactElement} from "react";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer";

export default function MainJobPage(): ReactElement {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
}