import {ReactElement, useContext} from "react";
import {Breadcrumb, Layout} from "antd";
import Header from "../components/Header/Header";
import {Outlet, useLocation, useNavigate} from "react-router";
import {MenuItem} from "../components/CustomSider";
import {
	ContactsFilled, FileAddFilled, FileTextFilled,
} from "@ant-design/icons";
import CustomSider from "../components/CustomSider/CustomSider";
import useBreakpoints from "../hooks/useBreakpoints";
import {AuthContext} from "../provider/AuthContext";
import {Link} from "react-router-dom";

const menu: MenuItem[] = [
	{
		label: "Đăng tin",
		key: "/hr/create",
		icon: <FileAddFilled/>,
	},
	{
		label: "Tin tuyển dụng",
		key: "/hr/job",
		icon: <FileTextFilled />,
	},
	{
		label: "Quản lý ứng viên",
		key: "/hr/candidate",
		icon: <ContactsFilled />,
	},
	{
		label: "Tài khoản",
		key: "/hr/account",
		children: [
			{
				label: "Chỉnh sửa thông tin",
				key: "/hr/account",
			},
			{
				label: "Thay đổi mật khẩu",
				key: "/hr/account/change-password",
			}
		]
	}
];

export default function HrPage(): ReactElement {
	const isMobile = useBreakpoints().isMobile();
	const isDesktop = useBreakpoints().isDesktop();

	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	if (user.role !== "hr") navigate("/");

	const location = useLocation();
	const pathSnippets = location.pathname.split('/').filter((i) => i);

	const breadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		const title = pathSnippets[index];
		const isLast = index === pathSnippets.length - 1;
		return isLast ? (
			<Breadcrumb.Item key={url}>{title}</Breadcrumb.Item>
		) : (
			<Breadcrumb.Item key={url}>
				<Link to={url}>{title}</Link>
			</Breadcrumb.Item>
		);
	});

	console.log(breadcrumbItems);

	return (
		<Layout style={{ backgroundColor: "#fff" }}>
			<Header />
			<Layout>
				<CustomSider menuItems={menu} />
				<Layout.Content style={{
					backgroundColor: "rgba(0, 87, 115, 0.15)",
					position: "relative",
					top: "64px",
					marginLeft: isDesktop ? "210px" : 0,
					padding: isDesktop ? "24px" : isMobile ? "16px" : "20px",
				}}>
					<Breadcrumb items={breadcrumbItems} />
					<Outlet />
				</Layout.Content>
			</Layout>
		</Layout>
	);
}