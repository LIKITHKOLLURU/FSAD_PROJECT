import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black">
            FreelanceMarketplace
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/jobs" className="text-gray-600 hover:text-black">
              Find Jobs
            </Link>
            <Link to="/post-job" className="text-gray-600 hover:text-black">
              Post a Job
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-black">
              Profile
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
            <Link to="/register" className="text-black hover:text-gray-700">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;