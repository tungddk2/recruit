import {SpaceSize} from "antd/es/space";
import {Button, Pagination, Segmented, Space, Typography} from "antd";
import JobCard, {CandidateProps} from "../JobCard/JobCard";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {jobsList} from "../TopJobs";
import {ReactElement} from "react";

export default function SearchResults(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const gapSize = isDesktop ? 20 : isTablet ? 32 : 16;
	const paddingSize = isDesktop ? "40px 24px" : isTablet ? "32px" : "16px";
	const titleLevel = isDesktop ? 1 : isTablet ? 3 : 4;

	return (
		<Space
			direction="vertical"
			style={{
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "fit-content",
				padding: paddingSize,
				backgroundColor: "#fff"
			}}
			size={gapSize as SpaceSize}
		>
			<Typography.Title level={titleLevel} style={{ margin: 0, width: "100%", textAlign: "left" }} >{`Hiện tại trên hệ thống đang có ${10000} công việc`}</Typography.Title>

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
					jobsList.map((job, index) => {
						return (
							<div style={{ width: "100%", display: "flex", justifyContent: "center" }} key={index}>
								<JobCard role="user" info={job}/>
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
		</Space>
	);
}