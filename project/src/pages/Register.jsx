import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'freelancer',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <h1 className="text-2xl font-bold text-center mb-8">Create an Account</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              I want to
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-primary-500">
                <input
                  type="radio"
                  name="userType"
                  value="freelancer"
                  checked={formData.userType === 'freelancer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Find Work
              </label>
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-primary-500">
                <input
                  type="radio"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Hire Talent
              </label>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;