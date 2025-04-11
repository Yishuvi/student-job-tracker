
const sortJobsByDate = (applications) => {
    return applications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  };
  
  const jobApplications = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Amazon", role: "Backend Engineer", appliedDate: "2025-04-05" },
    { company: "Netflix", role: "Frontend Intern", appliedDate: "2025-03-25" }
  ];
  
  const sortedJobs = sortJobsByDate(jobApplications);
  console.log(sortedJobs);
  