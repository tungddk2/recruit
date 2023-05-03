import {ReactElement} from "react";
import {Layout} from "antd";
import Header from "../components/Header/Header";
import {Outlet} from "react-router";

export default function UserPage(): ReactElement {
	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<Layout.Content style={{ position: "relative", top: "64px" }}>
				<Outlet />
			</Layout.Content>
		</Layout>
	);
}