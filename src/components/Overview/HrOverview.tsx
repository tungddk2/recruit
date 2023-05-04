import {memo, ReactElement} from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Col, Row, Space, Typography} from "antd";
import ImageContainer from "../common/images/ImageContainer";
import MultiEqualColumnContainer from "../common/MultiEqualColumnContainer";

export type HrOverviewType = {
	image: string;
	name: string;
	company: string;
	dob?: string | Date;
	phone?: string;
	gender?: string;
	email?: string;
}

function HrOverview(props: HrOverviewType): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const titleStyle = {
		margin: 0,
		fontSize: isDesktop ? "20px" : isTablet ? "16px" : "14px",
	}
	const contentStyle = {
		margin: 0,
		fontSize: isDesktop ? "20px" : isTablet ? "16px" : "14px",
		color: "#5d677a",
		width: "100%",
	}

	const dob = () => {
		if (props.dob) {
			let tmp = new Date(props.dob);
			return `${tmp.getDate()}/${tmp.getMonth() + 1}/${tmp.getFullYear()}`;
		}

		return "Chưa cập nhật";
	};

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
				justifyContent: "center",
			}}
		>
			<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: 0, width: "100%", textAlign: isMobile ? "center" : "left" }}>
				Thông tin quản lý nhân sự
			</Typography.Title>

			<Space style={{ width: "100%" }} className={"recruit-job-overview-space"} size={12}>
				<ImageContainer src={props.image} style={{
					width: isDesktop ? "100px" : "80px",
					height: isDesktop ? "100px" : "80px",
				}} />

				<Row style={{ width: "100%", rowGap: "8px" }}>
					<Col span={24}>
						<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: 0, width: "100%"}}>
							{props.name}
						</Typography.Title>
					</Col>
					<Col span={24}>
						<Typography.Text style={{ margin: 0, width: "100%", fontSize: "14px" }}>
							{props.company}
						</Typography.Text>
					</Col>
				</Row>
			</Space>

			<MultiEqualColumnContainer>
				<Row style={{ width: "100%", justifyContent: "space-between" }}>
					<Col><Typography.Text strong style={titleStyle} >Ngày tháng năm sinh:</Typography.Text></Col>
					<Col><Typography.Text style={{textAlign: "right",  ...contentStyle}}>{dob()}</Typography.Text></Col>
				</Row>

				<Row style={{ width: "100%", justifyContent: "space-between" }}>
					<Col><Typography.Text strong style={titleStyle} >Giới tính:</Typography.Text></Col>
					<Col><Typography.Text style={{textAlign: "right",  ...contentStyle}}>{ props.gender ?? "Chưa cập nhật" }</Typography.Text></Col>
				</Row>

				<Row style={{ width: "100%", justifyContent: "space-between" }}>
					<Col><Typography.Text strong style={titleStyle} >Số điện thoại:</Typography.Text></Col>
					<Col><Typography.Text style={{textAlign: "right",  ...contentStyle}}>{ props.phone ?? "Chưa cập nhật" }</Typography.Text></Col>
				</Row>

				<Row style={{ width: "100%", justifyContent: "space-between" }}>
					<Col><Typography.Text strong style={titleStyle} >Email:</Typography.Text></Col>
					<Col><Typography.Text style={{textAlign: "right",  ...contentStyle}}>{ props.email ?? "Chưa cập nhật" }</Typography.Text></Col>
				</Row>
			</MultiEqualColumnContainer>
		</Space>
	);
}

export default memo(HrOverview);