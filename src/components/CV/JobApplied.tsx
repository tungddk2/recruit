import React from "react";
import {Button, Row} from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {CvElementContainer} from "./CvElementContainer";
import CustomTable from "../common/CustomTable";
import {ColumnsType} from "antd/es/table";
import {CloseCircleOutlined} from "@ant-design/icons";

const JobApplied = () => {

	return (
		<div style={{ width: "100%", padding: "20px" }}>
			<CvElementContainer title={"Việc làm đã ứng tuyển"} editable={false}>
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

export default JobApplied;

interface DataType {
	key: string;
	company: string;
	job: string;
	status: string;
}

const data: DataType[] = [
	{
		key: "1",
		company: "Tập đoàn FPT",
		job: "Frontend Developer",
		status: "Đã ứng tuyển",
	},
	{
		key: "2",
		company: "Công ty cổ phần công nghệ Viettel",
		job: "Backend Developer",
		status: "Đã ứng tuyển",
	},
	{
		key: "3",
		company: "Công ty cổ phần công nghệ Viettel",
		job: "Backend Developer",
		status: "Đã bị từ chối",
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
		title: "Trạng thái",
		dataIndex: "status",
		key: "status",
	},
]
