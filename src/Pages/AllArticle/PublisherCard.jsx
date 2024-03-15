/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PublisherCard = ({ data, userHasSubscription }) => {
      const { title, image, isPremium, publisher, description, articalAuthorPhoto, articleAuthorName, _id } = data || {}
      const handleDetailsButtonClick = () => {
            if (isPremium && !userHasSubscription) {
                  Swal.fire("You need to subscribe to access details for premium articles!");
            } else {
                  //     baki kj pore korbo 
            }
      };
      return (
            <div className="">
                  <div className="max-w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                              <img className="rounded-t-lg" src={image} alt="" />
                        </a>
                        <div className="p-5">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                              <p className="mb-3 text-1xl font-semibold text-gray-800 dark:text-gray-400">publisher: {publisher}</p>
                              <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-4">
                                          <img alt="" className="w-10 h-10 rounded-full bg-gray-500" src={articalAuthorPhoto} />
                                          {/* Replace 'ri ri' with appropriate class names */}
                                          <h2 className="text-base font-bold text-[#E31C25]">{articleAuthorName}</h2>
                                    </div>
                              </div>
                              <Link to="/allarticles">
                                    <a href="" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#B80000] rounded-lg hover:bg-black  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                          Read more

                                    </a>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default PublisherCard;