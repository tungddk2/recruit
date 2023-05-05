import {ReactElement, useContext, useEffect, useState} from "react";
import {useForm} from "antd/es/form/Form";
import {Button, Divider, Form, Input, message, Modal, Row, Tooltip, Typography} from "antd";
import {CloseOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import {GoogleIcon} from "../common/icons/GoogleIcon";
import {FormItem} from "../SignIn";
import {AuthContext} from "../../provider/AuthContext";

type LogInState = {
	visible: boolean;
	setVisible: (visible: boolean) => void;
}

export default function LogIn(props: LogInState): ReactElement {
	const {visible, setVisible} = props;
	const [form] = useForm();
	const { login, user } = useContext(AuthContext);
	const [messageApi, contextHolder] = message.useMessage();
	const [loading, setLoading] = useState(false);

	const handleLogin = async () => {
		try {
			//setLoading(true);
			const values = await form.validateFields();
			const status = await login(values.email, values.password);
			if (status) {
				messageApi.success('Đăng nhập thành công');
				setVisible(false);
				//setLoading(false);
			}
		} catch (error) {
			console.log('Failed to login');
			messageApi.error('Đăng nhập thất bại');
		}
	}

	return (
		<Modal
			open={visible}
			onCancel={() => setVisible(false)}
			footer={null}
		>
			<Form
				autoComplete="off"
				form={form}
				onFinish={(values) => {
					console.log(values);
				}}
			>
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
						loading={loading}
						type="primary"
						style={{ width: "100%", fontWeight: 500 }}
						size="large"
						htmlType="submit"
						onClick={handleLogin}
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
		</Modal>
	)
}