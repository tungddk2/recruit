import {ReactElement} from "react";
import {Button, Col, Input, Row, Space} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import "./SubcribePane.css";

const containerStyle = {
	xs: {
		width: "100%",
		height: "150px",
		minHeight: "fit-content",
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		width: "100%",
		height: "130px",
		minHeight: "fit-content",
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		padding: "0px 32px",
		margin: 0,
	},
	md: {
		width: "100%",
		height: "130px",
		minHeight: "fit-content",
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		padding: "0px 20px",
		margin: 0,
	}
}


export default function SubcribePane(): ReactElement {
	const checker = useBreakpoints();

	const _containerStyle = checker.greaterOrEqualThan("md")
		? containerStyle.md : checker.greaterOrEqualThan("sm") ? containerStyle.sm : containerStyle.xs;

	const sloganStyle = checker.greaterOrEqualThan("md") ? {
		fontSize: "24px",
		fontWeight: "500",
		color: "#fff",
		maxWidth: "518px",
		maxHeight: "64px",
	} : checker.greaterOrEqualThan("sm") ? {
		fontSize: "20px",
		fontWeight: "500",
		color: "#fff",
	} : {
		fontSize: "14px",
		color: "#fff",
		maxWidth: "300px",
		maxHeight: "44px",
	}

	const emailInputStyle = checker.greaterOrEqualThan("md") ? {
		width: "100%",
		height: "100%",
		padding: "10px 15px",
		justifyContent: "space-between",
	} : checker.greaterOrEqualThan("sm") ? {
		width: "100%",
		height: "100%",
		padding: "8px 10px",
		justifyContent: "space-between",
	} : {
		width: "100%",
		height: "100%",
		padding: "4px 6px",
		justifyContent: "space-between",
	}

	const emailContainerStyle = {
		minWidth: "fit-content",
		minHeight: "fit-content",
		backgroundColor: "#404040",
		border: "1px solid rgba(255, 255, 255, 0.5)",
		borderRadius: "8px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	}

	const responsiveEmailContainerStyle = checker.greaterOrEqualThan("md") ? {
		maxWidth: "454px",
		maxHeight: "65px",
		width: "454px",
		height: "65px",
	} : checker.greaterOrEqualThan("sm") ? {
		maxWidth: "350px",
		maxHeight: "45px",
		width: "350px",
		height: "45px",
	} : {
		maxWidth: "260px",
		maxHeight: "36px",
		width: "260px",
		height: "36px",
	}

	return (
		<Row style={_containerStyle}>
			<Col xs={24} sm={12} style={{ display:"flex", justifyContent: "center", alignItems: "center", padding: "0 5px" }}>
				<div style={sloganStyle}>
					Nhận thông tin mới nhất liên quan đến công việc bằng cách đăng ký email ngay tại đây!
				</div>
			</Col>
			<Col xs={24} sm={12} style={{ display:"flex", justifyContent: "center", alignItems: "center", padding: "0 5px" }}>
				<div style={{...emailContainerStyle, ...responsiveEmailContainerStyle}} >
					<Space style={emailInputStyle} className="email-register">
						<Input placeholder="Nhập email của bạn tại đây" bordered={false} style={{ color: "#fff", height: "100%", minWidth: "233px" }} />
						<Button type="primary" style={{ height: "100%", minHeight: "fit-content" }}>Đăng ký</Button>
					</Space>
				</div>
			</Col>
		</Row>
	);
}