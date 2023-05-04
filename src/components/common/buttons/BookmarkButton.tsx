import {ReactElement, useState} from "react";
import {Button} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import useBreakpoints from "../../../hooks/useBreakpoints";

type BookmarkState = {
	isBookmarked: boolean;
}

export default function BookmarkButton(props: BookmarkState & any): ReactElement {
	const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked);
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();

	return (
		!isBookmarked ? (
				<Button
					className="bookmark"
					icon={<HeartOutlined/>}
					onClick={(e) => {
						setIsBookmarked(true)
						e.stopPropagation();
					}}
					{...props}
				>
					{isDesktop ? "Lưu việc làm" : "Lưu"}
				</Button>
			) :
			<Button
				className="bookmark"
				type="primary"
				icon={<HeartOutlined/>}
				onClick={(e) => {
					setIsBookmarked(false)
					e.stopPropagation();
				}}
				{...props}
			>
				Đã lưu
			</Button>
	);
}