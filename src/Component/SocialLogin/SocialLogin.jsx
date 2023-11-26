
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
      const { googleSignIn } = useAuth();
      const axiosPublic = useAxiosPublic();
      const navigate = useNavigate()


      const handleGoogleSignIn = () => {
            googleSignIn()
                  .then(result => {
                        // console.log(result.user);
                        const userInfo = {
                              email: result.user?.email,
                              name: result.user?.displayName,
                              status: 'normal',
                              subscription: null,
                              photo:result.user?.photoURL

                        }
                        axiosPublic.post('/users', userInfo)
                              .then(res => {
                                    console.log(res.data);
                                    navigate('/')
                              })
                  })
      }
      return (
            <div className="p-4">
                  <div className="divider"></div>
                  <button
                        onClick={handleGoogleSignIn}
                        className="btn bg-red-700 text-white hover:bg-slate-950">
                        <FaGoogle className="mr-2"></FaGoogle>
                        Google
                  </button>
            </div>
      );
};

export default SocialLogin;