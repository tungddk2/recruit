import React from "react";
import { Col, Row, Form } from "antd";
import {FormItemHorizontalProps} from "./FormItemHorizontal";
import useBreakpoints from "../../hooks/useBreakpoints";

const FormItemVertical = (props: FormItemHorizontalProps & any) => {
	const { children, label, name, rules, required = false } = props;
	let customRules = rules;
	if (required === true && !rules) {
		customRules = [
			{
				required: true,
				message: `Missing ${label}`,
			},
		];
	}

	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const isMobile = checker.isMobile();

	return (
		<Row style={{ width: "100%" }}>
			<Col span={24}>
				<Row style={{
					fontSize: isDesktop ? "20px" : isTablet ? "16px" : "14px",
					marginBottom: "8px",
				}}>
					{label}
				</Row>
				<Form.Item
					wrapperCol={{ span: 24 }}
					name={name}
					style={{ width: "100%",}}
					rules={customRules}
					required={required}
				>
					{children}
				</Form.Item>
			</Col>
		</Row>
	);
};

export default FormItemVertical;