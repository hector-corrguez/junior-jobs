import type { Job } from "../types/Job";

type JobCardProps = {
    job: Job;
};

function JobCard({ job }: JobCardProps) {
    return (
        <article>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>

            <button>
                View Job
            </button>
        </article>
    );
}

export default JobCard;