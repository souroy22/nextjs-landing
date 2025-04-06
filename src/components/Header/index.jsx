import { Phone } from "lucide-react";
import Navbar from "../Navbar"; 

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-16">
          <div className="flex flex-col md:flex-row md:space-x-6 text-center items-center md:text-left">
            <span className="mr-[5px]">
            <i class="ri-phone-line"></i></span>
            <span>+1 (888) 123-4567</span>
            <span className="mr-[5px]">
            <i class="ri-mail-line"></i>
            </span>
            <span> support@inventorypro.com</span>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:opacity-75 !text-white">
              <i class="ri-twitter-x-line"></i>
            </a>
            <a href="#" className="hover:opacity-75 !text-white">
              <i class="ri-linkedin-line"></i> 
            </a>
            <a href="#" className="hover:opacity-75 !text-white">
              <i class="ri-facebook-line"></i> 
            </a>
            <a href="#" className="hover:opacity-75 !text-white">
              <i class="ri-global-line mr-3"></i>
              English
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-16 py-3 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold text-red-500">Logo</h1> */}
          <Navbar />
          {/* <div className="hidden md:flex space-x-4">
            <a href="#" className="flex items-center text-gray-600 hover:text-red-500">
              🎧 Need Help?
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500">
              👤 Sign In
            </a>
            <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Start Free Trial →
            </a>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
