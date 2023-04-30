import React, {ReactElement, useEffect, useState} from "react";
import {Col, Row} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import ImageContainer from "../common/images/ImageContainer";

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
	const breakpoint = useBreakpoints().breakpoint;

	return (
		<Row style={{
			width: "100%",
			height: breakpoint === "sm" || breakpoint === "xs" ? "140px" : breakpoint === "md" ? "187px" : "450px",
			backgroundColor: "rgba(0, 87, 115, 0.1)",
		}}>
			<Col span={12}>

			</Col>
			<Col span={12}>
				<div style={{
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
				}}>
					<ImageContainer
						src={require("../../assets/hr-banner.png")}
						style={imageStyle.sm}
						preview={false}
					/>
				</div>
			</Col>
		</Row>
	);
}