import {CandidateProps} from "./JobCard";
import {ReactElement, useState} from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Button, Card, Col, Row, Space, Typography} from "antd";
import ImageContainer from "../common/images/ImageContainer";
import {HeartOutlined} from "@ant-design/icons";
import "./CandidateCard.css"
import {LocationOnIcon} from "../common/icons/LocationOnIcon";
import {PaymentsIcon} from "../common/icons/PaymentsIcon";
import {SpaceSize} from "antd/es/space";

export default function CandidateCard(props: CandidateProps): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isDesktop = checker.isDesktop();

	const requiredExperienceText = typeof props.requiredExperience === "string"
		? props.requiredExperience : `${props.requiredExperience[0]} - ${props.requiredExperience[1]} năm`;

	const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);

	const simplifyPostedDate = (date: Date): string => {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	return (
		isMobile ? (
			<Card
				style={{
					borderRadius: "8px",
					padding: 0,
					minWidth: "300px",
					width: "300px",
				}}
				bodyStyle={{ padding: 0 }}
				className="candidate-card"
				hoverable={true}
			>
				<Space style={{ justifyContent: "space-between", width: "100%", padding: "8px" }}>
					<Space>
						<LocationOnIcon style={{ fontSize: "11px", color: "#5D677A" }} />
						<Typography.Text style={{ fontSize: "11px", color: "#5D677A" }}>{props.location}</Typography.Text>
					</Space>

					{
						!isBookmarked ?
							<Button id="bookmark" icon={<HeartOutlined/>} onClick={() => setIsBookmarked(true)} />
							:
							<Button id="bookmark" type="primary" icon={<HeartOutlined/>} onClick={() => setIsBookmarked(false)} />
					}
				</Space>

				<Space direction={"vertical"} style={{ alignItems: "center", width: "100%", padding: "8px" }}>
					<div style={{ width: "135px", height: "100px", }}>
						<ImageContainer src={props.image} />
					</div>

					<Space direction={"vertical"} style={{ alignItems: "center", width: "100%" }}>
						<Typography.Title level={5} style={{ margin: 0 }}>{props.title}</Typography.Title>
						<Typography.Text style={{ fontSize: "14px", color: "#005773" }}>{props.type}</Typography.Text>
						<Typography.Text style={{ fontSize: "14px", color: "#5d677A" }}>
							{props.salary[0]} - {props.salary[1]} đồng
						</Typography.Text>
					</Space>

					<Typography.Text style={{ fontSize: "14px" }}>
						Đăng từ {simplifyPostedDate(props.postedDate)} bởi <a>{props.company}</a>
					</Typography.Text>
				</Space>

				<Space
					style={{
						width: "100%",
						height: "44px",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#E6F5FA",
						padding: isDesktop ? "1.5rem" : "1rem",
						borderBottomLeftRadius: "8px",
						borderBottomRightRadius: "8px",
					}}
				>
					<Typography.Text style={{ fontSize: "11px" }} >{`Kinh nghiệm: ${requiredExperienceText}`}</Typography.Text>
					<Button type="link" style={{ fontWeight: 500, fontSize: "12px" }}>{`Ứng tuyển >>`}</Button>
				</Space>
			</Card>
		) : (
			<Card
				style={{ display: "flex", flexDirection: "column", borderRadius: "8px", padding: 0 }}
				bodyStyle={{ padding: 0 }}
				className="candidate-card"
				hoverable={true}
			>
				<Space style={{
					width: "100%",
					minWidth: "fit-content",
					height: "fit-content",
					padding: isDesktop ? "1.5rem" : "1rem",
					justifyContent: "space-between",
				}} className="info-container">
					<Space size={isDesktop ? 54 : 24 as SpaceSize} className="details-container" style={{ width: "100%" }}>
						<div style={{ width: isDesktop ? "170px" : "100px", height: isDesktop ? "130px" : "78px", }}>
							<ImageContainer src={props.image} />
						</div>

						<Row style={{ rowGap: "8px" }}>
							<Col xs={12} sm={14} lg={24}>
								<Space direction="vertical">
									<Typography.Text style={{ fontSize: isDesktop ? "16px" : "14px", color: "#005773" }}>{props.type}</Typography.Text>
									<Typography.Title level={5} style={{ margin: 0 }}>{props.title}</Typography.Title>
									<Typography.Text style={{ fontSize: isDesktop ? "16px" : "14px" }}>
										Đăng từ {simplifyPostedDate(props.postedDate)} bởi <a>{props.company}</a>
									</Typography.Text>
								</Space>
							</Col>
							<Col xs={12} sm={10} lg={24}>
								<Space direction={isDesktop ? "horizontal" : "vertical"} style={{ justifyContent: "flex-end", height: "100%" }}>
									<Space>
										<LocationOnIcon style={{ fontSize: isDesktop ? "16px" : "14px", color: "#cccccc" }} />
										<Typography.Text style={{ fontSize: isDesktop ? "16px" : "14px", color: "#5d677A" }}>
											{props.location}
										</Typography.Text>
									</Space>
									<Space>
										<PaymentsIcon style={{ fontSize: isDesktop ? "16px" : "14px" }} />
										<Typography.Text style={{ fontSize: isDesktop ? "16px" : "14px", color: "#5d677A" }}>
											{props.salary[0]} - {props.salary[1]} đồng
										</Typography.Text>
									</Space>
								</Space>
							</Col>
						</Row>
					</Space>

					{
						!isBookmarked ? (
							<Button className="bookmark" icon={<HeartOutlined/>} onClick={() => setIsBookmarked(true)}>
								{isDesktop ? "Lưu việc làm" : "Lưu"}
							</Button>
							) :
							<Button className="bookmark" type="primary" icon={<HeartOutlined/>} onClick={() => setIsBookmarked(false)}>
								Đã lưu
							</Button>
					}
				</Space>
				<Space
					style={{
						width: "100%",
						height: "44px",
						minHeight: "fit-content",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#E6F5FA",
						padding: isDesktop ? "1.5rem" : "1rem",
						borderBottomLeftRadius: "8px",
						borderBottomRightRadius: "8px",
					}}
				>
					<Typography.Text>{`Yêu cầu kinh nghiệm: ${requiredExperienceText}`}</Typography.Text>
					<Button type="link" style={{ fontWeight: 500 }}>{`Ứng tuyển >>`}</Button>
				</Space>
			</Card>
		)
	);

}