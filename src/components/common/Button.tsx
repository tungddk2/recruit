import { Button as AntdButton, ConfigProvider } from "antd";

const theme = {
  components: {
    Button: {
      colorBgContainer: "#E6F5FA",
    },
  },
};

const Button = (props: any) => {
  return (
    <ConfigProvider theme={theme}>
      <AntdButton {...props} />
    </ConfigProvider>
  );
};

export default Button;
