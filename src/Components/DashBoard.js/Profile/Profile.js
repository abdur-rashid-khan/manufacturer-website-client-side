import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Shear/Loading/Loading';

const Profile = () => {
  const [user , loading] = useAuthState(auth);
  console.log(user);
  const logOutBtn = () => {
    signOut(auth);
    localStorage.removeItem('token');
    
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className='text-center text-2xl pb-4 text-slate-600'>My Profile</h1>
      <div class="card w-96 bg-slate-100 shadow-xl m-auto">
        {/* user profile */}
        {
          user.photoURL ? <img style={{border:"solid 2px #515EFF"}} className='w-44 m-auto  rounded-full mt-6' src={user.photoURL} alt="" /> :
          <div style={{border:"solid 2px #515EFF"}} className='w-20 h-20 m-auto  rounded-full mt-6 text-center'>
            <h1 className='text-lx text-slate-700 mt-6'>BOOT</h1>
          </div>
        }
        <div class="card-body">
          <h2 class="card-title capitalize text-slate-700">user name : {user.displayName}</h2>
          <p className='capitalize text-slate-700'>last login : {user.metadata.lastSignInTime}</p>
          <p className=' text-slate-700'>Email : {user.email}</p>
        </div>
        <div class="card-actions justify-center mb-8">
          <button onClick={logOutBtn} class="btn-primary px-6 py-2 font-serif rounded hover:bg-blue-600">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;