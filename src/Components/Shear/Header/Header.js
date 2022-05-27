import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../Active/CustomLink';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOutBtn = () => {
    signOut(auth);
    localStorage.removeItem('token');
  }
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <nav className="bg-slate-200  shadow fixed z-50 w-full">
      <div className="container mx-auto w-full navbar px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded w-52"
            >
              <li className='pt-4 text-lg text-white'>
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li className='pt-4 text-lg text-white'>
                <CustomLink to={"/tools-parts"}>Tools and Parts</CustomLink>
              </li>
              {/* <li className='pt-4 text-lg text-white'>
                <CustomLink to={"/reviews"}>Reviews</CustomLink>
              </li> */}
              <li className='pt-4 text-lg text-white'>
                <CustomLink to={"/blog"}>Blog</CustomLink>
              </li>
              <li className='pt-4 text-lg text-white'>
                <CustomLink to={'/dashboard'} >Dashboard</CustomLink>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Max Tools and Parts</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li>
                <CustomLink to={"/tools-parts"}>Tools and Parts</CustomLink>
              </li>
              {/* <li>
                <CustomLink to={"/reviews"}>Reviews</CustomLink>
              </li> */}
              <li>
                <CustomLink to={"/blog"}>Blog</CustomLink>
              </li>
              {
                user && <li><CustomLink to={'/dashboard'} >Dashboard</CustomLink></li>
              }
            </ul>
          </div>
          {
            user ? <button onClick={logOutBtn} className="text-black font-semibold">logOut</button> :
              <Link to={'/login'} >Login</Link>
          }

        </div>
      </div>
    </nav>
  );
};

export default Header;