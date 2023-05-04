import {ReactElement} from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Button, Col, Row} from "antd";
import {EditOutlined, SaveOutlined} from "@ant-design/icons";
import {SizeType} from "antd/es/config-provider/SizeContext";

export type ElementProps = {
	title: ReactElement;
	editable: boolean;
	isEditing: boolean;
	children: ReactElement;
	setOnEdit: (edit: boolean) => void;
}

export function CvElementContainer(props: ElementProps = {
	title: <></>,
	editable: false,
	isEditing: false,
	children: <></>,
	setOnEdit: () => {},
}): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const isMobile = checker.isMobile();

	const titleStyle = {
		fontSize: isDesktop ? "24px" : isTablet ? "20px" : "16px",
		fontWeight: "500",
	}

	return (
		<Row style={{
			width: "100%",
			boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			borderRadius: "8px",
			padding: isDesktop ? "40px" : isTablet ? "32px" : "24px",
			rowGap: "20px",
		}} >
			<Col span={24}>
				<Row style={{ justifyContent: "space-between" }}>
					<Col span={20} style={titleStyle}>{props.title}</Col>
					{props.editable &&
						<Col span={3}>
							<Button
								size={isDesktop ? "large" : "medium" as SizeType}
								onClick={() => props.setOnEdit(true)}
							>
								<EditOutlined />
								{ !isMobile && "Chỉnh sửa"}
							</Button>
						</Col>
					}
					{
						props.editable && props.isEditing && (
							<Col span={3}>
								<Button
									size={isDesktop ? "large" : "medium" as SizeType}
									onClick={() => props.setOnEdit(false)}
								>
									<SaveOutlined />
									{ !isMobile && "Lưu"}
								</Button>
							</Col>
						)
					}
				</Row>
				{props.children}
			</Col>
		</Row>
	)
}