import {ReactElement, useState} from "react";
import {Button, Layout, Menu} from "antd";
import type { MenuProps } from "antd";
import "./CustomSider.scss";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import useBreakpoints from "../../hooks/useBreakpoints";

export type MenuItem = Required<MenuProps>["items"][number] & { path: string };

export type CustomSiderProps = {
	menuItems: MenuItem[];
}

export default function CustomSider(props: CustomSiderProps): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const [collapsed, setCollapsed] = useState(!isDesktop);


	return (
		<Layout.Sider
			width={210}
			style={{
				position: "fixed",
				top: "64px",
				left: 0,
				bottom: 0,
				height: "calc(100vh - 64px)",
				boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
			}}
			trigger={null}
			//collapsible
			collapsed={collapsed}
			className={collapsed ? "recruit-slider-close" : "recruit-slider-open"}
		>
			<Menu
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={props.menuItems}
				style={{ height: "100%", backgroundColor: "#fff" }}
				className={"recruit-slider-menu"}
			/>

			{ !isDesktop &&
				<div
					style={{
						position: "absolute",
						width: isTablet ? "32px" : "16px",
						height: "66px",
						left: "210px",
						top: "calc(50% - 33px)",
						backgroundColor: "black",
						borderRadius: "0 4px 4px 0",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#fff",
					}}
					onClick={() => setCollapsed(!collapsed)}
				>
					{collapsed ? <RightOutlined/> : <LeftOutlined />}
				</div>
			}

			<div style={{
				display: "flex",
				justifyContent: "center",
				position: "absolute",
				bottom: "20px",
				width: "100%",
			}}>
				<Button type={"link"} style={{ fontSize: "20px", fontWeight: "500" }}>Đăng xuất</Button>
			</div>
		</Layout.Sider>
	)
}