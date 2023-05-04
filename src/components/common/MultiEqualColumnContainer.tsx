import {ReactElement} from "react";

export default function MultiEqualColumnContainer(props: any = {
	width: "100%",
	height: "fit-content",
	gap: "8px",
}): ReactElement {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			rowGap: props.gap,
			width: props.width,
			height: props.height,
			...props.style
		}}>
			{props.children}
		</div>
	);
}