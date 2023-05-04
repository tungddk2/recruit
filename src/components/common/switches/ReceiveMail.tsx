import {ReactElement} from "react";
import {Switch} from "antd";

export default function ReceiveMail(props: any): ReactElement {
	return (
		<Switch checkedChildren={"Nhận"} unCheckedChildren={"Không nhận"} {...props}/>
	)
}