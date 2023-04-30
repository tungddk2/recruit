import React, {ReactElement} from "react";
import {Button, Col, Form, Input, Row, Space, Typography} from "antd";
import ImageContainer from "../common/images/ImageContainer";
import {MailOutlined} from "@ant-design/icons";
import {FormItem} from "../SignIn";
import {useNavigate} from "react-router";
import useBreakpoints from "../../hooks/useBreakpoints";
import {Link} from "react-router-dom";

export interface SignUpProps {
	role: "user" | "hr" | "company";

}

export default function SignUp(props: SignUpProps): ReactElement {
	const navigate = useNavigate();

	return (
		<div style={{
			width: "100%",
			height: "100vh",
			display: useBreakpoints().greaterThan("sm") ? "flex": "block",
			flexDirection: "column",
			justifyContent: "center",
		}}>
			<Row style={{
				width: "100%",
				height: "fit-content",
			}}>
				<Col sm={24} md={12} style={{
					padding: useBreakpoints().greaterThan("sm") ? "2.5rem 3rem" : "1rem 1.5rem",
				}}>
					<Form
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "1rem",
							padding: useBreakpoints().greaterThan("sm") ? "20px 1rem" : "20px 0",
						}}
						layout={"vertical"}
					>
						<Space>
							<h2 style={{ fontSize: "2rem", margin: 0 }}>
								{
									props.role === "user" ? "Tìm việc với": "Tìm ứng viên với"
								}
							</h2>
							<h2 style={{ fontSize: "2rem", margin: 0, color: "#005773" }}>
								<Link to="/">Recruit</Link>
							</h2>
						</Space>

						<Space>
							<Typography.Text style={{ fontSize: "1rem" }}>Đã có tài khoản?</Typography.Text>
							<Button type="link" size="large">Đăng nhập ngay</Button>
						</Space>

						<FormItem
							name="email"
							label={<Typography.Text style={{ fontSize: "1rem" }}>Email:</Typography.Text>}
							rules={[{ required: true, message: "Vui lòng nhập email của bạn!" }]}
						>
							<Input size="large" placeholder="account@gmail.com" />
						</FormItem>

						<FormItem
							name="password"
							label={<Typography.Text style={{ fontSize: "1rem" }}>Mật khẩu:</Typography.Text>}
							rules={[{ required: true, message: "Vui lòng nhập mật khẩu của bạn!" }]}
						>
							<Input.Password size="large" />
						</FormItem>

						{props.role === "company" && (
							<FormItem
								name="taxCode"
								label={<Typography.Text style={{ fontSize: "1rem" }}>Mã số thuế:</Typography.Text>}
								rules={[{ required: true, message: "Vui lòng nhập mã số thuế của công ty!" }]}
							>
								<Input size="large" />
							</FormItem>
						)}

						<FormItem>
							<Typography.Text>
								Bằng việc đăng ký tài khoản, bạn đã đồng ý với <a style={{ fontWeight: 500 }}>Điều khoản</a> và <a style={{ fontWeight: 500 }} >Chính sách</a> của chúng tôi.
							</Typography.Text>
						</FormItem>

						<FormItem>
							<Button type="primary" size="large" style={{ width: "100%" }}>Đăng ký</Button>
						</FormItem>

						{props.role === "user" && (
							<FormItem>
								<Button
									type="default"
									size="large"
									style={{ width: "100%" }}
									onClick={() => navigate("/sign-up/company")}
								>
									Đăng ký trở thành Nhà tuyển dụng
								</Button>
							</FormItem>
						)}
					</Form>
				</Col>
				<Col sm={24} md={12}>
					<div style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}>
						<ImageContainer
							src={
								props.role === "user"
									? require("../../assets/sign-up-user.png")
									: require("../../assets/sign-up-company.png")
							}
							style={{
								objectFit: "cover",
								maxHeight: "100%",
								maxWidth: "100%",
								width: "100%",
								height: "100%",
							}}
							preview={false}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}
