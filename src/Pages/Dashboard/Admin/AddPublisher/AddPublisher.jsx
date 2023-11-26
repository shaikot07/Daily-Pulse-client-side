import { useForm } from "react-hook-form";
import { FaBook } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddPublisher = () => {
      const { register, handleSubmit, reset } = useForm();
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure()


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
                  // now send the menu item data to the server with the image url 
                  const publisherItem = {
                        publisherName: data.publisherName,
                        image: res.data.data.display_url,

                  }
                  // send data database here 
                  const articleRes = await axiosSecure.post('/publisher', publisherItem);
                  // console.log(menuRes.data);
                  if (articleRes.data.insertedId) {
                        // show success popup 
                        reset();
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${data.publisherName} is added to the Article`,
                              showConfirmButton: false,
                              timer: 1500
                        });
                  }
            }
      }

      return (
            <div className="mt-20" >
                  <Helmet>
                        <title>DailyPulse || Admin add publisher</title>
                  </Helmet>
                  <div className='max-w-[800px] mx-auto bg-purple-400 p-4'>
                        <form onSubmit={handleSubmit(onSubmit)} className=" bg-purple-400 p-4">
                              <div className='flex justify-start items-center gap-6'>
                                    <div className="form-control w-1/2 ">
                                          <label className="label">
                                                <span className="label-text">Publisher Name*</span>
                                          </label>
                                          <input
                                                type="text"
                                                placeholder="Publisher name"
                                                {...register('publisherName', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full ">
                                          <label className="label">
                                                <span className="label-text">Publisher Name*</span>
                                          </label>
                                          <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                    </div>

                              </div>
                              <div className="mt-4">
                                    <button className="btn bg-red-700 text-white hover:bg-black">
                                          Add Publisher  <FaBook className="ml-4"></FaBook>

                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default AddPublisher;