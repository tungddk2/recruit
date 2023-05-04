import {ReactElement} from "react";
import {Button, Col, Row, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import FutureJobIcon, {FutureJobIconProps} from "./FutureJobIcon";
import {
	BankOutlined,
	CarOutlined,
	DollarOutlined, ExperimentOutlined,
	FileTextOutlined, LaptopOutlined,
	LineChartOutlined,
	NotificationOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router";

export default function FutureJobsList(): ReactElement {
	const navigate = useNavigate();
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const gapSize = isDesktop ? "56px" : isTablet ? "25px" : "16px";
	const paddingSize = isDesktop ? "50px 120px" : isTablet ? "16px 32px" : "16px";
	const listGapSize = isDesktop ? "80px" : isTablet ? "40px" : "16px";
	const buttonStyle = isDesktop ? {
		width: "200px",
		height: "60px",
		fontWeight: "500",
		fontSize: "20px",
	} : isTablet ? {
		width: "150px",
		height: "45px",
		fontWeight: "500",
		fontSize: "16px",
	} : {
		width: "110px",
		height: "36px",
		fontWeight: "500",
		fontSize: "14px",
	}

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "fit-content",
			gap: gapSize,
			padding: paddingSize,
		}}>
			<div style={{ width: "100%", height: "fit-content" }}>
				<Typography.Title level={1} style={{ textAlign: "center" }} >Nghề nghiệp nổi bật</Typography.Title>
			</div>
			<Row style={{
				//gap: listGapSize,
				rowGap: listGapSize,
			}}>
				{
					jobsList.map((job, index) => (
						<Col xs={8} sm={6} md={6} style={{ display: "flex", justifyContent: "center" }} key={index}>
							<FutureJobIcon {...job} />
						</Col>
					))
				}
			</Row>
			<div style={{ width: "100%", height: "fit-content", display: "flex", justifyContent: "center" }}>
				<Button
					type="primary" size="large"
					style={buttonStyle}
					onClick={() => navigate("/job/all")}
				>Xem tất cả</Button>
			</div>
		</div>
	);
}

export const jobsList: FutureJobIconProps[] = [
	{
		icon: <DollarOutlined/>,
		title: "Kinh doanh / Bán hàng",
		numJob: "6188"
	},
	{
		icon: <BankOutlined/>,
		title: "Ngân hàng",
		numJob: "3178",
	},
	{
		icon: <NotificationOutlined/>,
		title: "Tiếp thị / Marketing",
		numJob: "3138",
	},
	{
		icon: <CarOutlined/>,
		title: "Cơ khí / Ô tô / Tự động hóa",
		numJob: "2950",
	},
	{
		icon: <LineChartOutlined/>,
		title: "Tài chính / Đầu tư",
		numJob: "2756",
	},
	{
		icon: <FileTextOutlined/>,
		title: "Kế toán / Kiểm toán",
		numJob: "2296",
	},
	{
		icon: <LaptopOutlined/>,
		title: "CNTT - Phần mềm",
		numJob: "1464",
	},
	{
		icon: <ExperimentOutlined/>,
		title: "Giáo dục / Đào tạo",
		numJob: "1278",
	}
]
