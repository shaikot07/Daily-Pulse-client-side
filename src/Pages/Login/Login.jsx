import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import Lottie from 'lottie-react';
import loginAnimetion from '../../assets/login-animetion.json'

const Login = () => {
      const { signIn } = useAuth()
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/"


      const handleLogIn = (event) => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            signIn(email, password)
                  .then(result => {
                        const user = result.user;
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Log In SuccessFully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        navigate(from, { replace: true })
                  })
      }


      return (
            <>
                  <Helmet>
                        <title>
                              DailyPulse || Log IN
                        </title>
                  </Helmet>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <div className="text-center md:w-1/2 lg:text-left">
                              <Lottie animationData={loginAnimetion}></Lottie>
                                   
                              </div>
                              <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

                                    <form onSubmit={handleLogIn} className="card-body">
                                          <h1 className="text-5xl font-bold text-[#BC3433]">Login now!</h1>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>

                                          <div className="form-control mt-4">

                                                <input className="btn btn-primary bg-[#BC3433] border-0 hover:bg-slate-900" type="submit" value="login" />
                                          </div>
                                          <p className='ml-8'> <small>Don't have an account ?<Link to="/signup" className="text-blue-600 underline">Create an Account</Link></small> </p>
                                          <SocialLogin></SocialLogin>
                                    </form>

                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Login;