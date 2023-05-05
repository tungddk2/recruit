import {CvElementContainer} from "./CvElementContainer";
import {ReactElement} from "react";
import {Avatar, Button, Col, Row, Space, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import {CalendarOutlined, DollarOutlined, StarOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import {AvatarSize} from "antd/es/avatar/SizeContext";

export type CvProfileProps = {
	name: string;
	position: string;
	experience: string | number;
	salary: string | [string | number, string | number];
	updatedDate: Date;
}

export function CvProfile(props: CvProfileProps): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const isMobile = checker.isMobile();

	const maxAvatarWidth = isDesktop ? 210 : isTablet ? 170 : 80;
	const avatarPaddingBottom = isDesktop ? "20x" : isTablet ? "16px" : "12px";
	const nameFontSize = isDesktop ? 2 : isTablet ? 3 : 5;
	const infoFontSize = isDesktop ? "20px" : isTablet ? "16px" : "12px";

	const salary = typeof props.salary === "string" ? props.salary : `${props.salary[0]} - ${props.salary[1]}`;

	return (
		<CvElementContainer
			title={"Profile"}
			editable={false}
			setOnEdit={(e:boolean) => {}}
		>
			<Row>
				<Col xs={5} sm={7}>
					<div style={{ width: "fit-content", display: "flex", flexDirection: "column", marginRight: "1rem" }}>
						<Avatar
							style={{ marginBottom: avatarPaddingBottom }}
							size={maxAvatarWidth as AvatarSize}
							icon={<UserOutlined />}
						/>
						<Button type="primary" style={{ width: maxAvatarWidth }}>
							<UploadOutlined />
							{isMobile ? "Tải" : "Tải ảnh lên"}
						</Button>
					</div>
				</Col>

				<Col xs={18} sm={12}>
					<Typography.Title level={nameFontSize} style={{ color: "#005773" }}>{props.name}</Typography.Title>
					<Space style={{ fontSize: infoFontSize}}>
						<UserOutlined />
						Vị trí mong muốn: {props.position}
					</Space>
					<Space style={{ fontSize: infoFontSize}}>
						<StarOutlined />
						Kinh nghiệm: {props.experience}
					</Space>
					<Space style={{ fontSize: infoFontSize}}>
						<DollarOutlined	/>
						Mức lương mong muốn: {salary}
					</Space>
					<Space style={{ fontSize: infoFontSize}}>
						<CalendarOutlined/>
						Cập nhật lần cuối: {props.updatedDate.toLocaleDateString()}
					</Space>
				</Col>
			</Row>
		</CvElementContainer>
	);
}