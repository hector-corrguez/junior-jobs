import { useState } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import type { Job } from "./types/Job";

const jobs: Job[] = [
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

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredJobs = jobs.filter(function (job) {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
        job.title.toLowerCase().includes(lowerSearchTerm) ||
        job.company.toLowerCase().includes(lowerSearchTerm) ||
        job.location.toLowerCase().includes(lowerSearchTerm)
    );
});
return (
    <main>
        <header>
            <h1>Junior Jobs</h1>
            <p>
                Find junior, graduate and apprenticeship opportunities.
            </p>
        </header>

        <SearchBar
            value={searchTerm}
            onSearchChange={setSearchTerm}
        />

        <JobList jobs={filteredJobs} />
    </main>
);
}

export default App;