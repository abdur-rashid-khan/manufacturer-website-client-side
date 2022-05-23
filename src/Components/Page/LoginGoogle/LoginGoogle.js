import React, { useEffect } from "react";
import auth from "../../../firebase.init";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {  useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Shear/Loading/Loading";
import googleIcon from '../../../assets/icons/google.png'
import UseToken from "../../Hook/useToken";



const LoginGoogle = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const form = location.state?.from?.pathname || "/";
  let errorElement = "";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // token hook
  const [token] = UseToken(user);

  // for google
  const loginWithGoogle = () => {
    signInWithGoogle();
  };


  // useEffect(() => {
  //   if (user || fbUser) {
  //     navigate(form, { replace: true });
  //     Swal.fire("Login successfully", "", "success");
  //   }
  // }, [user, fbUser, navigate, form])


  useEffect(() => {
    if (token) {
      navigate(form, { replace: true });
      Swal.fire("Login successfully", "", "success");
    }
  }, [token, navigate, form])


  if (loading ) {
    return <Loading></Loading>;
  }


  if (error ) {
    errorElement = <p className="text-red-600">Error:{error?.message} </p>;
  }
  return (
    <div className="">
      {errorElement}
      <div className="flex flex-col w-full border-opacity-0">
        <div className="divider">OR</div>
      </div>
      <div className="flex items-center justify-items-center justify-center gap-4">
        <div className="google grid w-full">
          <button className="flex items-center btn btn-outline text-black " onClick={loginWithGoogle} >
            <img style={{ width: '40px', height: '40px' }} src={googleIcon} alt="google icon" />
           <span> Login with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginGoogle;