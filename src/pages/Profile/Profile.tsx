import {ReactElement, useState} from "react";
import {Layout} from "antd";
import {Outlet} from "react-router";
import Header from "../../components/Header/Header";
import CustomSider, {MenuItem} from "../../components/CustomSider/CustomSider";
import {CarryOutFilled, HeartFilled, IdcardFilled} from "@ant-design/icons";
import useBreakpoints from "../../hooks/useBreakpoints";

const menu: MenuItem[] = [
	{
		label: "Hồ sơ",
		key: "/profile",
		icon: <IdcardFilled />,
	},
	{
		label: "Việc làm đã lưu",
		key: "/profile/job-bookmark",
		icon: <CarryOutFilled />,
	},
	{
		label: "Việc làm đã nộp",
		key: "/profile/job-submitted",
		icon: <HeartFilled />,
	},
];

export default function Profile(): ReactElement {
	const isDesktop = useBreakpoints().isDesktop();

	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<Layout>
				<CustomSider menuItems={menu} />
				<Layout.Content style={{ backgroundColor: "#fff", position: "relative", top: "64px", marginLeft: isDesktop ? "210px" : 0 }}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
}