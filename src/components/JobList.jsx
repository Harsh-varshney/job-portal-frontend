import React from 'react';
import "../styles/JobList.css";

const JobList = ({ jobs, onJobSelect, activeId }) => {
  return (
    <div className="job-list-container">
      {jobs && jobs.map((job) => (
        <div 
          key={job._id} 
          className={`job-card ${activeId === job._id ? 'job-card-active' : ''}`}
          onClick={() => onJobSelect(job)}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3">
              <div className="company-logo-placeholder">
                {job.company ? job.company.charAt(0) : 'J'}
              </div>
              
              <div>
                <h6 className="mb-0 fw-bold">{job.role}</h6>
                <p className="text-muted small mb-2">{job.company}</p>
                <div className="d-flex gap-3 text-muted" style={{ fontSize: '12px' }}>
                  <span><i className="fa-solid fa-briefcase me-1"></i> 2-4 yrs</span>
                  <span><i className="fa-solid fa-location-crosshairs me-1"></i> {job.loc}</span>
                  <span><i className="fa-solid fa-sack-dollar me-1"></i> {job.salary}</span>
                </div>
              </div>
            </div>
            <span className="text-muted cursor-pointer">⋮</span>
          </div>
          
          <div className="text-center mt-3">
            <a href="#" className="view-similar">View Similar Jobs</a>
          </div>

          {activeId === job._id && <div className="blue-arrow"></div>}
        </div>
      ))}
      
      {/* Empty State */}
      {(!jobs || jobs.length === 0) && (
        <div className="text-center mt-5 text-muted">
          <p>No Such Jobs Found</p>
        </div>
      )}
    </div>
  );
};

export default JobList;