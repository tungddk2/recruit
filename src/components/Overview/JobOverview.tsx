import {memo, ReactElement} from "react";
import {Col, Row, Space, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import {JobType} from "../Jobs/JobCard";
import {CalendarOutlined} from "@ant-design/icons";

export type JobOverview = {
	postedDate: Date;
	location: string;
	salary: [string | number, string | number] | string;
	requiredExperience: string | [number, number];
	jobType: JobType;
	startDate: Date;
	endDate?: Date;
}

function JobOverview(props: JobOverview): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const titleLevel = isDesktop ? 3 : isTablet ? 4 : 4;

	return (
		<Space
			direction={"vertical"}
			style={{
				maxWidth: isDesktop ? "450px" : isTablet ? "320px" : "350px",
				width: "100%",
				padding: isDesktop ? "30px" : isTablet ? "24px" : "16px",
			}}
		>
			<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: 0 }}>Tổng quan công việc</Typography.Title>
			<Space direction={"vertical"} style={{ width: "100%" }}>
				<Space>
					<CalendarOutlined />

				</Space>
			</Space>
		</Space>
	);
}

export default memo(JobOverview);