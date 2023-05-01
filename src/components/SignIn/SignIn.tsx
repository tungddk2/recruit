import {Button, Divider, Form, Input, Row, Tooltip, Typography} from "antd";
import { CloseOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import useBreakpoints from "../../hooks/useBreakpoints";
import {ReactElement} from "react";
import {GoogleIcon} from "../common/icons/GoogleIcon";

const styles: {sm: React.CSSProperties, default: React.CSSProperties} = {
	sm: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "0.5rem 1rem",
		gap: "10px",
		width: "100vw",
		height: "fit-content",
		borderRadius: "8px",
		backgroundColor: "white",
		flexDirection: "inherit",
	},
	default: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "1rem 2rem",
		gap: "10px",
		width: "400px",
		height: "fit-content",
		borderRadius: "8px",
		backgroundColor: "white",
	},
};

export const FormItem = (props: any) => {
	// add style to Form.Item
	let _style = {
		width: "100%",
		height: "fit-content",
		marginBottom: 0,
		minHeight: "fit-content",
	};

	const { style, ...others } = props;

	if (style) {
		_style = {
			...style,
			width: "100%",
			height: "fit-content",
			minHeight: "fit-content",
			marginBottom: 0,
		};
	}

	return <Form.Item style={_style} {...others} />;
};

export default function SignIn(): ReactElement {
	const style = useBreakpoints().smallerThan("md")
		? styles.sm
		: styles.default;

	const [form] = Form.useForm();

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
		>
			<Form
				autoComplete="off"
				style={style}
				form={form}
				onFinish={(values) => {
					console.log(values);
				}}
			>
				<FormItem style={{ textAlign: "right", marginRight: "-2rem" }}>
					<Tooltip title="Đóng">
						<Button type="text" shape="circle" icon={<CloseOutlined />} />
					</Tooltip>
				</FormItem>
				<FormItem>
					<Typography.Title level={3} style={{ textAlign: "center" }}>
						Trải nghiệm cùng Recruit
					</Typography.Title>
				</FormItem>

				<FormItem
					name="email"
					rules={[{ required: true, message: "Vui lòng nhập email của bạn!" }]}
				>
					<Input size="large" prefix={<MailOutlined />} placeholder="account@gmail.com" />
				</FormItem>

				<FormItem
					name="password"
					rules={[
						{ required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
					]}
				>
					<Input.Password size="large" prefix={<LockOutlined />} />
				</FormItem>

				<FormItem style={{ textAlign: "right", height: "22px" }}>
					<Button
						type="link"
						style={{ fontSize: "12px", padding: 0, height: "22px", lineHeight: "22px" }}
					>
						Quên mật khẩu?
					</Button>
				</FormItem>

				<FormItem>
					<Button
						type="primary"
						style={{ width: "100%", fontWeight: 500 }}
						size="large"
						htmlType="submit"
					>
						Đăng nhập
					</Button>
				</FormItem>

				<FormItem>
					<Divider style={{ margin: 0, borderBlockColor: "rgba(0, 0, 0, 0.3)", color: "rgba(0, 0, 0, 0.5)" }} >Hoặc</Divider>
				</FormItem>

				<FormItem>
					<Button
						type="default"
						style={{ width: "100%", fontWeight: 500 }}
						size="large"
						icon={<GoogleIcon style={{ fontSize: "16px" }}  />}
					>
						<span>Đăng nhập bằng Google</span>
					</Button>
				</FormItem>

				<FormItem>
					<Row justify="space-between">
						<Typography.Text style={{ verticalAlign: "middle", lineHeight: "2rem" }}> Bạn chưa có tài khoản? </Typography.Text>
						<Button type="link" style={{ padding: 0 }}>
							Đăng ký ngay tại đây
						</Button>
					</Row>
				</FormItem>
			</Form>
		</div>
	);
}
