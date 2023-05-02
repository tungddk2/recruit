import {ReactElement} from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Button, Segmented, Space, Typography} from "antd";
import {SpaceSize} from "antd/es/space";
import "./TopJobs.css";
import {CandidateProps} from "../JobCard";
import JobCard from "../JobCard/JobCard";

export default function TopJobs(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const gapSize = isDesktop ? 40 : isTablet ? 24 : 20;
	const paddingSize = isDesktop ? "40px 24px" : isTablet ? "32px" : "16px";
	const titleLevel = isDesktop ? 1 : isTablet ? 3 : 4;
	const listGapSize = isDesktop ? 20 : isTablet ? 32 : 48;

	const mainButtonStyle = isDesktop ? {
		width: "200px",
		height: "60px",
		fontWeight: "500",
		fontSize: "20px",
	} : isTablet ? {
		width: "150px",
		height: "45px",
		fontWeight: "500",
		fontSize: "16px",
	} : {
		width: "110px",
		height: "36px",
		fontWeight: "500",
		fontSize: "14px",
	}

	const segmentedPadding = isDesktop ? "16px 40px" : isTablet ? "12px 20px" : "10px 10px";

	return (
		<Space
			direction="vertical"
			style={{
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "fit-content",
				padding: paddingSize,
				backgroundColor: "rgba(0, 87, 115, 0.1)"
			}}
			size={gapSize as SpaceSize}
		>
			<Typography.Title level={titleLevel} style={{ margin: 0 }} >Việc làm nổi bật</Typography.Title>

			<Space
				direction="vertical"
				style={{
					width: "100%",
					justifyContent: "center",
					padding: isDesktop ? "0 120px" : "0 0",
				}}
				size={listGapSize as SpaceSize}
			>
				<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
					<Segmented
						options={["Tất cả", "Freelancer", "Full time", "Part time"]}
						style={{
							minHeight: isDesktop ? "80px" : isTablet ? "60px" : "60px",
							height: isDesktop ? "80px" : isTablet ? "60px" : "60px",
							width: isDesktop ? "686px": isTablet ? "450px" : "310px",
							padding: segmentedPadding,
						}}
						className={"top-job-selector"}
						id={isMobile ? "mobile" : "not-mobile"}
					/>
				</div>

				{
					jobsList.map((job, index) => {
						return (
							<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
								<JobCard role="user" info={job} key={index}/>
							</div>
						);
					})
				}
			</Space>

			<Button
				type="primary"
				style={mainButtonStyle}
			>Xem tất cả</Button>
		</Space>
	);
}

const jobsList: CandidateProps[] = [
	{
		type: "full-time",
		title: "Nhân viên kinh doanh",
		company: "Công ty TNHH Thương mại và Dịch vụ Tổng hợp Hà Nội",
		location: "Hà Nội",
		salary: ["10.000.000", "15.000.000"],
		requiredExperience: "1 năm",
		postedDate: new Date("2022-01-01"),
		isBookmarked: false,
		image: require("../../assets/company-logos/1.png"),
	},
	{
		type: "part-time",
		title: "Frontend Developer",
		company: "Google",
		location: "TP. Hồ Chí Minh",
		salary: ["10.000.000", "23.000.000"],
		requiredExperience: [3, 5],
		postedDate: new Date("2023-01-01"),
		isBookmarked: true,
		image: require("../../assets/company-logos/2.png"),
	},
	{
		type: "internship",
		title: "Nhân viên Marketing",
		company: "Nike Việt Nam",
		location: "Đà Nẵng",
		salary: ["10.000.000", "15.000.000"],
		requiredExperience: "Không",
		postedDate: new Date("2023-02-20"),
		isBookmarked: false,
		image: require("../../assets/company-logos/3.png"),
	},
	{
		type: "freelance",
		title: "Giám đốc kinh doanh",
		company: "BestBuy",
		location: "Hải Phòng",
		salary: ["10.000.000", "15.000.000"],
		requiredExperience: "Không",
		postedDate: new Date("2023-03-20"),
		isBookmarked: false,
		image: require("../../assets/company-logos/4.png"),
	}
];