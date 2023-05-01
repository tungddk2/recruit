import React, {ReactElement} from "react";
import {Col, Row, StepProps, Steps, Typography} from "antd";
import ImageContainer from "../common/images/ImageContainer";
import useBreakpoints from "../../hooks/useBreakpoints";

const containerStyle = {
	xs: {
		width: "100%",
		minHeight: "204px",
		height: "fit-content",
		padding: "0px 16px",
		margin: 0,
	},
	sm: {
		width: "100%",
		minHeight: "295px",
		height: "fit-content",
		padding: "0px 32px",
		margin: 0,
	},
	md: {
		width: "100%",
		minHeight: "610px",
		height: "fit-content",
		padding: "0px 20px",
		margin: 0,
	}
}

const guideSteps: StepProps[] = [
	{
		title: "Đăng ký tài khoản",
		description: "Do được dùng cung cấp những thông tin quan trọng và hữu ích với việc tìm việc làm của các bạn, chúng tôi mong rằng bạn sẽ sử dụng email chính chủ.",
	},
	{
		title: "Tìm kiếm việc làm",
		description: "Với số lượng việc làm mà chúng tôi cung cấp cho bạn , chúng tôi hy vọng rằng bạn sẽ tìm được công việc phù hợp với nhu cầu và điều kiện của bạn .",
	},
	{
		title: "Ứng tuyển việc làm",
		description: "Sau khi bạn chọn được công việc phù hợp, bạn có thể chọn ứng tuyển để thông báo cho quản lý nhân sự biết, sau đó họ sẽ liên hệ với bạn nếu bạn đạt tiêu chuẩn của công việc đó.",
	}
];

const imageSrcs = [
	require("../../assets/guide-1.png"),
	require("../../assets/guide-2.png"),
	require("../../assets/guide-3.png"),
];

export default function Guide(): ReactElement {
	const checker = useBreakpoints();
	const [step, setStep] = React.useState(0);

	const isMobile = checker.smallerThan("sm");
	const isDesktop = checker.greaterOrEqualThan("md");

	const _containerStyle = isDesktop ? containerStyle.md
		: checker.greaterOrEqualThan("sm")
			? containerStyle.sm
			: containerStyle.xs;

	const _sloganFontSize = isDesktop ? "32px"
		: checker.greaterOrEqualThan("sm")
			? "24px" : "16px";

	const stepMarginTop = isDesktop ? "40px" : checker.greaterOrEqualThan("sm") ? "32px" : 0;

	return (
		<Row
			style={_containerStyle}
		>
			{ isMobile && (
				<Col span={24} style={{ margin: "24px 0", padding: 0, display: "flex", justifyContent: "center" }}>
					<Typography.Text style={{
						fontFamily: "Pacifico",
						fontSize: _sloganFontSize,
						display: "block",
						maxWidth: "500px",
						color: "#005773",
						textAlign: "center",
					}}>
						Hướng dẫn sử dụng web cho ứng viên
					</Typography.Text>
				</Col>
			)}
			<Col span={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 5px" }}>
				<div style={{
					width: "500px",
					height: "fit-content",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}>
					{ !isMobile && (
						<Typography.Text style={{
							fontFamily: "Pacifico",
							fontSize: _sloganFontSize,
							display: "block",
							maxWidth: "564px",
							color: "#005773",
						}}>
							Hướng dẫn sử dụng web cho ứng viên
						</Typography.Text>
					)}

					<Steps
						style={{
							marginTop: stepMarginTop,
						}}
						size={isMobile ? "small" : "default"}
						current={step}
						onChange={(current) => setStep(current)}
						direction="vertical"
						items={isDesktop ? guideSteps : guideSteps.map((item) => ({ title: item.title }))}
					/>
				</div>
			</Col>
			<Col span={12} style={{ display: "flex", alignItems: "center", padding: "0 5px" }}>
				<div style={{
					width: "100%",
					height: "fit-content",
					display: "flex",
					justifyContent: "center",
				}}>
					<ImageContainer
						src={imageSrcs[step]}
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