import {ReactElement, useState} from "react";
import {Card, Tooltip} from "antd";
import Icon, {LaptopOutlined} from "@ant-design/icons";
import useHover from "../../hooks/useHover";
import "./icon.css";

const { Meta } = Card;

type FutureJobIconProps = {
	icon: JSX.Element;
	title: string;
	numJob: string | number;
}

export default function FutureJobIcon(props: FutureJobIconProps = {
	icon: <LaptopOutlined width={"50px"} />,
	title: "CNTT",
	numJob: "2950",
}): ReactElement {
	const [iconSize, setIconSize] = useState<string>("50px");

	const iconStyle = useHover({
		fontSize: "64px",
	}, {
		fontSize: "50px",
		color: "#00635E",
		animationTimingFunction: "ease-out",
		animationDuration: "300ms",
	});

	const bodyStyle = useHover({
		padding: "0",
		height: "fit-content",
	}, {
		padding: "0",
		height: "fit-content",
		animationTimingFunction: "ease-out",
		animationDuration: "300ms",
	}, false);

	return (
		<Card
			bordered={false}
			style={{
				width: "fit-content",
				height: "fit-content",
			}}
			bodyStyle={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "240px",
				height: "212px",
				gap: "10px",
				padding: "25px 42px",
				transition: "width 300ms",
				transitionTimingFunction: "ease-out",
			}}
			className="icon-container"
			onMouseEnter={() => setIconSize("64px")}
			onMouseLeave={() => setIconSize("50px")}
		>
			<Card
				style={{
					padding: "25px",
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
				<Meta title={props.title} description={`${props.numJob} việc làm`} style={{ textAlign: "center", width: "100%" }}/>
			</Tooltip>
		</Card>
	)
}