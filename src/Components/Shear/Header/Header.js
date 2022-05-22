import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Active/CustomLink';
import './Header.css'

const Header = () => {
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
              <li>
                <CustomLink className='text-base my-2' to={"/"}>Home</CustomLink>
              </li>
              <li>
                <CustomLink className='text-base my-2' to={"/about"}>About</CustomLink>
              </li>
              <li>
                <CustomLink className='text-base my-2' to={"/appointment"}>Appointment</CustomLink>
              </li>
              <li>
                <CustomLink className='text-base my-2' to={"/reviews"}>Reviews</CustomLink>
              </li>
              <li>
                <CustomLink className='text-base my-2' to={"/contact"}>Contact Us</CustomLink>
              </li>
              <li>
                <CustomLink className='text-base my-2' to={'/dashboard'} >Dashboard</CustomLink>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <CustomLink to={"/"}>Home</CustomLink>
              </li>
              <li>
                <CustomLink to={"/about"}>My Order</CustomLink>
              </li>
              <li>
                <CustomLink to={"/reviews"}>Reviews</CustomLink>
              </li>
              <li>
                <CustomLink to={"/contact"}>Contact Us</CustomLink>
              </li>
              <li>
              <CustomLink to={'/dashboard'} >Dashboard</CustomLink>
              </li>
            </ul>
          </div>
          <Link to={'/login'} >Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;