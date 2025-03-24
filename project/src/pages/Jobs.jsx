function Jobs() {
  const jobs = [
    {
      id: 1,
      title: "React Developer Needed",
      description: "Looking for an experienced React developer for a 3-month project",
      budget: " ₹ 15,000 - ₹ 35,000",
      skills: ["React", "JavaScript", "Node.js"],
      postedDate: "FEB 2025",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      description: "Seeking a skilled full-stack developer for a web application project",
      budget: " ₹ 25,000 - ₹ 50,000",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      postedDate: "FEB 2025",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "Looking for a creative UI/UX designer to revamp an existing platform",
      budget: " ₹ 20,000 - ₹ 40,000",
      skills: ["Figma", "Adobe XD", "CSS", "User Research"],
      postedDate: "FEB 2025",
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="card hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-primary-600 font-semibold">{job.budget}</div>
              <div className="text-sm text-gray-500">Posted on {job.postedDate}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="btn-primary mt-4">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
