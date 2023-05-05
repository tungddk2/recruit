import React from "react";
import {Button, Row} from "antd";
import {CvElementContainer} from "./CvElementContainer";
import CustomTable from "../common/CustomTable";
import {ColumnsType} from "antd/es/table";

const JobBookmark = () => {
	return (
		<div style={{ width: "100%", padding: "20px" }}>
			<CvElementContainer title={"Việc làm đã lưu"} editable={false}>
				<Row style={{ borderTop: "2px solid black", paddingTop: 30, width: "100%" }}>
					<CustomTable
						columns={columns}
						dataSource={data}
					/>
				</Row>
			</CvElementContainer>
		</div>
	);
};

export default JobBookmark;

interface DataType {
	key: string;
	company: string;
	job: string;
	location: string;
}

const data: DataType[] = [
	{
		key: "1",
		company: "Tập đoàn FPT",
		job: "Frontend Developer",
		location: "Hà Nội",
	},
	{
		key: "2",
		company: "Công ty cổ phần công nghệ Viettel",
		job: "Backend Developer",
		location: "Hà Nội",
	},
	{
		key: "3",
		company: "Công ty cổ phần công nghệ Viettel",
		job: "Backend Developer",
		location: "Hà Nội",
	}
];

const columns: ColumnsType<DataType> = [
	{
		title: "Tên công ty",
		dataIndex: "company",
		key: "company",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Tên công việc",
		dataIndex: "job",
		key: "job",
	},
	{
		title: "Địa điểm",
		dataIndex: "location",
		key: "location",
	},
	{
		title: "Thao tác",
		key: "action",
		align: "center",
		render: (text, record) => (
			<Button type="link" style={{ color: "red" }}>Xoá</Button>
		),
	}
]
