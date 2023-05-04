import {ReactElement} from "react";
import {Card, Space, Typography} from "antd";
import {useNavigate} from "react-router";
import useBreakpoints from "../../../hooks/useBreakpoints";
import ImageContainer from "../../common/images/ImageContainer";
import {EnvironmentOutlined} from "@ant-design/icons";

export type CompanyCardProps = {
	id: string | number;
	name: string;
	location: string;
	link: string;
	image: string;
	jobs: number;
}

export default function CompanyCard(props: CompanyCardProps): ReactElement {
	const navigate = useNavigate();
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const infoTextSize = isDesktop ? 16 : isTablet ? 14 : 12;
	const jobsTextSize = isDesktop ? 20 : isTablet ? 16 : 14;

	return (
		<Card
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "row",
				borderRadius: "8px",
				padding: "16px",
				border: "1px solid rgba(0, 0, 0, 0.25)",
			}}
			bodyStyle={{ padding: 0, width: "100%" }}
			className="candidate-card"
			hoverable={true}
			onClick={(e) => {
				navigate(`/company/${props.id}`);
			}}
		>
			<div style={{ display: "flex", width: "100%", justifyContent: "space-between", }} >
				<div style={{
					display: "flex",
					justifyContent: "center",
				}}>
					<div style={{
						width: isDesktop ? "170px" : isTablet ? "135px" : "100px",
						height: isDesktop ? "130px" : isTablet ? "100px" : "78px",
						display: "flex",
						alignItems: "center",
						marginRight: isDesktop ? "1rem" : "8px"
					}}>
						<ImageContainer src={props.image} />
					</div>

					<Space direction={"vertical"}>
						<Typography.Title level={isDesktop ? 4 : 5} style={{ margin: 0 }}>{props.name}</Typography.Title>
						<Space>
							<EnvironmentOutlined />
							<Typography.Text style={{ fontSize: infoTextSize, margin: 0 }}>{props.location}</Typography.Text>
						</Space>
						<Typography.Link>{props.link}</Typography.Link>
					</Space>
				</div>

				<div style={{
					width: "fit-content",
					display: "flex", alignItems: "center",
				}}>
					<Typography.Text style={{
						fontSize: jobsTextSize,
						margin: 0,
						backgroundColor: "rgba(0, 87, 115, 0.15)",
						borderRadius: "20px",
						padding: "4px 16px",
					}}>{props.jobs} việc làm</Typography.Text>
				</div>
			</div>
		</Card>
	)
}