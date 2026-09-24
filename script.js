const jobs = [
    {
        id: 1,
        title: "Junior Software Developer",
        company: "Example Company",
        location: "London"
    },
    {
        id: 2,
        title: "Graduate Java Developer",
        company: "Tech Starter Ltd",
        location: "Manchester"
    },
    {
        id: 3,
        title: "Software Engineering Apprentice",
        company: "Future Systems",
        location: "Birmingham"
    }
];

const jobList = document.querySelector("#job-list");
const searchInput = document.querySelector("#job-search");

function renderJobs(jobsToRender) {
    jobList.innerHTML = "";

    if (jobsToRender.length === 0) {
    jobList.innerHTML = "<p>No jobs found.</p>";
    return;
}

    jobsToRender.forEach(function (job) {
        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <button data-job-id="${job.id}">View Job</button>
        `;

        jobList.appendChild(article);

        const button = article.querySelector("button");

        button.addEventListener("click", function () {
            alert(`You selected job ${job.id}: ${job.title}`);
        });
    });
}

renderJobs(jobs);

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredJobs = jobs.filter(function (job) {
        return (
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm)
        );
    });

    renderJobs(filteredJobs);
});