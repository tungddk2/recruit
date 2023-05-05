import {ReactElement, useState} from "react";
import {Button, Col, Divider, Row, Select, Space, Tooltip, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import Search from "antd/es/input/Search";
import {CloseOutlined, SearchOutlined} from "@ant-design/icons";
import "./SearchJob.scss";
import {SizeType} from "antd/es/config-provider/SizeContext";

export default function SearchJob(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const buttonSize: SizeType = (isDesktop ? "middle" : "small") as SizeType;

	const [selectedJobType, setSelectedJobType] = useState<string | undefined>(undefined);
	const [selectedJobLocation, setSelectedJobLocation] = useState<string | undefined>(undefined);
	const [selectedJobSalary, setSelectedJobSalary] = useState<string | undefined>(undefined);
	const [selectedCompany, setSelectedCompany] = useState<string | undefined>(undefined);

	return (
		<Space
			direction="vertical"
			style={{
				width: "100%",
				height: "fit-content",
				padding: "16px",
				backgroundColor: "rgba(0, 87, 115, 0.1)",
				justifyContent: "center",
			}}
			className={"recruit-space-search-container"}
		>
			<Search
				allowClear={true}
				placeholder="search text"
				size="large"
				enterButton={
					<Space>
						<SearchOutlined/>
						Tìm kiếm
					</Space>
				}
				style={{ width: isDesktop ? "852px" : "100%" }}
			/>

			<Row style={{
				height: "fit-content",
				borderTop: "1px solid #898484",
				justifyContent: "space-between",
				width: isDesktop ? "852px" : "100%",
			}}>
				<Col span={5} style={{ borderRight: "1px solid #898484", padding: "8px 0", }} >
					<Select
						size={buttonSize}
						bordered={false}
						allowClear={true}
						style={{ width: "100%" }}
						showSearch={true}
						placeholder="Ngành nghề"
						optionFilterProp={"children"}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						dropdownRender={menu => (
							<>
								<Typography.Title level={5} style={{ margin: 0 }}>Ngành nghề</Typography.Title>
								<Divider style={{ margin: "8px" }}/>
								{menu}
							</>
						)}
						options={jobCategories.map((category) => ({ label: category, value: category }))}
						value={selectedJobType}
						onChange={(value) => setSelectedJobType(value)}
					/>
				</Col>
				<Col span={5} style={{ borderRight: "1px solid #898484", padding: "8px 0", }} >
					<Select
						size={buttonSize}
						bordered={false}
						allowClear={true}
						style={{ width: "100%" }}
						showSearch={true}
						placeholder="Công ty"
						optionFilterProp={"children"}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						dropdownRender={menu => (
							<>
								<Typography.Title level={5} style={{ margin: 0 }}>Công ty</Typography.Title>
								<Divider style={{ margin: "8px" }}/>
								{menu}
							</>
						)}
						options={companies.map((company) => ({ label: company, value: company }))}
						value={selectedCompany}
						onChange={(value) => setSelectedCompany(value)}
					/>
				</Col>
				<Col span={5} style={{ borderRight: "1px solid #898484", padding: "8px 0", }}>
					<Select
						size={buttonSize}
						bordered={false}
						allowClear={true}
						style={{ width: "100%" }}
						showSearch={true}
						placeholder={ isDesktop ? "Địa điểm làm việc" : "Địa điểm"}
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
						value={selectedJobLocation}
						onChange={(value) => setSelectedJobLocation(value)}
					/>
				</Col>
				<Col span={5} style={{ padding: "8px 0", }} >
					<Select
						bordered={false}
						size={buttonSize}
						allowClear={true}
						style={{ width: "100%", minWidth: "fit-content" }}
						showSearch={true}
						placeholder={ isDesktop ? "Mức lương mong muốn" : "Mức lương"}
						optionFilterProp={"children"}
						filterOption={(input, option) =>
							(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
						}
						dropdownRender={menu => (
							<>
								<Typography.Title level={5} style={{ margin: 0 }}>Mức lương</Typography.Title>
								<Divider style={{ margin: "8px" }}/>
								{menu}
							</>
						)}
						options={salaries.map((salary) => ({ label: salary, value: salary }))}
						value={selectedJobSalary}
						onChange={(value) => setSelectedJobSalary(value)}
					/>
				</Col>
				<Col span={1} style={{ padding: "8px 0", }} >
					<Tooltip title="Xoá các bộ lọc">
						<Button size={buttonSize} shape="circle" icon={<CloseOutlined />}
							onClick={() => {
								// reset all select filters
								setSelectedJobType(undefined);
								setSelectedJobLocation(undefined);
								setSelectedJobSalary(undefined);
								setSelectedCompany(undefined);
							}}
						/>
					</Tooltip>
				</Col>
			</Row>
		</Space>
	);
};

export const jobCategories = [
	"Tất cả",
	"Kế toán",
	"Nhân viên kinh doanh",
	"Nhân viên bán hàng",
	"Nhân viên văn phòng",
	"Nhân viên marketing",
	"Lập trình viên web",
	"Bảo vệ",
	"Giám đốc kinh doanh",
];

export const companies = [
	"Tất cả",
	"VNG",
	"VCCorp",
	"Vin Group",
	"Vinmart",
	"Công ty TNHH MTV Vật tư thiết bị điện Hà Nội",
	"Vinaconex",
	"Công ty May 10",
];

export const locations = [
	"Tất cả",
	"Hà Nội",
	"Hồ Chí Minh",
	"Đà Nẵng",
	"Đồng Nai",
	"Bình Dương",
	"Vũng Tàu",
]

export const salaries = [
	"Tất cả",
	"Thỏa thuận",
	"Dưới 1 triệu",
	"1 - 3 triệu",
	"3 - 5 triệu",
	"5 - 10 triệu",
	"10 - 20 triệu",
	"20 - 50 triệu",
	"Trên 50 triệu",
];