import { useState, useRef } from 'react';

const PopularNav = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Set the first tab as the default
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  // Function to update the indicator position and width when the tab is clicked
  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Find the clicked tab element
    const activeElement = navRef.current?.querySelector(`[data-tab="${tab}"]`);
    if (activeElement && indicatorRef.current) {
      indicatorRef.current.style.width = `${activeElement.offsetWidth}px`;
      indicatorRef.current.style.left = `${activeElement.offsetLeft}px`;
    }

    // Trigger callback to inform parent component
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Function to handle the initial rendering of the indicator style without `useEffect`
  const setInitialIndicator = (el) => {
    if (el && indicatorRef.current) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.left = `${el.offsetLeft}px`;
    }
  };

  return (
    <nav className="relative bg-gray-800 rounded-full p-1 inline-block" ref={navRef}>
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full transition-colors duration-300 relative z-10 ${
              activeTab === tab ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => handleTabClick(tab)}
            data-tab={tab}
            ref={activeTab === tab ? setInitialIndicator : null} // Set the ref for the active tab initially
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        ref={indicatorRef}
        className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-in-out"
      />
    </nav>
  );
};

export default PopularNav;
