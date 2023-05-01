import React, {ReactElement, useEffect, useState} from "react";
import {Button, Col, Row, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import ImageContainer from "../common/images/ImageContainer";
import {SizeType} from "antd/es/config-provider/SizeContext";

const containerStyle = {
	xs: {
		width: "100%",
		minHeight: "140px",
		height: "fit-content",
		backgroundColor: "rgba(0, 87, 115, 0.1)",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		width: "100%",
		minHeight: "187px",
		height: "fit-content",
		backgroundColor: "rgba(0, 87, 115, 0.1)",
		padding: "0px 32px",
		margin: 0,
	},
	md: {
		width: "100%",
		height: "450px",
		backgroundColor: "rgba(0, 87, 115, 0.1)",
		padding: "0px 20px",
		margin: 0,
	}
}

const imageStyle = {
	xs: {
		width: "100%",
		height: "100%",
	},
	sm: {
		width: "100%",
		height: "167px",
		margin: "10px 0px",
	},
	md: {
		width: "100%",
		height: "400px",
		margin: "25px 0px",
	},
	lg: {
		width: "100%",
		height: "400px",
		margin: "25px 0px",
	}
}

export default function HrBanner(): ReactElement {
	const checker = useBreakpoints();

	const _containerStyle = checker.greaterOrEqualThan("md")
		? containerStyle.md
		: checker.greaterOrEqualThan("sm")
			? containerStyle.sm
			: containerStyle.xs;

	const _sloganFontSize = checker.greaterOrEqualThan("md")
		? "32px"
		: checker.greaterOrEqualThan("sm")
			? "20px" : "12px";

	const _buttonContainerMarginTop = checker.greaterOrEqualThan("md")
		? "54px"
		: checker.greaterOrEqualThan("sm")
			? "40px" : "16px";

	const buttonStyle = checker.greaterOrEqualThan("md") ? {
		width: "450px",
		height: "83px",
		minWidth: "fit-content",
		minHeight: "fit-content",
	} : {
		width: "100%",
		height: "fit-content",
	}

	return (
		<Row
			style={_containerStyle}
		>
			<Col span={12} style={{ padding: 0, display: "flex", alignItems: "center" }}>
				<div style={{
					width: "100%",
					height: "fit-content",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
					<Typography.Text style={{
						fontFamily: "Pacifico",
						fontSize: _sloganFontSize,
						display: "block",
						width: "100%",
					}}>
						Nếu bạn đang cần tìm những ứng viên tài giỏi, chất lượng, hãy đăng tin ứng tuyển ngay tại đây !
					</Typography.Text>

					<div style={{ width: "fit-content", marginTop: _buttonContainerMarginTop }}>
						<Button type="primary" style={buttonStyle}>
							{
								checker.greaterOrEqualThan("md")
									? <Typography.Title level={2} style={{ color: "#fff", margin: 0 }}>Đăng tin ứng tuyển</Typography.Title>
									: checker.greaterOrEqualThan("sm")
										? <Typography.Text style={{ color: "#fff", margin: 0, fontSize: "16px" }}>Đăng tin ứng tuyển</Typography.Text>
										: "Đăng tin"
							}
						</Button>
					</div>
				</div>
			</Col>
			<Col span={12} style={{ padding: 0, display: "flex", alignItems: "center" }}>
				<div style={{
					width: "100%",
					height: "fit-content",
					display: "flex",
					justifyContent: "center",
				}}>
					<ImageContainer
						src={require("../../assets/hr-banner.png")}
						style={{
							width: "100%", height: "auto",
							maxWidth: "100%",
						}}
						preview={false}
					/>
				</div>
			</Col>
		</Row>
	);
}