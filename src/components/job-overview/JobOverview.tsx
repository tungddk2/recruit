import { CompanyCode, JobTypeCode, PlaceCode, rawData } from "../../data";
import styles from "./JobOverview.module.css";
import { useMatch } from "react-router-dom";
export default function SearchJob(): JSX.Element {
  const match = useMatch("/job-overview/:id");
  console.log(match?.params.id);
  const job = match
    ? rawData.find((job) => job.id === Number(match.params.id))
    : undefined;
  console.log(job);
  if (job === undefined) {
    return <>404</>;
  }
  return (
    <div className={styles["background"]}>
      <div className={styles["companypicture"]}>
        {job.avatarUrl !== undefined ? (
          <div>
            <img src={job.avatarUrl} />
          </div>
        ) : (
          <>No avatar url</>
        )}
      </div>
      <div className={styles["vacancy"]}>
        {Object.values(JobTypeCode)[job.job]}
      </div>
      <div className={styles["companyname"]}>
        {Object.values(CompanyCode)[job.company]}
      </div>
      <div className={styles["place-icon"]}>icon</div>
      <div className={styles["place"]}>
        {Object.values(PlaceCode)[job.place]}
      </div>
      <div className={styles["salary-icon"]}>icon</div>
      <div className={styles["salary"]}>{job.salary}</div>
      <div className={styles["posted-date"]}>Ngày đăng: dd/mm/yy</div>
      <button className={styles["apply-button"]}>Apply</button>
      <button className={styles["save-job-button"]}>Save job</button>
    </div>
  );
}
