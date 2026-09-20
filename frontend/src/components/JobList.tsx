import type { Job } from "../types/Job";
import JobCard from "./JobCard";

type JobListProps = {
    jobs: Job[];
};

function JobList({ jobs }: JobListProps) {
    if (jobs.length === 0) {
    return (
        <section>
            <h2>Available Jobs</h2>
            <p>No jobs found.</p>
        </section>
    );
}
    return (
        <section>
            <h2>Available Jobs</h2>

            {jobs.map(function (job) {
                return (
                    <JobCard
                        key={job.id}
                        job={job}
                    />
                );
            })}
        </section>
    );
}

export default JobList;