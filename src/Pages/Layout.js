import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <h2 className="movie--title">MovieHub</h2>
        <ul className="layout--list">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/carts'>Cart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
