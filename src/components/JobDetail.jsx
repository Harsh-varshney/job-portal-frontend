import React from 'react';
import '../styles/JobDetail.css';

const JobDetail = ({ job }) => {
  // Agar koi job select nahi hai toh dummy text dikhayega (jo aapne pehle likha tha)
  const displayJob = job || {
    company: "Full Company Name",
    role: "Role - Heading",
    loc: "Delhi",
    salary: "INR 12-18 LPA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  return (
    <div className="detail-box-container">
      <div className="text-center mb-4">
        <h4 className="fw-bold">{displayJob.company}</h4>
        <hr className="my-3 opacity-25" />
      </div>

      <div className="d-flex align-items-start gap-3 mb-3">
        <div className="logo-placeholder-original"></div>
        <div>
          <h5 className="fw-bold mb-1">{displayJob.role}</h5>
          <p className="small text-muted mb-0">Posted 2 days ago • Over 25 applicants</p>
        </div>
      </div>

      <div className="mb-4 d-flex align-items-center">
        <span className="small text-muted me-3">Skills Required:</span>
        <div className="d-flex flex-wrap gap-1">
          {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'].map(s => (
            <span key={s} className="skill-badge-custom">{s}</span>
          ))}
        </div>
      </div>

      <div className="d-flex gap-4 mb-4 fw-medium">
        <span><i class="fa-solid fa-briefcase"></i> 2-4 yrs</span>
        <span><i class="fa-solid fa-location-crosshairs"></i> {displayJob.loc}</span>
        <span><i class="fa-solid fa-sack-dollar"></i> {displayJob.salary}</span>
      </div>

      <div className="d-flex mb-5">
        <button className="apply-btn-original">Apply</button>
        <button className="icon-btn-original"><i class="fa-solid fa-check"></i></button>
        <button className="icon-btn-original"><i style={{color:"red"}} class="fa-solid fa-ban"></i></button>
        <button className="icon-btn-original"><i style={{color:"black"}} class="fa-solid fa-link"></i></button>
      </div>

      <div className="job-description">
        <h5 className="fw-bold">Job Description</h5>
        
        {/* Aapka loop jaisa tha waisa hi hai */}
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="mt-3">
            <h6 className="fw-bold">Sub-heading {i}</h6>
            <p className="text-muted small">
              {i === 1 && job ? job.desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetail;