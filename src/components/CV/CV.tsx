import {ReactElement, useState} from "react";
import {Col, Form, Input, Radio, Select, Space} from "antd";
import {CvProfile} from "./CvProfile";
import {CvElementContainer} from "./CvElementContainer";
import {ContainerOutlined, SnippetsOutlined, UserOutlined} from "@ant-design/icons";
import FormItemHorizontal from "./FormItemHorizontal";
import {jobCategories, locations, salaries} from "../Search/SearchJob";
import FormItemVertical from "./FormItemVertical";
import TextArea from "antd/es/input/TextArea";

export default function CV(): ReactElement {
	const [form] = Form.useForm();

	const [edit, setEdit] = useState(false);

	const [name, setName] = useState("Chưa cập nhật");
	const [experience, setExperience] = useState("Chưa cập nhật");
	const [salary, setSalary] = useState("Chưa cập nhật");

	console.log(edit);

	return (
		<div style={{ width: "100%", padding: "20px" }}>
			<Form form={form}>
				<CvProfile name={name} position={"Chưa cập nhật"} experience={experience} salary={salary} updatedDate={new Date()} />

				<CvElementContainer
					title={<Space><ContainerOutlined />Thông tin cá nhân</Space>}
					editable={true}
					setOnEdit={setEdit}
					isEditing={edit}
					style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}
				>
					<Col style={{ maxWidth: "900px", width: "100%" }}>
						<FormItemHorizontal
							name="fullname"
							label={"Họ và tên:"}
							required={true}
						>
							<Input bordered={edit} disabled={!edit} />
						</FormItemHorizontal>
						<FormItemHorizontal required={true} name={"email"} label={"Email:"}>
							<Input bordered={edit} disabled={!edit} />
						</FormItemHorizontal>
						<FormItemHorizontal
							required={true}
							name={"phone-number"}
							label={"Số điện thoại:"}
						>
							<Input bordered={edit} disabled={!edit} />
						</FormItemHorizontal>
						<FormItemHorizontal
							required={true}
							name={"birth_year"}
							label={"Năm sinh:"}
						>
							<Input bordered={edit} disabled={!edit} />
						</FormItemHorizontal>
						<FormItemHorizontal
							name={"gender"}
							required={true}
							label={"Giới tính:"}
							disabled={!edit}
						>
							<Radio.Group
								value={1}
								size={"large"}
								disabled={!edit}
								defaultValue={1}
							>
								<Radio value={1} disabled={!edit}>
									Nam
								</Radio>
								<Radio value={2} disabled={!edit}>
									Nữ
								</Radio>
							</Radio.Group>
						</FormItemHorizontal>
						<FormItemHorizontal
							name={"address_id"}
							label={"Tình trạng hôn nhân:"}
							required={true}
						>
							<Select
								bordered={edit}
								style={{ minWidth: 200 }}
								options={[{ label: "Độc thân", value: "Độc thân" }, { label: "Đã kết hôn", value: "Đã kết hôn" }, { label: "Ly hôn", value: "Ly hôn" }]}
								disabled={!edit}
							/>
						</FormItemHorizontal>
						<FormItemHorizontal
							name={"address_id"}
							label={"Địa chỉ nơi sống:"}
							required={true}
						>
							<Select
								bordered={edit}
								style={{ minWidth: 200 }}
								options={locations.map((location) => ({ label: location, value: location }))}
								disabled={!edit}
							/>
						</FormItemHorizontal>

						<FormItemVertical
							label="Mô tả về bản thân"
							name="description"
							required={true}
						>
							<TextArea
								autoSize={{
									minRows: 4,
									maxRows: 6,
								}}
								name="description"
								allowClear={true}
								style={{ width: "100%" }}
								disabled={!edit}
							/>
						</FormItemVertical>
					</Col>
				</CvElementContainer>

				<CvElementContainer
					title={<Space><SnippetsOutlined /> Thông tin nghề nghiệp </Space>}
					editable={true}
					setOnEdit={setEdit}
					isEditing={edit}
				>
					<Col style={{ maxWidth: "900px", width: "100%" }}>
						{
							<FormItemHorizontal
								label={"Nơi có thể làm việc"}
								name={"workable_places"}
								required={true}
							>
								<Select
									mode="multiple"
									style={{ minWidth: 200 }}
									options={locations.map((location) => ({ label: location, value: location }))}
									disabled={!edit}
								/>
							</FormItemHorizontal>

						}
						<FormItemHorizontal
							label={"Mức lương mong muốn"}
							name={"salary"}
							required={true}
						>
							<Select
								mode="multiple"
								style={{ minWidth: 200 }}
								options={salaries.map((salary) => ({ label: salary, value: salary }))}
								disabled={!edit}
							/>
						</FormItemHorizontal>
						<FormItemVertical
							label="Mong muốn bản thân về công việc"
							name={"desire"}
							required={true}
						>
							<TextArea
								autoSize={{
									minRows: 4,
									maxRows: 6,
								}}
								allowClear={true}
								disabled={!edit}
							/>
						</FormItemVertical>
					</Col>
				</CvElementContainer>
				<CvElementContainer
					title="Kinh nghiệm làm việc"
					editable={true}
					setOnEdit={setEdit}
					isEditing={edit}
				>
					<Col style={{ maxWidth: "900px", width: "100%" }}>
						{
							<FormItemHorizontal
								name={"year_of_experience"}
								label="Số năm kinh nghiệm"
								required={true}
							>
								<Select
									style={{ minWidth: 200 }}
									options={[{ label: "Dưới 1 năm", value: "Dưới 1 năm" }, { label: "1 năm", value: "1 năm" }, { label: "2 năm", value: "2 năm" }, { label: "3 năm", value: "3 năm" }, { label: "4 năm", value: "4 năm" }, { label: "5 năm", value: "5 năm" }, { label: "Trên 5 năm", value: "Trên 5 năm" }]}
									disabled={!edit}
								/>
							</FormItemHorizontal>
						}
						{/*<RowVertical title="Chi tiết kinh nghiệm">
							<ExpAddField exps={user?.exp_detail} form={form} edit={edit} />
						</RowVertical>*/}
					</Col>
				</CvElementContainer>

				<CvElementContainer
					title={"Dự án đã tham gia"}
					editable={true}
					setOnEdit={setEdit}
					isEditing={edit}
				>
					<Col>
						{/*<Project projects={user?.projects} form={form} edit={edit} />*/}
					</Col>
				</CvElementContainer>
				<CvElementContainer
					title={"Kĩ năng chuyên môn"}
					editable={true}
					setOnEdit={setEdit}
					isEditing={edit}
				>
					<Col>
						{/*<Skill mySkills={user?.skills} edit={edit} />*/}
					</Col>
				</CvElementContainer>
			</Form>
		</div>

	)
}