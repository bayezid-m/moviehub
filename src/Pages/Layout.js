import { Outlet, Link } from 'react-router-dom';
import Form from '../components/Form';
import Category from '../components/Category';

const Layout = () => {
  return (
    <>
      <nav className='navbar'>
        <h2 className='movie--title'>MovieHub</h2>
        <Form />
        <ul className='layout--list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/carts'>Cart</Link>
          </li>
        </ul>
      </nav>

      <Category />

      <Outlet />
    </>
  );
};

export default Layout;
