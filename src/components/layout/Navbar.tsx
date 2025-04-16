
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-gray-100 text-reliability-blue" : "text-gray-700 hover:bg-gray-50";
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full z-10 top-0 left-0">
      <div className="flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold text-reliability-blue">AppReliability</span>
        </Link>
        <div className="flex items-center lg:order-2">
          <Link to="/dashboard" className={`${isActive('/dashboard')} px-3 py-2 rounded-lg text-sm font-medium`}>
            Dashboard
          </Link>
          <Link to="/configure" className={`${isActive('/configure')} px-3 py-2 rounded-lg text-sm font-medium`}>
            Configure Tests
          </Link>
          <Link to="/results" className={`${isActive('/results')} px-3 py-2 rounded-lg text-sm font-medium`}>
            Test Results
          </Link>
          <Link to="/compare" className={`${isActive('/compare')} px-3 py-2 rounded-lg text-sm font-medium`}>
            Compare
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
