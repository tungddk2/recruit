import {memo, ReactElement} from "react";
import {Col, Row, Space, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import {JobType} from "../Jobs/JobCard";
import {
	CalendarOutlined,
	DollarOutlined,
	EnvironmentOutlined,
	FieldTimeOutlined,
	StarOutlined,
	TagOutlined
} from "@ant-design/icons";
import "./JobOverview.scss";

export type JobOverviewType = {
	postedDate: Date;
	location: string;
	salary: [string | number, string | number] | string;
	requiredExperience: string | [number, number];
	type: JobType;
	startDate: Date;
	endDate: Date;
}

function JobOverview(props: JobOverviewType): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const simplifyPostedDate = (date: Date): string => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

	const titleStyle = {
		mobile: { fontSize: "14px", marginRight: "12px" },
		default: { fontSize: isDesktop ? "20px" : "16px" }
	}
	const contentStyle = {
		mobile: { fontSize: "14px", color: "#5d677a" },
		default: { fontSize: isDesktop ? "16px" : "14px", color: "#5d677a" }
	}

	return (
		<Space
			direction={"vertical"}
			style={{
				maxWidth: isDesktop ? "450px" : isTablet ? "320px" : "350px",
				width: "100%",
				height: isTablet? "100%" : "fit-content",
				padding: isDesktop ? "30px" : isTablet ? "24px" : "16px",
				backgroundColor: "rgba(0, 87, 155, 0.15)",
				borderRadius: "8px",
			}}
		>
			<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: 0, width: "100%", textAlign: isMobile ? "center" : "left" }}>
				Tổng quan công việc
			</Typography.Title>

			<Space direction={"vertical"} style={{ width: "100%" }}>
				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<CalendarOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Ngày đăng:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{simplifyPostedDate(props.postedDate)}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Ngày đăng</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{simplifyPostedDate(props.postedDate)}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<EnvironmentOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Địa chỉ:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{props.location}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Địa chỉ</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{props.location}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<DollarOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Mức lương:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>
										{typeof props.salary === "string" ? props.salary : `${props.salary[0]} - ${props.salary[1]} VNĐ`}
									</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Mức lương</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >
											{typeof props.salary === "string" ? props.salary : `${props.salary[0]} - ${props.salary[1]} VNĐ`}
										</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<StarOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Kinh nghiệm:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>
										{typeof props.requiredExperience === "string"
											? props.requiredExperience
											: `${props.requiredExperience[0]} - ${props.requiredExperience[1]} năm`
										}
									</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Kinh nghiệm</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >
											{typeof props.requiredExperience === "string"
												? props.requiredExperience
												: `${props.requiredExperience[0]} - ${props.requiredExperience[1]} năm`
											}
										</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<TagOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Loại hình:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{props.type}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Loại hình</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >	{props.type}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<FieldTimeOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Bắt đầu:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{simplifyPostedDate(props.startDate)}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Ngày đăng</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{simplifyPostedDate(props.startDate)}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<FieldTimeOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Kết thúc:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{simplifyPostedDate(props.endDate)}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Kết thúc</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{simplifyPostedDate(props.endDate)}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>
			</Space>
		</Space>
	);
}

export default memo(JobOverview);