'use client';

import { useState } from 'react';
import Link from 'next/link';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);

  return (
    <div className="relative dropdown-container">
      <button
        onClick={handleToggle}
        className="hover:text-blue-400 transition duration-300 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-50">
          <ul className="space-y-2 text-sm">
            {items.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-blue-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
