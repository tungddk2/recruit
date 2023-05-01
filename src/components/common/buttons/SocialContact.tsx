import {Button, Space} from "antd";
import "./button.css";
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";
import {BreakpointChecker} from "../../../hooks/useBreakpoints";
import {SizeType} from "antd/es/config-provider/SizeContext";

type SocialContactProps = {
	checker: BreakpointChecker;
}

export default function SocialContact(props: SocialContactProps) {
	const isMobile = props.checker.smallerThan("sm");

	return (
		<Space>
			<Button size={isMobile ? "small" : "medium" as SizeType} shape="circle" icon={<InstagramOutlined/>} />
			<Button size={isMobile ? "small" : "medium" as SizeType} shape="circle" icon={<LinkedinOutlined/>} />
			<Button size={isMobile ? "small" : "medium" as SizeType} shape="circle" icon={<FacebookOutlined/>} />
			<Button size={isMobile ? "small" : "medium" as SizeType} shape="circle" icon={<TwitterOutlined/>} />
		</Space>
	);
}