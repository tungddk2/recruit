import {Button, Form, Input, Typography} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import useBreakpoints from "../../hooks/useBreakpoints";
import React from "react";

const styles = {
    sm: {

    },
    default: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
        gap: "10px",
        width: "400px",
        height: "300px",
        borderRadius: "8px",
        backgroundColor: "white",
    }
}

const FormItem = (props: any) => {
    // add style to Form.Item
    let _style = {
        width: "100%", height: "fit-content", marginBottom: 0
    };

    const { style, ...others } = props;

    if (style) {
        _style = {
            ...style,
            width: "100%",
            height: "fit-content",
            marginBottom: 0,
        }
    }

    return <Form.Item style={_style} {...others}/>
};

export default function SignIn(): JSX.Element {
    const style = useBreakpoints().smallerOrEqualThan("sm") ? styles.sm : styles.default

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}>
            <Form
                autoComplete="on"
                style={style}
            >
                <FormItem name="email"
                    rules={[{required: true, message: 'Vui lòng nhập email của bạn!'}]}
                >
                    <Input prefix={<MailOutlined />} placeholder="account@gmail.com" />
                </FormItem>

                <FormItem name="password"
                    rules={[{required: true, message: 'Vui lòng nhập mật khẩu của bạn!'}]}
                >
                    <Input.Password prefix={<LockOutlined />} />
                </FormItem>

                <FormItem style={{ textAlign: "right" }}>
                    <a href="#">Quên mật khẩu?</a>
                </FormItem>

                <FormItem>
                    <Button type="primary" style={{ width: "100%", fontWeight: 500 }} size="large">
                        Đăng nhập
                    </Button>
                </FormItem>

            </Form>
        </div>
    );
}