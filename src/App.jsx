import React, { useState, useEffect } from "react";
import JobHeader from "./components/JobHeader";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  const [jobs, setJobs] = useState([]); // Database se aane waala sara data
  const [filteredJobs, setFilteredJobs] = useState([]); // Filter hone ke baad dikhne waala data
  const [selectedJob, setSelectedJob] = useState(null);

  // Step 1: Backend (naukri DB) se data
  useEffect(() => {
    fetch("http://127.0.0.1:5000/jobs")
      .then((res) => res.json())
      .then((data) => {

        setJobs(data);
        setFilteredJobs(data); // Shuruat mein sab dikhao
        setSelectedJob(data[0]); // Pehli job detail mein dikhao
      })
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  // Step 2: Search Functionality ka logic
  const handleSearch = (title, location) => {
    const results = jobs.filter((job) => {
      return (
        job.role.toLowerCase().includes(title.toLowerCase()) &&
        job.loc.toLowerCase().includes(location.toLowerCase())
      );
    });
    setFilteredJobs(results);
    setSelectedJob(results[0] || null); // Result ke hisaab se detail update karo
  };

  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      <JobHeader onSearch={handleSearch} />
      
      <div className="container-fluid px-4 mt-2 flex-grow-1">
        <div className="row g-2">
          <div className="col-md-4">
            <JobList 
              jobs={filteredJobs} 
              onJobSelect={setSelectedJob} 
              activeId={selectedJob?._id} 
            />
          </div>
          <div className="col-md-8">
            <JobDetail job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;