import {ReactElement} from "react";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Button, Col, Row} from "antd";
import {EditOutlined, SaveOutlined} from "@ant-design/icons";
import {SizeType} from "antd/es/config-provider/SizeContext";

export type ElementProps = {
	title: ReactElement | string;
	editable: boolean;
	isEditing?: boolean;
	children?: ReactElement | undefined;
	setOnEdit: (edit: boolean) => void;
}

export function CvElementContainer(props: ElementProps & any = {
	title: <></>,
	editable: false,
	isEditing: false,
	children: <></>,
	setOnEdit: (edit: boolean) => {},
}): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const isMobile = checker.isMobile();

	const titleStyle = {
		fontSize: isDesktop ? "24px" : isTablet ? "20px" : "16px",
		fontWeight: "500",
		color: "#005773",
	}

	return (
		<Row style={{
			width: "100%",
			boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			borderRadius: "8px",
			padding: isDesktop ? "40px" : isTablet ? "24px" : "16px",
			rowGap: "20px",
		}}>
			<Col span={24}>
				<Row style={{ justifyContent: "space-between", paddingBottom: "20px" }}>
					<Col span={18} style={titleStyle}>{props.title}</Col>
					{props.editable && !props.isEditing &&
						<Col style={{ width: "fit-content" }}>
							<Button
								type="primary"
								size={isDesktop ? "large" : "medium" as SizeType}
								onClick={() => props?.setOnEdit(true)}
							>
								<EditOutlined />
								{ !isMobile && "Chỉnh sửa"}
							</Button>
						</Col>
					}
					{
						props.editable && props.isEditing && (
							<Col style={{ width: "fit-content" }}>
								<Button
									type="primary"
									size={isDesktop ? "large" : "medium" as SizeType}
									onClick={() => props?.setOnEdit(false)}
								>
									<SaveOutlined />
									{ !isMobile && "Lưu"}
								</Button>
							</Col>
						)
					}
				</Row>
			</Col>
			<Col span={24} style={{ display: "flex", justifyContent: "center" }}>
				{props.children}
			</Col>
		</Row>
	)
}