import {Pagination, Table} from "antd";
import {ReactElement} from "react";

export type CustomTableProps = {
	dataSource: any[];
	columns: any[];
	paginationProps?: any;
	rowSelection?: any;
}

export default function CustomTable(props: CustomTableProps): ReactElement {
	const { dataSource, columns, paginationProps, rowSelection } = props;
	return (
		<div style={{ width: "100%", overflowX: "auto", borderColor: "#005773",  }}>
			<Table
				className="custom-table"
				bordered
				dataSource={[...dataSource]}
				style={{ width: "100%", overflowX: "auto", borderColor: "#005773", border: "1px solid #005773"  }}
				columns={columns}
				pagination={{
					position: ["bottomCenter"],
				}}
				rowSelection={rowSelection}
			/>
		</div>
	);
}
