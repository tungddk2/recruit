import {ReactElement} from "react";
import {Role} from "../../../constants/roles";
import CandidateCard from "./CandidateCard";

export type JobType = "full-time" | "part-time" | "internship" | "freelance";

export type CandidateProps = {
	id: string | number;
	type: JobType;
	title: string;
	company: string;
	location: string;
	salary: [string | number, string | number];
	requiredExperience: string | [number, number];
	postedDate: Date;
	isBookmarked: boolean;
	image: string;
}

export type HrProps = {
	id: string | number;
	type: JobType;
	title: string;
	location: string;
	salary: [string | number, string | number];
	status: string;
	candidates: number;
	image: string;
}

export type JobProps = {
	role: Role;
	info: CandidateProps | HrProps;
};

export default function JobCard(props: JobProps): ReactElement {
	return (
		props.role === "user" ? <CandidateCard {...props.info as CandidateProps} /> : <div> </div>
	);
}