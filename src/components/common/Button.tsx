import {Button as AntdButton, ConfigProvider} from "antd";

const theme = {
    token: {
        colorPrimary: '#005773',
        colorPrimaryHover: '#004055',
        active: {
            color: 'rgba(255, 255, 255, 0.75)',
        }
    }
}

const Button = (props: any) => {
    return <ConfigProvider theme={theme}>
        <AntdButton {...props} />
    </ConfigProvider>
}

export default Button;