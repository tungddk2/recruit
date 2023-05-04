import {ReactElement, useState} from "react";
import {Button} from "antd";

type ApplyState = {
	applied: boolean;
}

export default function ApplyButton(props: ApplyState & any): ReactElement {
	const [isApply, setIsApply] = useState(props.applied);

	return (
		!isApply ? (
				<Button
					type={"primary"}
					onClick={(e) => {
						setIsApply(true)
						e.stopPropagation();
					}}
					{...props}
				>
					Ứng tuyển
				</Button>
			) :
			<Button
				onClick={(e) => {
					setIsApply(false)
					e.stopPropagation();
				}}
				{...props}
			>
				Đã ứng tuyển ✓
			</Button>
	);
}