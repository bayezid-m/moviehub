
import { Outlet, Link } from 'react-router-dom';

//import Filter from '../components/Filter';

const Header = () => {
  return (
    <>
      <nav className='navbar'>
        <h2 className='movie--title'>MovieHub</h2>
        
        <ul className='layout--list'>
          <button>
            <Link to='/'>Home</Link>
          </button>
          <li>
            <Link to='/Favlist'>Favourite List</Link>
          </li>
        </ul>
      </nav>

  

      <Outlet />
    </>
  );
};

export default Header;