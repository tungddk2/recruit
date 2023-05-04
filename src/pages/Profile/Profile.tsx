import {ReactElement} from "react";
import {Layout} from "antd";
import {Outlet} from "react-router";
import Header from "../../components/Header/Header";
import CustomSider, {MenuItem} from "../../components/CustomSider/CustomSider";
import {CarryOutFilled, HeartFilled, IdcardFilled} from "@ant-design/icons";

const menu: MenuItem[] = [
	{
		label: "Hồ sơ",
		path: "",
		key: "cv",
		icon: <IdcardFilled />,
	},
	{
		label: "Việc làm đã lưu",
		path: "/job-bookmark",
		key: "job-bookmark",
		icon: <CarryOutFilled />,
	},
	{
		label: "Việc làm đã nộp",
		path: "/job-submitted",
		key: "job-submitted",
		icon: <HeartFilled />,
	},
];

export default function Profile(): ReactElement {
	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<CustomSider menuItems={menu} />
			<Layout.Content style={{ position: "relative", top: "64px" }}>
				<Outlet />
			</Layout.Content>
		</Layout>
	);
}