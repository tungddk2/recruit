import rawScripts from "./job-data.json";

export enum JobTypeCode {
  IT = 0,
  DOCTOR,
  MANAGER,
  MARKETING,
}

export enum PlaceCode {
  HANOI = 0,
  HCM,
  DANANG,
}

export enum CompanyCode {
  F_SOFT = 0,
  VETTEL,
  VINAPHONE,
  HONGNGOC_HOSPITAL,
}

export type Jobs = {
  id: number;
  datails: string;
  job: JobTypeCode;
  place: PlaceCode;
  company: CompanyCode;
  salary: number;
  avatarUrl?: string;
};
export const rawData: Jobs[] = JSON.parse(JSON.stringify(rawScripts));
