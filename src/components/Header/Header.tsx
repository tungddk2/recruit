import {ReactElement, useState} from "react";
import {Avatar, Badge, Button, Divider, Dropdown, Layout, MenuProps, Space, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import {LogoIcon} from "../common/icons/LogoIcon";
import ButtonGroup from "antd/es/button/button-group";
import {BellFilled, BellOutlined, EditOutlined, ImportOutlined, UserOutlined} from "@ant-design/icons";
import {Role} from "../../constants/roles";
import Notification from "./Notification/Notification";
import "./Header.css";
import {useNavigate} from "react-router";

export type HeaderProps = {
	role?: Role;
	isLoggedIn?: boolean;
}

export default function Header(props: HeaderProps = {
	role: "guest",
	isLoggedIn: true,
}): ReactElement {
	const navigate = useNavigate();
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const [showNotification, setShowNotification] = useState(false);

	return (
		<Layout.Header
			style={{
				backgroundColor: "#fff",
				boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				padding: isDesktop ? "0 24px" : isTablet ? "0 32px" : "0 16px",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				zIndex: 1,
			}}
		>
			<div style={{ width: "fit-content", height: "100%", display: "flex", alignItems: "center" }}>
				<LogoIcon />
			</div>


			{ props.isLoggedIn ? (
					<Space id="user">
						<Badge count={5} overflowCount={10} offset={[-10, 10]}>
							<Button
								size="large"
								shape="circle"
								icon={<BellFilled />}
								style={{ border: "none", width: "36px", height: "36px", fontSize: "1.25em" }}
								onClick={() => {
									setShowNotification(!showNotification);
								}}
							/>
						</Badge>
						{
							isDesktop && <Divider type="vertical" style={{ height: "42px", borderColor: "rgba(0, 0, 0, 0.25)" }} />
						}

						<Avatar icon={<UserOutlined />} size={40} />
						{
							isDesktop && <Typography.Title level={5} style={{ margin: 0, color: "#005773" }}>Hi! Nguyễn Văn A</Typography.Title>
						}
						<Notification show={showNotification} />

					</Space>
				) : (
					<Space>
						<Button icon={<ImportOutlined/>} type="primary">Đăng nhập</Button>
						{ !isMobile && <Button icon={<EditOutlined/>} type="default" onClick={() => navigate("/sign-up/user")}>Đăng ký</Button> }
					</Space>
				)
			}

		</Layout.Header>
	);
}

const items: MenuProps['items'] = [
	{
		label: 'Clicking me will not close the menu.',
		key: '1',
	},
	{
		label: 'Clicking me will not close the menu also.',
		key: '2',
	},
	{
		label: 'Clicking me will close the menu.',
		key: '3',
	},
];