import {memo, ReactElement} from "react";
import {Card, Col, Divider, Row, Space, Tooltip, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {SizeType} from "antd/es/config-provider/SizeContext";

export type JobField = {
	field: string;
	categories: { name: string; count: number }[];
}

function JobFieldCard(props: JobField): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const padding = isDesktop ? "24px" : isTablet ? "16px" : "8px";
	const titleSize = isDesktop ? 3 : isTablet ? 4 : 5;
	const contentSize = isDesktop ? "16px" : isTablet ? "18px" : "11px";
	const maxWidth = isDesktop ? "332px" : isTablet ? "324px" : "170px";
	const height = isDesktop ? "488px" : isTablet ? "fit-content" : "280px";

	return (
		<div style={{
			backgroundColor: "#fff",
			borderRadius: "8px",
			border: "1px solid #005773",
			padding: padding,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			height: "488px",
			minHeight: "fit-content",
			width: "100%",
			maxWidth: maxWidth,
		}}>
			<Typography.Title level={titleSize} style={{ margin: 0, width: "100%", textAlign: "left" }}>
				{props.field}
			</Typography.Title>

			<Divider style={{ width: "100%", borderColor: "black" }} />

			<Space direction={"vertical"} style={{ width: "100%" }}>
				{ props.categories.map((category, index) => (
						<Row key={index} style={{ width: "100%", justifyContent: "space-between" }}>
							<Col span={20} >
								<Tooltip title={`Xem tất cả các công việc thuộc ngành ${category.name}`}>
									<Typography.Link style={{ fontSize: contentSize }}>{category.name}</Typography.Link>
								</Tooltip>
							</Col>
							<Col span={4}>
								<Typography style={{ fontSize: contentSize, textAlign: "right", width: "100%" }}>
									{category.count}
								</Typography>
							</Col>
						</Row>
					))
				}
			</Space>
		</div>
	)
}

export default memo(JobFieldCard);