import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import Lottie from 'lottie-react';
import loginAnimetion from '../../assets/login-animetion.json'

const SignUp = () => {

      const axiosPublic = useAxiosPublic()
      const { register, handleSubmit, reset, formState: { errors }, } = useForm();
      const { createUser, updatedUserProfile } = useAuth();
      // const navigate = useNavigate();
      const onSubmit = (data) => {
            createUser(data.email, data.password)
                  .then(result => {
                        const loggedUser = result.user;
                        // console.log(loggedUser);
                        updatedUserProfile(data.name, data.photo)
                              .then(() => {
                                    console.log('user profile updated');
                                    // create user entry in the database 
                                    const userInfo = {
                                          name: data.name,
                                          email: data.email,
                                          status: 'normal',
                                          subscription: null,
                                    }
                                    axiosPublic.post('/users', userInfo)
                                          .then(res => {
                                                if (res.data.insertedId) {
                                                      console.log('user sddrd to the database');
                                                      reset();
                                                      Swal.fire({
                                                            position: "top-end",
                                                            icon: "success",
                                                            title: "Your work has been saved",
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                      });
                                                      // navigate('/');
                                                }
                                          })

                              })
                              .catch(error => console.log(error))

                  })
      }
      // console.log(watch("name", 'password', 'photo', 'email'))
      return (
            <>
                  <Helmet>
                        <title>
                              DailyPulse || signup
                        </title>
                  </Helmet>
                  <div className="hero min-h-screen mt-20 bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <div className="text-center md:w-1/2 lg:text-left">
                                    <Lottie animationData={loginAnimetion}></Lottie>
                              </div>
                              <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                          <h1 className="text-5xl font-bold text-[#BC3433]">Sign Up now!</h1>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" {...register("name", { required: true })} name="name" placeholder="your name" className="input input-bordered" required />
                                                {errors.name && <span className="text-red-600">Name is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo Url</span>
                                                </label>
                                                <input type="text" {...register('photo', { required: true })} name="photo" placeholder="Photo Url" className="input input-bordered" required />
                                                {errors.photo && <span className="text-red-600">Photo Url is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                                {errors.email && <span className="text-red-600">email is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" {...register('password', {
                                                      required: true,
                                                      minLength: 6,
                                                      maxLength: 20,
                                                      // apssword validation pattan 
                                                      // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                                })} name='password' placeholder="password" className="input input-bordered" required />
                                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                                {errors.password && <span className="text-red-600">Password is required</span>}
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>

                                          <div className="form-control mt-6">

                                                <input className="btn btn-primary bg-[#CC2229] hover:bg-slate-900 border-0" type="submit" value="Sign Up" />
                                          </div>
                                          <p className="ml-6"> <small>Already Have an Account ? <Link to="/login" className="text-blue-600 underline">Log In</Link></small> </p>
                                          <SocialLogin></SocialLogin>
                                    </form>

                              </div>
                        </div>
                  </div>
            </>
      );
};

export default SignUp;