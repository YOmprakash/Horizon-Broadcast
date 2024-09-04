
import { Link } from 'react-router-dom';

import translations from "../utils/translations";


const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movies' },
  { name: 'TVShows', path: '/tv-shows' },
  { name: 'Sports', path: '/sports' },
  { name: 'Live', path: '/live' },
];





const Navbar = ({ onMenuClick,language }) => {
  const currentTranslations = translations[language] || translations['English'];
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-black">
      {/* Logo Section */}
      <div >
       <Link to='/'>
       <span className="text-xl font-bold">Horizon Broadcast</span>
       </Link>
       
      </div>

      {/* Menu Items */}
      <div className="flex space-x-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="px-3 py-2 rounded hover:bg-gray-700"
          >
            {currentTranslations[item.name]}
          </Link>
        ))}
      </div>

      {/* Settings Link */}
      <div>
        <Link to="/settings" className="px-3 py-2 rounded hover:bg-gray-700">
        {currentTranslations.Settings}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
