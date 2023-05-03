import {ReactElement} from "react";
import {Card, Divider, Space, Tooltip, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {SizeType} from "antd/es/config-provider/SizeContext";

export type JobField = {
	field: string;
	categories: { name: string; count: number }[];
}

export default function JobFieldCard(props: JobField): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const padding = isDesktop ? "24px" : isTablet ? "16px" : "8px";

	return (
		<div style={{
			backgroundColor: "#fff",
			borderRadius: "8px",
			borderColor: "#005773",
			padding: padding,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		}}>
			<Typography.Title level={3} style={{ color: "#005773" }}>{props.field}</Typography.Title>
			<Divider style={{ width: "100%" }} />
			<Space direction={"vertical"} style={{ width: "100%" }}>
				{ props.categories.map((category, index) => (
						<Space key={index} size={(isMobile ? "8px" : "16px") as SizeType}>
							<Tooltip title={`Xem tất cả các công việc thuộc ngành ${category.name}`}>
								<Typography.Link>{category.name}</Typography.Link>
							</Tooltip>
							<Typography.Text style={{ color: "#005773" }}>{category.count}</Typography.Text>
						</Space>
					))
				}
			</Space>
		</div>
	)
}