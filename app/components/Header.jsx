// components/Header.jsx
import '../styles/globals.css';
import Link from 'next/link';
import Dropdown from './Dropdown'; 
import ThemeToggle from './ThemeToggle';

const Header = ({ dropdownItems }) => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="">
            TMDb Clone
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex relative">
          {Object.entries(dropdownItems).map(([title, items]) => (
            <Dropdown key={title} title={title} items={items} />
          ))}
        </nav>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className=" rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition duration-300">
            🔍
          </button>
        </div>
      </div>


    </header>
  );
};

export default Header;
