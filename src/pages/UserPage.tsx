import {ReactElement} from "react";
import {Layout} from "antd";
import Header from "../components/Header/Header";
import {Outlet} from "react-router";
import {MenuItem} from "../components/CustomSider";
import {
	CarryOutFilled,
	HeartFilled,
	IdcardFilled,
	ShoppingFilled,
	ShoppingOutlined,
	SolutionOutlined
} from "@ant-design/icons";
import CustomSider from "../components/CustomSider/CustomSider";
import useBreakpoints from "../hooks/useBreakpoints";

export default function UserPage(): ReactElement {
	const isMobile = useBreakpoints().isMobile();
	const isDesktop = useBreakpoints().isDesktop();

	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<Layout>
				{/*<CustomSider menuItems={isMobile ? mobileMenu : otherMenu} />*/}
				<Layout.Content style={{ backgroundColor: "#fff", position: "relative", top: "64px" }}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
}