type SearchBarProps = {
    value: string;
    onSearchChange: (value: string) => void;
};

function SearchBar({
    value,
    onSearchChange
}: SearchBarProps) {
    return (
        <div>
            <label htmlFor="job-search">
                Search jobs
            </label>

            <input
                id="job-search"
                type="text"
                value={value}
                placeholder="Search by title, company or location"
                onChange={function (event) {
                    onSearchChange(event.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;