import {SpaceSize} from "antd/es/space";
import { Pagination, Space, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {ReactElement} from "react";
import {CompanyCardProps} from "../CompanyCard";
import CompanyCard from "../CompanyCard/CompanyCard";
import "./SearchResults.scss";

export default function SearchResults(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const gapSize = isDesktop ? 20 : isTablet ? 32 : 16;
	const paddingSize = isDesktop ? "40px 24px" : isTablet ? "32px" : "16px";
	const titleLevel = isDesktop ? 1 : isTablet ? 3 : 4;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "fit-content",
				padding: paddingSize,
				backgroundColor: "#fff",
				gap: `${gapSize}px`,
			}}
			className={"search-results-company"}
		>
			<Typography.Title level={titleLevel} style={{ margin: 0, width: "100%", textAlign: "center" }} >{`Hiện tại trên hệ thống đang có ${10000} công ty`}</Typography.Title>

			<Space
				direction="vertical"
				style={{
					width: "100%",
					justifyContent: "center",
					padding: isDesktop ? "0 120px" : "0 0",
				}}
				size={20}
			>
				{
					companyList.map((company, index) => {
						return (
							<div style={{ width: "100%", display: "flex", justifyContent: "center" }} key={index}>
								<CompanyCard {...company}/>
							</div>
						);
					})
				}
			</Space>

			<Pagination
				total={10000}
				showQuickJumper={!isMobile}
				showTotal={(total, range) => isDesktop && `${range[0]}-${range[1]} of ${total} công việc`}
				defaultPageSize={10}
				defaultCurrent={1}
			/>
		</div>
	);
}

export const companyList: CompanyCardProps[] = [
	{
		id: 1,
		name: "Công ty TNHH ABC",
		location: "Hà Nội",
		image: require("../../../assets/company-logos/1.png"),
		link: "https://www.google.com",
		jobs: 23,
	},
	{
		id: 2,
		name: "Công ty TNHH ABC",
		location: "Đà Nẵng",
		image: require("../../../assets/company-logos/2.png"),
		link: "https://www.google.com",
		jobs: 10,
	},
	{
		id: 3,
		name: "Công ty TNHH ABC",
		location: "Hồ Chí Minh",
		image: require("../../../assets/company-logos/3.png"),
		link: "https://www.google.com",
		jobs: 0,
	},
	{
		id: 4,
		name: "Công ty TNHH ABC",
		location: "Hà Nội",
		image: require("../../../assets/company-logos/4.png"),
		link: "https://www.google.com",
		jobs: 23,
	}
]