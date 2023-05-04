import {ReactElement} from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {Button, Divider, Input, Select, Space, Typography} from "antd";
import {EnvironmentOutlined, SearchOutlined} from "@ant-design/icons";
import {locations} from "../SearchJob";

export default function SearchCompany(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const rootPadding = isDesktop ? "40px 24px" : isTablet ? "24px 32px" : "20px 16px";
	const buttonSize = isDesktop ? "large" : "middle";

	return (
		<div style={{
			width: "100%",
			padding: rootPadding,
			backgroundColor: "rgba(0, 87, 115, 0.15)",
			display: "flex",
			justifyContent: "center",
		}}>
			<div style={{ maxWidth: "900px", width: "100%", display: "flex", gap: "16px" }}>
				<Input size={buttonSize} prefix={<SearchOutlined />} placeholder={"Công ty"} style={{ width: "100%" }} />
				<Select
					size={buttonSize}
					style={{ width: "130px" }}
					placeholder={"Địa điểm"}
					optionFilterProp={"children"}
					filterOption={(input, option) =>
						(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
					}
					dropdownRender={menu => (
						<>
							<Typography.Title level={5} style={{ margin: 0 }}>Địa điểm</Typography.Title>
							<Divider style={{ margin: "8px" }}/>
							{menu}
						</>
					)}
					options={locations.map((location) => ({ label: location, value: location }))}
				/>
				{
					isMobile ? (
						<Button style={{ minWidth: "32px" }} size={buttonSize} icon={<SearchOutlined />} type={"primary"} />
					) : (
						<Button size={buttonSize} icon={<SearchOutlined />} type={"primary"}>Tìm kiếm</Button>
					)
				}
			</div>
		</div>
	);
}