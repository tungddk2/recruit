import {CSSProperties, useState} from "react";

type UseHover = {
	style: CSSProperties;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export default function useHover(
	hoverStyle: CSSProperties,
	defaultStyle: CSSProperties = {},
	override: boolean = false,
	additionalFunction: () => void = () => {}
): UseHover {
	const [style, setStyle] = useState<CSSProperties>(defaultStyle);

	const onMouseEnter = () => {
		override ? setStyle(hoverStyle) : setStyle({...defaultStyle, ...hoverStyle});
		additionalFunction();
	}
	const onMouseLeave = () => {
		setStyle(defaultStyle);
		additionalFunction();
	}

	return {style, onMouseEnter, onMouseLeave};
}