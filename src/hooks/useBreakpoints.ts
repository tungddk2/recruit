import { useEffect, useState } from "react";
import { Breakpoint } from "antd";

export const breakpoints: Record<string, number> = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1600,
}

type BreakpointChecker = {
	smallerThan: (size: number | string) => boolean;
	greaterOrEqualThan: (size: number | string) => boolean;
	between: (min: number | string, max: number | string) => boolean;
}

export default function useBreakpoints(): BreakpointChecker {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setBreakpoint] = useState<Breakpoint>("xs");

	useEffect(() => {
		const onResize = () => {
			const width = window.innerWidth;
			for (const key in breakpoints) {
				if (width < breakpoints[key]) {
					setBreakpoint(key as Breakpoint);
					break;
				}
			}
		};

		window.addEventListener("resize", onResize);
		onResize();

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return {
		smallerThan: (size: number | string) => {
			if (typeof size === "number")
				return window.innerWidth < breakpoints[size];
			if (!(size in breakpoints))
				return false;
			return window.innerWidth < breakpoints[size];
		},
		greaterOrEqualThan: (size: number | string) => {
			if (typeof size === "number")
				return window.innerWidth >= breakpoints[size];
			if (!(size in breakpoints))
				return false;
			return window.innerWidth >= breakpoints[size];
		},
		between: (min: number | string, max: number | string) => {
			let minSize: number;
			let maxSize: number;
			if (typeof min === "number")
				minSize = min;
			else if (min in breakpoints)
				minSize = breakpoints[min];
			else
				return false;

			if (typeof max === "number")
				maxSize = max;
			else if (max in breakpoints)
				maxSize = breakpoints[max];
			else
				return false;

			return window.innerWidth >= minSize && window.innerWidth < maxSize;
		}
	}
}
