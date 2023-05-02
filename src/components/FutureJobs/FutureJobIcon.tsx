import {ReactElement, useEffect, useState} from "react";
import {Card, Tooltip} from "antd";
import Icon, {LaptopOutlined} from "@ant-design/icons";
import "./icon.css";
import useBreakpoints from "../../hooks/useBreakpoints";

const { Meta } = Card;

export type FutureJobIconProps = {
	icon: JSX.Element;
	title: string;
	numJob: string | number;
}

export default function FutureJobIcon(props: FutureJobIconProps = {
	icon: <LaptopOutlined width={"50px"} />,
	title: "CNTT",
	numJob: "2950",
}): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();

	const [iconSize, setIconSize] = useState<string>(isDesktop ? "50px" : "25px");

	useEffect(() => {
		setIconSize(isDesktop ? "50px" : "25px");
	},[isDesktop]);

	return (
		<Card
			bordered={false}
			style={{
				width: "fit-content",
				height: "fit-content",
				margin: 0,
			}}
			bodyStyle={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: isDesktop ? "240px" : "100px",
				height: isDesktop ? "212px" : "109px",
				gap: isDesktop ? "10px" : "5px",
				padding: isDesktop ? "25px 42px" : "10px 0",
			}}
			onMouseEnter={() => setIconSize(isDesktop ? "64px" : "32px")}
			onMouseLeave={() => setIconSize(isDesktop ? "50px" : "25px")}
		>
			<Card
				style={{
					padding: isDesktop ? "20px 25px" : "10px 18px",
					width: "fit-content",
					height: "fit-content",
					borderRadius: "8px",
					backgroundColor: "rgba(0, 122, 116, 0.15)",
				}}
				bodyStyle={{
					padding: "0",
					height: "fit-content",
				}}
			>
				<Icon component={props.icon.type} style={{ fontSize: iconSize, color: "#00635E" }} />
			</Card>
			<Tooltip title={props.title} placement={"bottom"}>
				<Meta
					title={<div style={{ fontSize: isDesktop ? "16px" : "12px" }}>{props.title}</div>}
					description={<h4 style={{ fontSize: isDesktop ? "14px" : "11px" }}>{`${props.numJob} việc làm`}</h4>}
					style={{ textAlign: "center", width: "100%" }}
				/>
			</Tooltip>
		</Card>
	)
}