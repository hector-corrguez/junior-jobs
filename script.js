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

jobs.forEach(function (job) {
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