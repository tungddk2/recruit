import {ReactElement} from "react";
import PageContainer from "../PageContainer";
import {Button, Col, DatePicker, Input, InputNumber, Radio, Row, Select, Typography} from "antd";
import useBreakpoints from "../../../hooks/useBreakpoints";
import FormItemVertical from "../../../components/CV/FormItemVertical";
import FormItemHorizontal from "../../../components/CV/FormItemHorizontal";
import {locations} from "../../../components/Search/SearchJob";
import TextArea from "antd/es/input/TextArea";

export default function RecruitForm(): ReactElement {
	const checker = useBreakpoints();
	const isDesktop = checker.isDesktop();
	const isTablet = checker.isTablet();
	const isMobile = checker.isMobile();

	return (
		<PageContainer>
			<Typography.Title level={isDesktop ? 2 : isTablet ? 3 : 4}
				style={{
					paddingTop: isDesktop ? "40px" : isTablet ? "24px" : "16px",
					paddingLeft: isDesktop ? "32px" : isTablet ? "16px" : "8px",
					width: "100%",
					textAlign: isMobile ? "center" : "left",
					color: "#005773"
				}}
			>
				Thông tin đăng tuyển
			</Typography.Title>

			<Row style={{
				width: "100%",
				marginBottom: "16px",
				padding: isDesktop ? "32px" : isTablet ? "24px" : "16px",
				justifyContent: "center",
			}}>
				<Col
					span={24}
					style={{
						maxWidth: "900px",
					}}
				>
					<Col span={isMobile ? 24 : 12}>
						<FormItemVertical label="Vị trí tuyển dụng:" name={"title"} required={true}>
							<Input />
						</FormItemVertical>
					</Col>

					<Col span={isMobile ? 24 : 12}>
						<FormItemVertical
							label="Trạng thái"
							name={"recruit_status"}
							required={true}
						>
							<Select
								style={{
									width: "100%",
									backgroundColor: "transparent!important",
								}}
								options={[{ label: "Đang tuyển", value: "Đang tuyển" }, { label: "Đã tuyển", value: "Đã tuyển" }]}
							/>
						</FormItemVertical>
					</Col>

					<Col span={isMobile ? 24 : 12}>
						<FormItemVertical
							label="Số năm kinh nghiệm yêu cầu:"
							name={"year_of_experience"}
							required={true}
						>
							<Select
								style={{
									width: "100%",
									backgroundColor: "transparent!important",
								}}
								options={[{ label: "Dưới 1 năm", value: "Dưới 1 năm" }, { label: "1 năm", value: "1 năm" }, { label: "2 năm", value: "2 năm" }, { label: "3 năm", value: "3 năm" }, { label: "4 năm", value: "4 năm" }, { label: "5 năm", value: "5 năm" }, { label: "Trên 5 năm", value: "Trên 5 năm" }]}
							/>
						</FormItemVertical>
					</Col>

					<Col span={isMobile ? 24 : 12}>
						<FormItemVertical
							label="Mức lương:"
							name={"salary"}
							required={true}
						>
							<Row
								className="custom"
								style={{ justifyContent: "space-between", width: "100%" }}
							>
								<Col span={12}>
									<FormItemHorizontal
										label={"Tối thiểu"}
										wrapCol={16}
										name={"salary_min"}
										required={true}
									>
										<Select
											options={[
												{ label: "1 triệu", value: "1000000" },
												{ label: "2 triệu", value: "2000000" },
												{ label: "3 triệu", value: "3000000" },
												{ label: "4 triệu", value: "4000000" },
											]}
										/>
									</FormItemHorizontal>
								</Col>
								<Col span={11}>
									<FormItemHorizontal
										label={"Tối đa"}
										wrapCol={16}
										name={"salary_max"}
										required={true}
									>
										<Select
											options={[
												{ label: "1 triệu", value: "1000000" },
												{ label: "2 triệu", value: "2000000" },
												{ label: "3 triệu", value: "3000000" },
												{ label: "4 triệu", value: "4000000" },
											]}
										/>
									</FormItemHorizontal>
								</Col>
							</Row>
						</FormItemVertical>
					</Col>

					<Col span={isMobile ? 24 : 12}>
						<FormItemVertical
							label="Thời gian làm việc:"
							name={"start"}
							required={true}
							disabled={true}
						>
							<DatePicker.RangePicker style={{ width: "100%" }} />
						</FormItemVertical>
					</Col>

					<Col span={24}>
						<FormItemVertical
							label="Địa điểm:"
							name={"address"}
							required={true}
						>
							<Select options={locations.map((location) => ({ label: location, value: location }))} />
						</FormItemVertical>
					</Col>

					<Col span={24}>
						<FormItemVertical
							label="Địa chỉ chi tiết:"
							name={"detail_address"}
							required={true}
						>
							<TextArea
								style={{ width: "100%" }}
								allowClear={true}
							/>
						</FormItemVertical>
					</Col>

					<Col span={24}>
						<FormItemVertical
							label="Hình thức làm việc:"
							name={"types"}
							required={true}
						>
							<Radio.Group style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: isMobile ? "column" : "row" }}
								value={1}
							>
								<Radio value={1}>Nhân viên chính thức</Radio>
								<Radio value={2}>Nhân viên bán thời gian</Radio>
								<Radio value={3}>Thực tập sinh</Radio>
								<Radio value={4}>Freelancer</Radio>
							</Radio.Group>
						</FormItemVertical>
					</Col>

					<Col span={24} className="text-area">
						<FormItemVertical label="Mô tả công việc:" name={"job-detail"} required={true}>
							<TextArea
								style={{ width: "100%" }}
								autoSize={{ minRows: 4, maxRows: 6 }}
								allowClear={true}
							/>
						</FormItemVertical>
					</Col>

					<Col span={24} className="text-area">
						<FormItemVertical
							label="Phương thức tuyển chọn:"
							name={"selection-method"}
							required={true}
						>
							<TextArea
								style={{ width: "100%" }}
								autoSize={{ minRows: 2, maxRows: 6 }}
								allowClear={true}
							/>
						</FormItemVertical>
					</Col>

					<Row style={{ width: "100%", gap: 40, justifyContent: "space-around" }}>
						<Col span={6}>
							<Button
								type={"primary"}
								size="large"
								style={{
									width: "100%",
									height: isDesktop ? "50px" : isTablet ? "40px" : "fit-content",
								}}
							>
								{"Đăng tin"}
							</Button>
						</Col>
						<Col span={6}>
							<Button
								size="large"
								style={{
									width: "100%",
									height: isDesktop ? "50px" : isTablet ? "40px" : "fit-content",
								}}
							>
								Hủy
							</Button>
						</Col>
					</Row>
				</Col>
			</Row>
		</PageContainer>
	)
}