import {ReactElement} from "react";
import SearchJob from "../../components/Search/SearchJob/SearchJob";
import {JobField} from "../../components/Jobs/JobFieldCard";
import {Col, Row, Space, Typography} from "antd";
import JobFieldCard from "../../components/Jobs/JobFieldCard/JobFieldCard";
import useBreakpoints from "../../hooks/useBreakpoints";

export function AllJobFields(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const rootPadding = isDesktop ? "0 24px" : isTablet ? "0 32px" : "0 16px";
	const rootMargin = isDesktop ? "40px 0" : isTablet ? "24px 0" : "16px 0";
	const titleLevel = isDesktop ? 1 : isTablet ? 3 : 4;

	return (
		<>
			<SearchJob/>
			<div style={{ width: "100%", padding: rootPadding, margin: rootMargin }}>
				<Typography.Title level={titleLevel} style={{ width: "100%", marginBottom: isDesktop ? "40px" : isTablet ? "24px" : "16px" }} >
					Tìm việc làm theo lĩnh vực
				</Typography.Title>

				<Row style={{ width: "100%", justifyContent: "normal" }} gutter={[16, 16]}>
					{ jobFields.map((jobField, index) => (
							<Col
								key={index}
								xs={12}
								sm={12}
								md={12}
								lg={6}
								style={{ display: "flex", justifyContent: "center" }}
							>
								<JobFieldCard {...jobField} />
							</Col>
						))
					}
				</Row>
			</div>
		</>
	);
};

const jobFields: JobField[] = [
	{
		field: "Bán hàng / tiếp thị",
		categories: [
			{ name: "Tiếp thị / Marketing", count: 3161 },
			{ name: "Tiếp thị / Trực tiếp", count: 607 },
			{ name: "Bán lẻ / Bán sỉ", count: 2232 },
			{ name: "Bán hàng / Kinh doanh", count: 6356 },
		],
	},
	{
		field: "Dịch vụ",
		categories: [
			{ name: "Tư vấn", count: 1268 },
			{ name: "An ninh bảo vệ", count: 65 },
			{ name: "Luật / Pháp lý", count: 573 },
			{ name: "Dịch vụ khách hàng", count: 2150 },
			{ name: "Lao động phổ thông", count: 127 },
			{ name: "Bưu chính viễn thông", count: 154 },
			{ name: "Vận chuyển / Giao vận / Kho vận", count: 671 },
			{ name: "Phi chính phủ / Phi lợi nhuận", count: 8 },
		],
	},
	{
		field: "Chăm sóc sức khoẻ",
		categories: [
			{ name: "Y tế / Chăm sóc sức khoẻ", count: 706 },
			{ name: "Dược phẩm", count: 563 },
		],
	},
	{
		field: "Sản xuất",
		categories: [
			{ name: "Dệt may / Giày da / Thời trang", count: 609 },
			{ name: "Quản lý chất lượng (QA / QC)", count: 568 },
			{ name: "Thu mua vật tư", count: 386 },
			{ name: "An toàn lao động", count: 101 },
			{ name: "Sản xuất vận hành sản xuất", count: 1136 },
			{ name: "Xuất / nhập khẩu", count: 701 },
			{ name: "Đồ gỗ", count: 99 },
			{ name: "Xuất bản", count: 110 },
		],
	},
	{
		field: "Tiêu dùng",
		categories: [
			{ name: "Hàng gia dụng", count: 184 },
			{ name: "Thực phẩm / Đồ uống", count: 812 },
		],
	},
	{
		field: "Máy tính / CNTT",
		categories: [
			{ name: "CNTT - Phần mềm", count: 1512 },
			{ name: "CNTT - Phần cứng", count: 813 },
		],
	},
	{
		field: "Hành chính nhân sự",
		categories: [
			{ name: "Ngân hàng", count: 3337 },
			{ name: "Tiếp thị / Trực tiếp", count: 246 },
			{ name: "Bảo hiểm", count: 886 },
			{ name: "Tài chính / Đầu tư", count: 2861 },
			{ name: "Kế toán / Kiểm toán", count: 2361 },
		],
	},
	{
		field: "Truyền thông / Media",
		categories: [
			{ name: "Tổ chức sự kiện", count: 190 },
			{ name: "Truyền hình / Báo chí / Biên tập", count: 414 },
			{ name: "Mỹ thuật / Nghệ thuật / Thiết kế", count: 693 },
			{ name: "Quảng cáo / Đối ngoại / Truyền thông", count: 927 },
			{ name: "Giải trí", count: 71 },
		],
	},
	{
		field: "Xây dựng",
		categories: [
			{ name: "Bất động sản", count: 846 },
			{ name: "Nội ngoại thất", count: 368 },
			{ name: "Kiến trúc", count: 475 },
			{ name: "Xây dựng", count: 936 },
		],
	},
	{
		field: "Giáo dục / Đào tạo",
		categories: [
			{ name: "Giáo dục / Đào tạo", count: 1368 },
			{ name: "Thư viện", count: 25 },
		],
	},
	{
		field: "Kỹ thuật",
		categories: [
			{ name: "Cơ khí / Ô tô / Tự động hoá", count: 1151 },
			{ name: "Môi trường", count: 163 },
			{ name: "Điện / Điện tử / Điện lạnh", count: 1119 },
			{ name: "Hoá học", count: 230 },
			{ name: "Khoáng sản", count: 15 },
			{ name: "Dầu khí", count: 29 },
			{ name: "Bảo trì / Sửa chữa", count: 611 },
		],
	},
	{
		field: "Khoa học",
		categories: [
			{ name: "Lâm nghiệp", count: 28 },
			{ name: "Thuỷ sản / Hải sản", count: 23 },
			{ name: "Công nghệ thực phẩm / Dinh dưỡng", count: 166 },
			{ name: "Thống kê", count: 154 },
			{ name: "Nông nghiệp", count: 161 },
			{ name: "Hàng hải", count: 39 },
			{ name: "Công nghệ sinh học", count: 127 },
			{ name: "Trắc / Địa chất", count: 21 },
			{ name: "Thuỷ lợi", count: 24 },
			{ name: "Chăn nuôi thú y", count: 101 },
		],
	},
	{
		field: "Khách sạn / Du lịch",
		categories: [
			{ name: "Du lịch", count: 313 },
			{ name: "Nhà hàng / Khách sạn", count: 534 },
			{ name: "Hàng không", count: 46 },
		],
	},
	{
		field: "Nhóm ngành khác",
		categories: [
			{ name: "Ngành khác", count: 426 },
		],
	},
];