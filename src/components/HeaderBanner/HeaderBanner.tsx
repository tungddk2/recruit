import React, {ReactElement} from "react";
import {Button, Col, Row, Typography} from "antd";
import ImageContainer from "../common/images/ImageContainer";
import useBreakpoints from "../../hooks/useBreakpoints";

const containerStyle = {
	xs: {
		width: "100%",
		minHeight: "204px",
		height: "fit-content",
		backgroundColor: "rgba(0, 122, 116, 0.15)",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		width: "100%",
		minHeight: "295px",
		height: "fit-content",
		backgroundColor: "rgba(0, 122, 116, 0.15)",
		padding: "0px 32px",
		margin: 0,
	},
	md: {
		width: "100%",
		minHeight: "610px",
		height: "fit-content",
		backgroundColor: "rgba(0, 122, 116, 0.15)",
		padding: "0px 20px",
		margin: 0,
	}
}

export default function HeaderBanner(): ReactElement {
	const checker = useBreakpoints();

	const _containerStyle = checker.greaterOrEqualThan("md")
		? containerStyle.md
		: checker.greaterOrEqualThan("sm")
			? containerStyle.sm
			: containerStyle.xs;

	const _sloganFontSize = checker.greaterOrEqualThan("md")
		? "30px"
		: checker.greaterOrEqualThan("sm")
			? "24px" : "16px";

	return (
		<Row
			style={_containerStyle}
		>
			<Col span={12} style={{ padding: 0, display: "flex", alignItems: "center" }}>
				<div style={{
					width: "100%",
					height: "fit-content",
					display: "flex",
					justifyContent: "center",
				}}>
					<Typography.Text style={{
						fontFamily: "Pacifico",
						fontSize: _sloganFontSize,
						display: "block",
						maxWidth: "500px",
					}}>
						Hãy tìm kiếm công việc mơ ước của bạn với <span style={{ color: "#005773" }}>Recruit</span>!
					</Typography.Text>
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
						src={require("../../assets/find-job-banner.png")}
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