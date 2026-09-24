import "./App.css";
import { useState } from "react";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";
import { jobs } from "./data/jobs";

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