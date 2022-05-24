import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// for hero icon 
import { BeakerIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';

const DashBoard = () => {
	const [user] = useAuthState(auth);
	const [admin] = useAdmin(user);
	return (
		<div className="container mx-auto px-2 lg:px-0">
			<div className="drawer drawer-mobile pt-16">
				<input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content  flex flex-col">
					{/* <!-- Page content here --> */}
					<div className="text-left mt-4 ">
						<label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span><ChevronRightIcon /></span> </label>
					</div>
					<div className="text-center ">
						<div id="header" className='py-6'>
							<h1 className='text-4xl font-bold font-serif'>Dash Board </h1>
						</div>
						<div className="text-left px-3">
							<Outlet></Outlet>
						</div>
					</div>

				</div>
				<div className="drawer-side">
					<label htmlFor="open-dashboard-menu" className="drawer-overlay"></label>
					<ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 border-r-1 shadow-lg  text-zinc-800">
						{/* <!-- Sidebar content here --> */}
						<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='' to={'/dashboard'}>My Profile</Link></li>
						{
							!admin && <>
								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='' to={'/dashboard/my-order'}>My Order</Link></li>
								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='py-2 ' to={'/dashboard/review'}>Add Review</Link></li>
							</>
						}
						{
							admin && <>

								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='py-2 ' to={'/dashboard/all-user'}>All Users</Link></li>
								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='py-2 ' to={'/dashboard/manage-products'}>Manage Products</Link></li>
								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='py-2 ' to={'/dashboard/manage-order'}>Manage Order</Link></li>
								<li className='py-1 text-lg hover:bg-slate-300 rounded'><Link className='py-2 ' to={'/dashboard/add-product'}>Add Product</Link></li>

							</>
						}
					</ul>

				</div>
			</div>
		</div>
	);
};

export default DashBoard;