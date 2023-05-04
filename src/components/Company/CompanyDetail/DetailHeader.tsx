import {ReactElement} from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {Button, Col, Row, Space, Typography} from "antd";
import {DollarOutlined, EnvironmentOutlined, GlobalOutlined, LeftOutlined, MailOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import ImageContainer from "../../common/images/ImageContainer";
import BookmarkButton from "../../common/buttons/BookmarkButton";
import ApplyButton from "../../common/buttons/ApplyButton";
import {CompanyCardProps} from "../CompanyCard";

type DetailHeaderProps = {
	info: CompanyCardProps;
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

	return (
		<div style={{ width: "100%", backgroundColor: "rgba(0, 87, 115, 0.15)", padding: padding }}>
			<div style={{ width: "100%" }}>
				<Button icon={<LeftOutlined />} onClick={() => navigate("/job")} type={"link"} style={{ marginLeft: "-1rem" }}>
					{isMobile ? "Tìm kiếm" : "Tìm kiếm công ty"}
				</Button>
			</div>

			{
				 (
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
							width: "100%",
							justifyContent: "space-between",
							marginBottom: isDesktop ? 0 : "1rem",
						}}>
							<div style={{
								width: isDesktop ? "200px" : isTablet ? "150px" : "100px",
								height: isDesktop ? "200px" : isTablet ? "150px" : "100px",
								display: "flex",
								alignItems: "center",
								marginRight: isDesktop ? "1rem" : "1rem"
							}}>
								<ImageContainer src={info.image} />
							</div>

							<div style={{
								display: "flex",
								width: isDesktop ? "100%" : "fit-content",
								flexDirection: "column",
								gap: "1rem",
							}}>
								<Typography.Title level={titleLevel} style={{ margin: 0 }}>{info.name}</Typography.Title>

								<Row style={{ width: "100%" }}>
									<Col xs={24} sm={24} md={24} lg={8}>
										<Space>
											<EnvironmentOutlined />
											<Typography.Text style={{ fontSize: stateTextSize }}>{info.location}</Typography.Text>
										</Space>
									</Col>
									<Col xs={24} sm={24} md={24} lg={8}>
										<Space>
											<MailOutlined />
											<Typography.Text style={{ fontSize: stateTextSize }}>company@gmail.com</Typography.Text>
										</Space>
									</Col>

									<Col xs={24} sm={24} md={24} lg={8}>
										<Space>
											<GlobalOutlined />
											<Typography.Link style={{ fontSize: stateTextSize }}>{info.link}</Typography.Link>
										</Space>
									</Col>
								</Row>

								<div style={{
									padding: isDesktop ? "10px 16px" : isTablet ? "10px 10px" : "8px 8px",
									backgroundColor: "#004055",
									width: "fit-content",
									borderRadius: "20px",
								}}>
									<Typography.Text style={{ fontSize: typeTextSize, margin: 0, color: "#fff" }}>{`${info.jobs} việc làm`}</Typography.Text>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
}