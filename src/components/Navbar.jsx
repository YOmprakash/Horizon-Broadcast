
import { Link } from 'react-router-dom';
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movies' },
  { name: 'TV Shows', path: '/tv-shows' },
  { name: 'Sports', path: '/sports' },
  { name: 'Live', path: '/live' },
];





const Navbar = ({ onMenuClick }) => {
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
        {menuItems.map((menu) => (
          <Link
            key={menu.name}
            to={menu.path}
            onClick={() => onMenuClick(menu.name)}
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            {menu.name}
          </Link>
        ))}
      </div>

      {/* Settings Link */}
      <div>
        <Link to="/settings" className="hover:bg-gray-700 px-3 py-2 rounded">
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
