import { useState } from 'react';

function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    duration: '',
    skills: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement job posting logic
    console.log('Job posting:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
      
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="input-field"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. &#8377; 42,000 - 80,000"
                className="input-field"
                required
              />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Project Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g. 2 weeks"
                className="input-field"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
              Required Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, JavaScript"
              className="input-field"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Separate skills with commas
            </p>
          </div>

          <button type="submit" className="w-full btn-primary">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostJob;