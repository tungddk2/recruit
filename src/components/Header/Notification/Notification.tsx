import {ReactElement} from "react";
import {Button, Card, Space, Tooltip} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import "./Notification.css";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {PositionType} from "antd/es/image/style";

export default function Notification({ show = false }): ReactElement {
	const isMobile = useBreakpoints().isMobile();

	const style = isMobile ? {
		width: "100%",
		right: 0,
		left: 0,
	} : {
		maxWidth: "400px",
		width: "400px",
		right: "24px",
	}

	return (
		show ?
		<Space direction={"vertical"}
			style={{
				borderRadius: "8px",
				boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				top: "70px",
				height: "500px",
				position: "absolute",
				overflow: "auto",
				border: "1px solid #005773",
				backgroundColor: "#fff",
				padding: "16px", ...style
			}}
			size={16}
		>
			{
				notificationList.map((notification, index) => {
					const simplifiedDate = notification.date.toLocaleDateString("vi-VN", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
					});

					// create a title for the card which is the date of the notification in this format: "Thông báo lúc 10:00 ngày 20 tháng 10 năm 2021"
					const title = `Thông báo ${simplifiedDate}`;

					return (
						<Card
							style={{
								border: "none",
							}}
							title={<Tooltip title={title}>{title}</Tooltip>}
							extra={
								<Tooltip title="Đánh dấu đã đọc">
									<CloseOutlined onClick={() => {
										notificationList.splice(index, 1);
									} } />
								</Tooltip>
							}
							key={notification.key}
						>
							{`Nội dung: ${notification.content}`}
						</Card>
					);
				})
			}
		</Space>
			: (<></>)
	);
}

const notificationList = [
	{
		key: 1,
		date: new Date(),
		content: "Đơn xin việc vào công ty ABC của bạn đã được duyệt",
	},
	{
		key: 2,
		date: new Date(),
		content: "Đơn xin việc vào công ty ABC của bạn đã bị từ chối",
	},
	{
		key: 3,
		date: new Date(),
		content: "Đơn xin việc vào công ty ABC của bạn đã được duyệt",
	},
	{
		key: 4,
		date: new Date(),
		content: "Đơn xin việc vào công ty ABC của bạn đã bị từ chối",
	}
];