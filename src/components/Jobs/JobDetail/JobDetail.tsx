import useBreakpoints from "../../../hooks/useBreakpoints";
import DetailHeader from "./DetailHeader";
import {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router";
import {jobsList} from "../TopJobs";
import {Spin} from "antd";
import DetailBody from "./DetailBody";
import {CandidateProps} from "../JobCard";

export default function JobDetail(): ReactElement {
	const checker = useBreakpoints();
	const isMobile = checker.isMobile();
	const isTablet = checker.isTablet();
	const isDesktop = checker.isDesktop();

	const params = useParams();
	const [loading, setLoading] = useState(true);
	const { id } = params;

	const jobInfo = jobsList.find((job, index) => id ? job.id === +id : false);

	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Spin spinning={loading} tip="Đang tải">
			<div style={{ width: "100%", }}>
				{
					jobInfo ? (
						<>
							<DetailHeader info={jobInfo}/>
							<DetailBody info={jobInfo}/>
						</>
					) : (
						<div></div>
					)
				}
			</div>
		</Spin>
	);
}