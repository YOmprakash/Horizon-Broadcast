
import { Link } from 'react-router-dom';

import translations from "../utils/translations";


const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movies' },
  { name: 'TV Shows', path: '/tv-shows' },
  { name: 'Sports', path: '/sports' },
  { name: 'Live', path: '/live' },
];





const Navbar = ({ onMenuClick,language }) => {
  const currentTranslations = translations[language] || translations['English'];
  return (
    <nav className="flex items-center justify-between bg-black p-4 text-white">
      {/* Logo Section */}
      <div >
       <Link to='/'>
       <span className="font-bold text-xl">Horizon Broadcast</span>
       </Link>
       
      </div>

      {/* Menu Items */}
      <div className="flex space-x-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            {currentTranslations[item.name]}
          </Link>
        ))}
      </div>

      {/* Settings Link */}
      <div>
        <Link to="/settings" className="hover:bg-gray-700 px-3 py-2 rounded">
        {currentTranslations.Settings}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
