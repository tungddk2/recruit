import { useEffect, useState } from "react";
import { Breakpoint } from "antd";

export default function useBreakpoints() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setBreakpoint("xs");
      } else if (width < 768) {
        setBreakpoint("sm");
      } else if (width < 992) {
        setBreakpoint("md");
      } else if (width < 1200) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const sizeArray = ["xs", "sm", "md", "lg", "xl"] as Breakpoint[];

  const smallerOrEqualThan = (size: Breakpoint) => {
    return sizeArray.indexOf(breakpoint) <= sizeArray.indexOf(size);
  };

  const greaterThan = (size: Breakpoint) => {
    return sizeArray.indexOf(breakpoint) > sizeArray.indexOf(size);
  };

  const between = (min: Breakpoint, max: Breakpoint) => {
    return (
      sizeArray.indexOf(breakpoint) >= sizeArray.indexOf(min) &&
      sizeArray.indexOf(breakpoint) < sizeArray.indexOf(max)
    );
  };

  return { breakpoint, smallerOrEqualThan, greaterThan, between };
}
