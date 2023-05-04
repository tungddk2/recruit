import useBreakpoints from "../../../hooks/useBreakpoints";
import DetailHeader from "./DetailHeader";
import {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router";
import {Spin} from "antd";
import DetailBody from "./DetailBody";
import {companyList} from "../SearchResult";

export default function JobDetail(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const params = useParams();
	const [loading, setLoading] = useState(true);
	const { id } = params;

	const companyInfo = companyList.find((job, index) => id ? job.id === +id : false);

	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Spin spinning={loading} tip="Đang tải">
			<div style={{ width: "100%", }}>
				{
					companyInfo ? (
						<>
							<DetailHeader info={companyInfo}/>
							<DetailBody info={companyInfo}/>
						</>
					) : (
						<div></div>
					)
				}
			</div>
		</Spin>
	);
}