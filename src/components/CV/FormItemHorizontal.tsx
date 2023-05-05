import React from "react";
import { Col, Row, Form } from "antd";

export type FormItemHorizontalProps = {
	children: React.ReactNode;
	label: string;
	name: string;
	rules?: any[];
	wrapCol?: number;
	required?: boolean;
}

const FormItemHorizontal = (props: FormItemHorizontalProps & any) => {
	const { children, label, name, rules, wrapCol = 8, required = false } = props;
	let customRules = rules;
	if (required === true && !rules) {
		customRules = [
			{
				required: true,
				message: `Missing ${label}`,
			},
		];
	}
	return (
		<Row style={{ width: "100%", marginBottom: "16px" }}>
			<Col span={8} style={{ fontWeight: "bold" }}>
				{label}
			</Col>
			<Col span={wrapCol}>
				{children}
			</Col>
			{/*<Form.Item*/}
			{/*	labelCol={{ span: 8 }}*/}
			{/*	wrapperCol={{ span: wrapCol }}*/}
			{/*	label={*/}
			{/*		<Col span={8} style={{ fontWeight: "bold" }}>*/}
			{/*			{label}*/}
			{/*		</Col>*/}
			{/*	}*/}
			{/*	name={name}*/}
			{/*	rules={customRules}*/}
			{/*	style={{ width: "100%" }}*/}
			{/*	required={required}*/}
			{/*>*/}
			{/*	{children}*/}
			{/*</Form.Item>*/}
		</Row>
	);
};

export default FormItemHorizontal;
