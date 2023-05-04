import {memo, ReactElement} from "react";
import {Col, Row, Space, Tag, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import {
	EnvironmentOutlined,
	FlagOutlined, GlobalOutlined, ShoppingOutlined,
	TeamOutlined
} from "@ant-design/icons";
import "./JobOverview.scss";

export type CompanyOverviewType = {
	website: string;
	location: string;
	detailLocation: string;
	employees: number;
	nation: string;
	categories: string[];
}

function CompanyOverview(props: CompanyOverviewType): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

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
				minWidth: isTablet ? "600px" : "fit-content",
				height: isTablet? "100%" : "fit-content",
				padding: isDesktop ? "30px" : isTablet ? "24px" : "16px",
				backgroundColor: "rgba(0, 87, 155, 0.15)",
				borderRadius: "8px",
			}}
		>
			<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: 0, width: "100%", textAlign: isMobile ? "center" : "left" }}>
				Tổng quan công ty
			</Typography.Title>

			{!isTablet ? ( <Space direction={"vertical"} style={{ width: "100%" }}>
				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<GlobalOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Website:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{props.website}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Website</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{props.website}</Typography.Text>
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
					<EnvironmentOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Địa chỉ chi tiết:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{props.detailLocation}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Địa chỉ chi tiết</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{props.detailLocation}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<TeamOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Quy mô công ty:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{`${props.employees} nguời`}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Quy mô công ty</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{`${props.employees} nguời`}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<FlagOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Quốc tịch công ty:</Typography.Text>
									<Typography.Text style={contentStyle.mobile}>{props.nation}</Typography.Text>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Quốc tịch công ty</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text style={titleStyle.default} >{props.nation}</Typography.Text>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>

				<Space style={{ alignItems: "flex-start", width: "100%" }} className={"recruit-job-overview-space"}>
					<ShoppingOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
					<div style={{ width: "100%" }}>
						{isMobile ?
							(
								<>
									<Typography.Text strong style={titleStyle.mobile}>Ngành nghề tuyển dụng:</Typography.Text>
									<Space>
										{props.categories.map((item, index) => (
											<Tag key={index} color={"#2AA6AD"} style={{ fontSize: "12px" }}>{item}</Tag>
										))}
									</Space>
								</>
							) : (
								<Row>
									<Col sm={12} md={12} lg={24}>
										<Typography.Text strong style={titleStyle.default}>Ngành nghề tuyển dụng</Typography.Text>
									</Col>
									<Col sm={12} md={12} lg={24}>
										<Space direction={isDesktop ? "horizontal" : "vertical"}>
											{props.categories.map((item, index) => (
												<Tag key={index} color={"#2AA6AD"} style={{ fontSize: "12px" }}>{item}</Tag>
											))}
										</Space>
									</Col>
								</Row>
							)
						}
					</div>
				</Space>
			</Space>) : (
				<Row style={{ width: "100%", gap: "16px" }}>
					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "8px"
						}}>
							<GlobalOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Website</Typography.Text></Col>
								<Col span={24}><Typography.Text style={titleStyle.default} >{props.website}</Typography.Text></Col>
							</Row>
						</div>
					</Col>

					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "16px"
						}}>
							<EnvironmentOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Địa chỉ</Typography.Text></Col>
								<Col span={24}><Typography.Text style={titleStyle.default} >{props.location}</Typography.Text></Col>
							</Row>
						</div>
					</Col>

					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "8px"
						}}>
							<EnvironmentOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Địa chỉ chi tiết</Typography.Text></Col>
								<Col span={24}><Typography.Text style={titleStyle.default} >{props.detailLocation}</Typography.Text></Col>
							</Row>
						</div>
					</Col>

					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "8px"
						}}>
							<TeamOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Quy mô công ty</Typography.Text></Col>
								<Col span={24}><Typography.Text style={titleStyle.default} >{`${props.employees} nguời`}</Typography.Text></Col>
							</Row>
						</div>
					</Col>

					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "8px"
						}}>
							<FlagOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Quốc tịch công ty</Typography.Text></Col>
								<Col span={24}><Typography.Text style={titleStyle.default} >{props.nation}</Typography.Text></Col>
							</Row>
						</div>
					</Col>

					<Col span={11}>
						<div style={{
							width: "100%",
							display: "flex",
							alignItems: "flex-start",
							columnGap: "8px"
						}}>
							<GlobalOutlined style={{ fontSize: isDesktop ? "30px" : isTablet ? "20px" : "16px", marginTop: isMobile ? "3px" : "5px", color: "#2AA6AD" }}/>
							<Row>
								<Col span={24}><Typography.Text strong style={titleStyle.default}>Ngành nghề tuyển dụng</Typography.Text></Col>
								<Col span={24}>
									<Space direction={isDesktop ? "horizontal" : "vertical"}>
										{props.categories.map((item, index) => (
											<Tag key={index} color={"#2AA6AD"} style={{ fontSize: "12px" }}>{item}</Tag>
										))}
									</Space>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			)}
		</Space>
	);
}

export default memo(CompanyOverview);