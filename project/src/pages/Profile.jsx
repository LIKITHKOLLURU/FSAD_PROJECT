function Profile() {
  const profiles = [
    {
      name: "Likith Kumar",
      role: "Software Engineer",
      skills: ["React", "MongoDB", "SQL", "C", "Java", "JavaScript"],
      workHistory: "Freelance Marketplace Development",
    },
    {
      name: "Asish Israel",
      role: "Backend Developer",
      skills: ["React", "MongoDB", "SQL", "C", "Java", "JavaScript"],
      workHistory: "Freelance Marketplace Development",
    },
    {
      name: "Hareendra",
      role: "Frontend Developer",
      skills: ["React", "MongoDB", "SQL", "C", "Java", "JavaScript"],
      workHistory: "Freelance Marketplace Development",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profiles</h1>
      
      {profiles.map((profile, index) => (
        <div key={index} className="card mb-8 p-6 border rounded-lg shadow">
          <div className="flex items-start gap-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
              <p className="text-gray-600 mb-4">{profile.role}</p>
              <p className="text-gray-700 mb-4">
                Experienced developer with a passion for building scalable web applications.
              </p>
              <button className="btn-primary">Edit Profile</button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Work History</h3>
            <div className="border-b pb-4">
              <h4 className="font-semibold">{profile.workHistory}</h4>
              <p className="text-gray-600">Completed Feb 2024</p>
              <p className="text-gray-700 mt-2">
                Developed a full-stack freelance marketplace using React and Node.js
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
