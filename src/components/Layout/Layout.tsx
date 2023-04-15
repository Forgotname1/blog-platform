import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import './Layout.scss';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  // const clickLogout = () => {};
  const goToNavigate = () => navigate('/edit_profile');
  return (
    <>
      <header className="header">
        <Link to={'/'} className="header_logo">
          Realworld Blog
        </Link>
        <div className="header_login">
          <Link
            to={'/login'}
            className="header_login_signIn"
            state={{ from: location }}
          >
            Sign In
          </Link>
          <Link to={'/registration'} className="header_login_signUp">
            Sign Up
          </Link>
        </div>
        <div className="header_login">
          <Link to={'/'} className="header_login_createPost">
            Create Article
          </Link>
          <div className="header_login_user" onClick={goToNavigate}>
            <span className="header_login_user_name">Name</span>
            <Avatar alt="name" src="#" />
          </div>
          <Link
            to={''}
            className="header_login_logOut" /*onClick={clickLogout}*/
          >
            Log Out
          </Link>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
