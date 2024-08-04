

import { FaBook } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import useAuth from '../../../../hooks/useAuth';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AdminProfile = () => {
    const { user, updatedUserProfile } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        // image uploade to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {
            // now update the data  
            updatedUserProfile(data.name, res.data.data.display_url);

        }
    }

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-[500px] rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-[200px] rounded-xl bg-clip-border">
                    <img src={user?.photoURL} alt="profile-picture" />
                </div>
                <div className="p-4 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Admin Name:  {user?.displayName}
                    </h4>
                    <h2>Update Your Profile</h2>
                </div>
                <div className='p-2'>
                    {/* from start  */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-6'>
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Update Name*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder={user?.displayName}
                                    {...register('name', { required: true })}
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>

                        <button className="btn bg-red-700 text-white hover:bg-black">
                            Update Profile

                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AdminProfile;