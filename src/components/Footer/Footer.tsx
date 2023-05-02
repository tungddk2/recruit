import {ReactElement} from "react";
import {Col, Divider, Row, Space, Typography} from "antd";
import SocialContact from "../common/buttons/SocialContact";
import {
	CopyrightOutlined,
} from "@ant-design/icons";
import useBreakpoints from "../../hooks/useBreakpoints";

const containerStyle = {
	xs: {
		display: "block",
		minHeight: "216px",
		height: "216px",
		backgroundColor: "rgba(0, 0, 0, 0.9)",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		minHeight: "216px",
		height: "216px",
		backgroundColor: "rgba(0, 0, 0, 0.9)",
		padding: "0px 32px",
		margin: 0,
	},
	md: {
		display: "block",
		minHeight: "418px",
		height: "418px",
		backgroundColor: "rgba(0, 0, 0, 0.9)",
		padding: "0px 20px",
		margin: 0,
	}
}

export default function Footer(): ReactElement {
	const checker = useBreakpoints();

	const _containerStyle = checker.greaterOrEqualThan("md")
		? containerStyle.md : checker.greaterOrEqualThan("sm")
			? containerStyle.sm : containerStyle.xs;

	const titleStyle = checker.greaterOrEqualThan("md") ? {
		fontSize: "24px",
		fontWeight: 500,
		color: "#fff",
		marginBottom: "20px",
	} : checker.greaterOrEqualThan("sm") ? {
		fontSize: "16px",
		fontWeight: 500,
		color: "#fff",
		marginBottom: "12px",
	} : {
		fontSize: "12px",
		color: "#fff",
		marginBottom: "8px",
	}

	const linkStyle = checker.greaterOrEqualThan("md") ? {
		fontSize: "16px",
		color: "#fff",
	} : checker.greaterOrEqualThan("sm") ? {
		fontSize: "12px",
		color: "#fff",
	} : {
		fontSize: "10px",
		color: "#fff",
	}

	const otherInfoStyle = checker.greaterOrEqualThan("md") ? {
		fontSize: "16px",
		color: "#fff",
	} : checker.greaterOrEqualThan("sm") ? {
		fontSize: "14px",
		color: "#fff",
	} : {
		fontSize: "12px",
		color: "#fff",
	};

	const brandStyle = checker.greaterOrEqualThan("md") ? 1 : checker.greaterOrEqualThan("sm") ? 4 : 5;

	const copyRightStyle = checker.greaterOrEqualThan("md") ? {
		fontSize: "16px",
		color: "#fff",
		padding: 0,
		margin: 0,
	} : checker.greaterOrEqualThan("sm") ? {
		fontSize: "14px",
		color: "#fff",
		padding: 0,
		margin: 0,
	} : {
		fontSize: "12px",
		color: "#fff",
		padding: 0,
		margin: 0,
	}


	return (
		<div style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.9)", height: "fit-content" }}>
			<div style={_containerStyle}>
				<div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", padding: "16px 0" }}>
				<Row style={{ columnGap: "16px", width: "100%", height: "100%", alignItems: "center" }}>
					<Col xs={11} sm={9} md={{ span: 6, offset: 1 }} style={{ display: "flex", flexDirection: "column", rowGap: "12px", }}>
						<Typography.Title level={brandStyle} style={{ color: "#fff", margin: 0 }}>Recruit</Typography.Title>
						<Typography.Text style={otherInfoStyle}>
							Chúng tôi sẽ cố gắng hết sức để mang lại những trải nhiệm tuyệt vời cho bạn!
						</Typography.Text>
						<Typography.Text style={otherInfoStyle}>
							Theo dõi chúng tôi trên các kênh:
						</Typography.Text>
						<SocialContact checker={checker}/>
					</Col>
					<Col xs={11} sm={13} md={{ span: 15, offset: 1 }}>
						<Row style={{ columnGap: "8px" }}>
							<Col xs={7}>
								<Typography style={titleStyle}>Công việc</Typography>
								<Space direction="vertical">
									<Typography.Link style={linkStyle}>Danh sách công ty</Typography.Link>
									<Typography.Link style={linkStyle}>Danh sách lĩnh vực</Typography.Link>
									<Typography.Link style={linkStyle}>Danh sách việc làm</Typography.Link>
								</Space>
							</Col>

							<Col xs={7}>
								<Typography style={titleStyle}>Ứng viên</Typography>
								<Space direction="vertical">
									<Typography.Link style={linkStyle}>Danh sách ứng viên</Typography.Link>
									<Typography.Link style={linkStyle}>Danh sách mẫu hồ sơ CV</Typography.Link>
								</Space>
							</Col>

							<Col xs={7}>
								<Typography style={titleStyle}>Liên hệ</Typography>
								<Space direction="vertical">
									<Typography.Link style={linkStyle}>Thông tin chung</Typography.Link>
									<Typography.Link style={linkStyle}>Góp ý</Typography.Link>
								</Space>
							</Col>
						</Row>
					</Col>
				</Row>
				</div>
			</div>
			<Divider style={{ width: "100%", borderColor: "rgba(137, 132, 132, 0.32)", margin: "8px 0" }}/>
			<Space direction="horizontal" style={{ width: "100%", justifyContent: "center", marginBottom: "8px" }}>
				<CopyrightOutlined style={copyRightStyle}/>
				<Typography style={copyRightStyle}>
					{`${new Date().getFullYear()} - Recruit.`}
				</Typography>
			</Space>
		</div>
	)
}