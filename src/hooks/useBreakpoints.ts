import { useEffect, useState } from "react";
import { Breakpoint } from "antd";

export const breakpoints: Record<string, number> = {
	xs: 480,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1600,
}

export type BreakpointChecker = {
	smallerThan: (size: number | string) => boolean;
	greaterOrEqualThan: (size: number | string) => boolean;
	between: (min: number | string, max: number | string) => boolean;
	isMobile: () => boolean;
	isTablet: () => boolean;
	isDesktop: () => boolean;
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
		},
		isMobile: () => window.innerWidth < breakpoints.sm,
		isTablet: () => window.innerWidth >= breakpoints.sm && window.innerWidth < breakpoints.lg,
		isDesktop: () => window.innerWidth >= breakpoints.lg,
	}
}
