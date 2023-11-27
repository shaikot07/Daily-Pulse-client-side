import { useForm } from 'react-hook-form';
import { FaBook, } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddArticle = () => {
      const { register, handleSubmit, reset } = useForm();
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
      const {user,loading}=useAuth()

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
                  const articleItem = {
                        title: data.title,
                        publisher: data.publisher,
                        description: data.description,
                        articleAuthorName: user.displayName,
                        articleAuthorEmail: user.email,
                        postedDate: data.postedDate,
                        image: res.data.data.display_url,
                        isPremium: false,
                        isVisible: false,
                        status: "Pending",
                        viewCount: 200,
                        premiumTaken: null,
                        tags: ["Travel", "Adventure"],
                  }
                  // send data database here 
                  const articleRes = await axiosSecure.post('/article', articleItem);
                  // console.log(menuRes.data);
                  if (articleRes.data.insertedId) {
                        // show success popup 
                        reset();
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${data.title} is added to the Article`,
                              showConfirmButton: false,
                              timer: 1500
                        });
                  }
            }
      }
      // console.log('with image url', res.data);
      // console.log(data);
      return (
            <div >
                  <Helmet>
                        <title>DailyPulse || Add Article</title>
                  </Helmet>
                  <div className='max-w-6xl mx-auto'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                              <div className='flex gap-6'>
                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">Article Title*</span>
                                          </label>
                                          <input
                                                type="text"
                                                placeholder="Article Title"
                                                {...register('title', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">Publisher*</span>
                                          </label>
                                          <select defaultValue="default" {...register('publisher', { required: true })}
                                                className="select select-bordered w-full">
                                                <option disabled value="default">Select a Publisher</option>
                                                <option value="Science Daily">Science Daily</option>
                                                <option value="National Geographic">National Geographic</option>
                                                <option value="Tech Innovations">Tech Innovations</option>
                                                <option value="Business Trend">Business Trend</option>

                                          </select>
                                    </div>
                              </div>
                              <div className="flex gap-6">

                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">Description*</span>
                                          </label>
                                          <input
                                                type="text"
                                                placeholder="description"
                                                {...register('description', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">Article Author Name*</span>
                                          </label>
                                          <input
                                                type="text"
                                                value={user.displayName}
                                                placeholder="article AuthorName"
                                                // {...register('articleAuthorName', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>


                              </div>
                              {/* recipe details */}
                              <div className="flex gap-6">

                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">article Author Email*</span>
                                          </label>
                                          <input
                                                type="text"
                                                value={user.email}
                                                placeholder="articleAuthorEmail"
                                                // {...register('articleAuthorEmail', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>
                                    <div className="form-control w-full my-6">
                                          <label className="label">
                                                <span className="label-text">posted Date*</span>
                                          </label>
                                          <input
                                                type="date"
                                                placeholder="postedDate"
                                                {...register('postedDate', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                    </div>


                              </div>


                              <div className="form-control w-full my-6">
                                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                              </div>

                              <button className="btn bg-red-700 text-white hover:bg-black">
                                    Post Article  <FaBook className="ml-4"></FaBook>

                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AddArticle;