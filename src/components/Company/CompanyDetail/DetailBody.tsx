import {ReactElement} from "react";
import useBreakpoints from "../../../hooks/useBreakpoints";
import {Button, Col, Row, Segmented, Space, Typography} from "antd";
import {SpaceSize} from "antd/es/space";
import JobCard from "../../Jobs/JobCard/JobCard";
import {jobsList} from "../../Jobs/TopJobs";
import CompanyOverview from "../../Overview/CompanyOverview";
import {CompanyCardProps} from "../CompanyCard";

export type CompanyDetailProps = {
	info: CompanyCardProps;
}

export default function DetailBody(props: CompanyDetailProps): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const rootPadding = isDesktop ? "40px 24px" : isTablet ? "20px 32px" : "32px 16px";

	const gapSize = isDesktop ? 40 : isTablet ? 24 : 20;
	const paddingSize = isDesktop ? "0px 24px" : isTablet ? "0 32px" : "0 16px";
	const listGapSize = isDesktop ? 20 : isTablet ? 32 : 48;

	const mainButtonStyle = isDesktop ? {
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
		<Row
			style={{
				width: "100%",
				padding: rootPadding,
				flexDirection: isDesktop ? "row-reverse" : "column",
				justifyContent: "space-between",
			}}
		>
			<Col xs={24} sm={24} md={24} lg={8} style={{ display: "flex", justifyContent: "center" }}>
				<CompanyOverview
					website={props.info.link}
					location={props.info.location}
					employees={20}
					nation={"Việt Nam"}
					categories={["Công nghệ thông tin", "Phần mềm"]}
					detailLocation={"Tầng 3, tòa nhà Hanoi Creative City, số 1 Lương Yên, Hai Bà Trưng, Hà Nội"}
				/>
			</Col>
			<Col xs={24} sm={24} md={24} lg={15}>
				<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: "24px 0", width: "100%", textAlign: isMobile ? "center" : "left" }}>
					Thông tin công ty
				</Typography.Title>

				<Typography.Title level={isDesktop ? 4 : 5} style={{ margin: "24px 0", width: "100%" }}>
					Giới thiệu công ty
				</Typography.Title>

				<Typography.Paragraph style={{ margin: "24px 0", width: "100%" }}>
					<p>Sau 3 năm thành lập, FutureLang là một trong các startup giáo dục công nghệ phát triển nhanh nhất Việt Nam (Định giá công ty hiện đạt &gt 400 tỷ), với trên 400.000 người dùng, Công tý tiếp tục mở rộng quy mô với 2 dự án giáo dục công nghệ mới launching cùng với 4 dự án đang trong giai đoạn phát triển.
					</p>
					<p>Sứ mệnh: Vì 50 triệu người Giao tiếp thành thạo tiếng AnhXây dựng 500 trường học, cây cầu và học máy trính cho trẻ em nghèo tại Việt NamTầm nhìn 2030 : TOP 10 Startup Unicorn Công ty giáo dục công nghệ có sản phẩm vươn tầm Châu Á
					</p>
					<p>Giải thưởng: TOP 10 Thương hiệu tin cậy, sản phẩm chất lượng, dịch vụ tận tâm năm 2020. Top 10 Thương hiệu tiêu biểu Châu Á Thái Bình Dương 2021
					</p>
					<p>Khởi đầu với những cá nhân trẻ đầy nhiệt huyết, trải qua nhiều thăng trầm, Futurelang tự hào khẳng định vị thế của mình với quy mô hơn 100+ nhân sự, và hàng nghìn CTV trên cả nước.
					</p>
					<p>Chúng tôi đang tìm kiếm những bạn trẻ tiềm năng và nhiệt huyết trong lĩnh vực công nghệ. Futuelang cam kết sẽ đem đến cho nhân viên một trải nghiệm tuyệt vời, một môi trường làm việc Nhiệt Tình - Minh Bạch - Tử Tế-Hòa Đồng , nơi để các bạn trẻ thể hiện tài năng và phát triển hơn nữa trong tương lai.
					</p>
					<p>Địa chỉ công tyTrụ sở 1 tại 290 Nguyễn Trãi, Nam Từ Liêm, Hà NộiTrụ sở 2 : Số 10, Liền kề 12, Khu Đô Thị Văn Khê, Hà Đông
					</p>
				</Typography.Paragraph>

				<Typography.Title level={isDesktop ? 4 : 5} style={{ margin: "24px 0", width: "100%" }}>
					Chế độ đãi ngộ
				</Typography.Title>

				<Typography.Paragraph style={{ margin: "24px 0", width: "100%" }}>
					<p>-Tiếp nhận và phát triển nguồn khách hàng tìm năng thông qua các dữ liệu Marketing online </p>
					<p>-Trả lời và giải đáp các thắc mắc của khách hàng về thông tin sản phẩm </p>
					<p>-Giao tiếp và chủ động đặt câu hỏi để tìm hiểu nhu cầu của khách hàng </p>
					<p>-Tư vấn những khoá học phù hợp với nhu cầu của khách hàng. </p>
					<p>-Ghi chú những thông tin về tất cả các cuộc gọi để sử dụng trong tương lai </p>
					<p>-Duy trì giọng điệu thân thiện, chuyên nghiệp mọi lúc </p>
					<p>-Xử lý đơn hàng nhanh chóng và chính xác</p>
					<p>-Đàm phán và giải quyết nhu cầu của khách hàng tiềm năng và chốt đơn hàng</p>
				</Typography.Paragraph>
			</Col>

			<Col span={24}>
				<Typography.Title level={isDesktop ? 3 : 4} style={{ margin: "24px 0", width: "100%", textAlign: isMobile ? "center" : "left" }}>
					Thông tin công ty
				</Typography.Title>

				<Space
					direction="vertical"
					style={{
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "fit-content",
						padding: paddingSize,
					}}
					size={gapSize as SpaceSize}
				>
					<Space
						direction="vertical"
						style={{
							width: "100%",
							justifyContent: "center",
							padding: isDesktop ? "0 120px" : "0 0",
						}}
						size={listGapSize as SpaceSize}
					>
						{
							jobsList.map((job, index) => {
								return (
									<div style={{ width: "100%", display: "flex", justifyContent: "center" }} key={index}>
										<JobCard role="user" info={job}/>
									</div>
								);
							})
						}
					</Space>

					<Button
						type="primary"
						style={mainButtonStyle}
					>Xem tất cả</Button>
				</Space>
			</Col>
		</Row>
	);
}