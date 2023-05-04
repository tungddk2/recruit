import {ReactElement} from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {Button, Col, Row, Space, Typography} from "antd";
import {DollarOutlined, EnvironmentOutlined, LeftOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import ImageContainer from "../../common/images/ImageContainer";
import {CandidateProps} from "../JobCard";
import BookmarkButton from "../../common/buttons/BookmarkButton";
import ApplyButton from "../../common/buttons/ApplyButton";

type DetailHeaderProps = {
	info: CandidateProps;
}

export default function DetailHeader(props: DetailHeaderProps): ReactElement {
	const navigate = useNavigate();
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const padding = isDesktop ? "24px 24px" : isTablet ? "16px 32px" : "8px 16px";

	const { info } = props;

	const titleLevel = isDesktop ? 2 : isTablet ? 3 : 5;
	const stateTextSize = isDesktop ? 20 : isTablet ? 16 : 14;
	const typeTextSize = isDesktop ? 16 : isTablet ? 14 : 12;

	const simplifyPostedDate = `Ngày đăng: ${info.postedDate.getDate()}/${info.postedDate.getMonth() + 1}/${info.postedDate.getFullYear()}`

	return (
		<div style={{ width: "100%", backgroundColor: "rgba(0, 87, 115, 0.15)", padding: padding }}>
			<div style={{ width: "100%" }}>
				<Button icon={<LeftOutlined />} onClick={() => navigate("/job")} type={"link"} style={{ marginLeft: "-1rem" }}>
					{isMobile ? "Tìm kiếm" : "Tìm kiếm việc làm"}
				</Button>
			</div>

			{
				isTablet ? (
					<div style={{
						display: "flex",
						width: "100%",
						alignItems: "flex-start",
						padding: "20px 0"
					}}>
						<div style={{
							width: "130px",
							height: "130px",
							display: "flex",
							alignItems: "center",
							marginRight: "1rem"
						}}>
							<ImageContainer src={info.image} />
						</div>

						<div style={{ width: "100%" }}>
							<Space>
								<Typography.Title level={titleLevel} style={{ margin: 0 }}>{info.title}</Typography.Title>
								<Typography.Text style={{ color: "red", fontSize: stateTextSize }}>(Đang mở)</Typography.Text>
							</Space>

							<Row style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
								<Col sm={11} md={11}>
									<Space direction={"vertical"}>
										<Typography.Text style={{ fontSize: stateTextSize }}>{info.company}</Typography.Text>

										<Row style={{ width: "100%" }}>
											<Col xs={24} lg={12}>
												<Space>
													<EnvironmentOutlined />
													<Typography.Text style={{ fontSize: stateTextSize }}>{info.location}</Typography.Text>
												</Space>
											</Col>
											<Col xs={24} lg={12}>
												<Space>
													<DollarOutlined />
													<Typography.Text style={{ fontSize: stateTextSize }}>
														{typeof info.salary === "string" ? info.salary : `${info.salary[0]} - ${info.salary[1]}`}
													</Typography.Text>
												</Space>
											</Col>
										</Row>

										<div style={{
											padding: isDesktop ? "10px 16px" : isTablet ? "10px 10px" : "8px 8px",
											backgroundColor: "#004055",
											width: "fit-content",
											borderRadius: "20px",
										}}>
											<Typography.Text style={{ fontSize: typeTextSize, margin: 0, color: "#fff" }}>{info.type}</Typography.Text>
										</div>
									</Space>
								</Col>

								<Col>
									<Space direction={"vertical"}>
										<Typography.Text style={{ color: "#5d677a", margin: 0, fontSize: stateTextSize }} >{simplifyPostedDate}</Typography.Text>
										<ApplyButton applied={false} size={isMobile ? "medium" : "large"} style={{ width: "143px" }}/>
										<BookmarkButton isBookmark={info.isBookmarked} size={isMobile ? "medium" : "large"} style={{ width: "143px" }} />
									</Space>
								</Col>
							</Row>

						</div>

					</div>
				) : (
					<div style={{
						display: isDesktop ? "flex" : "block",
						width: "100%",
						minWidth: "fit-content",
						height: "fit-content",
						padding: isDesktop ? "1.5rem" : "1rem 0",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
						<div style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: isDesktop ? 0 : "1rem",
						}}>
							<div style={{
								width: isDesktop ? "200px" : "100px",
								height: isDesktop ? "200px" : "100px",
								display: "flex",
								alignItems: "center",
								marginRight: isDesktop ? "1rem" : "8px"
							}}>
								<ImageContainer src={info.image} />
							</div>

							<Space direction={"vertical"}>
								<Space>
									<Typography.Title level={titleLevel} style={{ margin: 0 }}>{info.title}</Typography.Title>
									<Typography.Text style={{ color: "red", fontSize: stateTextSize }}>(Đang mở)</Typography.Text>
								</Space>

								<Typography.Text style={{ fontSize: stateTextSize }}>{info.company}</Typography.Text>

								<Row style={{ width: "100%" }}>
									<Col xs={24} lg={12}>
										<Space>
											<EnvironmentOutlined />
											<Typography.Text style={{ fontSize: stateTextSize }}>{info.location}</Typography.Text>
										</Space>
									</Col>
									<Col xs={24} lg={12}>
										<Space>
											<DollarOutlined />
											<Typography.Text style={{ fontSize: stateTextSize }}>
												{typeof info.salary === "string" ? info.salary : `${info.salary[0]} - ${info.salary[1]}`}
											</Typography.Text>
										</Space>
									</Col>
								</Row>

								<div style={{
									padding: isDesktop ? "10px 16px" : isTablet ? "10px 10px" : "8px 8px",
									backgroundColor: "#004055",
									width: "fit-content",
									borderRadius: "20px",
								}}>
									<Typography.Text style={{ fontSize: typeTextSize, margin: 0, color: "#fff" }}>{info.type}</Typography.Text>
								</div>
							</Space>
						</div>

						<Space direction={isDesktop ? "vertical" : "horizontal"}>
							<Typography.Text style={{ color: "#5d677a", margin: 0, fontSize: stateTextSize }} >{simplifyPostedDate}</Typography.Text>
							<ApplyButton applied={false} size={isMobile ? "medium" : "large"} style={{ width: "143px" }}/>
							<BookmarkButton isBookmark={info.isBookmarked} size={isMobile ? "medium" : "large"} style={{ width: "143px" }} />
						</Space>
					</div>
				)
			}
		</div>
	);
}