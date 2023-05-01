import React, {ReactElement, useEffect, useState} from "react";
import {Button, Col, Row, Typography} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import ImageContainer from "../common/images/ImageContainer";
import {SizeType} from "antd/es/config-provider/SizeContext";

const containerStyle = {
	xs: {
		width: "100%",
		height: "140px",
		backgroundColor: "rgba(0, 87, 115, 0.1)",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		width: "100%",
		height: "187px",
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

	const _sloganMargin = checker.greaterOrEqualThan("md")
		? "50px -20px auto 0px"
		: checker.greaterOrEqualThan("sm")
			? "45px 0px auto 0px"
			: "25px -20px auto 0px";

	const _sloganFontSize = checker.greaterOrEqualThan("md")
		? "30px"
		: checker.greaterOrEqualThan("sm")
			? "20px" : "12px";

	const _buttonContainerMarginTop = checker.greaterOrEqualThan("md")
		? "50px"
		: checker.greaterOrEqualThan("sm")
			? "30px" : "10px";

	const buttonSize = (checker.greaterOrEqualThan("md") ? "large" : "medium") as SizeType;

	return (
		<Row
			gutter={{ md: 20, sm: 32, xs: 16}}
			style={_containerStyle}
		>
			<Col span={12} style={{ padding: 0 }}>
				<Typography.Text style={{
					fontFamily: "Pacifico",
					fontSize: _sloganFontSize,
					display: "block",
					width: "100%",
					margin: _sloganMargin,
				}}>
					Nếu bạn đang cần tìm những ứng viên tài giỏi, chất lượng, hãy đăng tin ứng tuyển ngay tại đây !
				</Typography.Text>

				<div style={{ width: "100%", marginTop: _buttonContainerMarginTop }}>
					<Button type="primary" size={buttonSize} style={{ height: "fit-content", width: "100%" }}>
						{
							checker.greaterOrEqualThan("md")
								? <Typography.Title level={2} style={{ color: "#fff", margin: 0 }}>Đăng tin ứng tuyển</Typography.Title>
								: checker.greaterOrEqualThan("sm")
									? <Typography.Title level={3} color="#fff">Đăng tin ứng tuyển</Typography.Title>
									: "Đăng tin"
						}
					</Button>
				</div>
			</Col>
			<Col span={12} style={{ padding: 0 }}>
				<div style={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
				}}>
					<ImageContainer
						src={require("../../assets/hr-banner.png")}
						preview={false}
					/>
				</div>
			</Col>
		</Row>
	);
}