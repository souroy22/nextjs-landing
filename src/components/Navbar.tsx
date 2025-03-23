import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <div>
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>
      <div className="flex space-x-6 items-center">
        <a href="#" className="text-red-600 font-semibold border-b-2 border-red-600">Home</a>
        <div className="relative group">
          <button className="text-black font-medium flex items-center space-x-1">
            Features <FaChevronDown className="ml-1" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Feature 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Feature 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-black font-medium flex items-center space-x-1">
            Solutions <FaChevronDown className="ml-1" />
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Solution 2</a>
          </div>
        </div>
        <a href="#" className="text-black font-medium">Pricing</a>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700">
          Log In / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
