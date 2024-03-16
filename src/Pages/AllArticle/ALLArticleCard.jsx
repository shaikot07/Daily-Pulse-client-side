/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ALLArticleCard = ({ data, userHasSubscription }) => {
      const { title, image, isPremium, publisher, description, articalAuthorPhoto, articleAuthorName, _id } = data || {}
      const handleDetailsButtonClick = () => {
            if (isPremium && !userHasSubscription) {
                  Swal.fire("You need to subscribe to access details for premium articles!");

                  // baki kj pore korbo 
            }
      };
      return (
            <>
                  {
                        isPremium && !userHasSubscription ? <>
                              <div className="">
                                    <div className="max-w-[330px] h-[467px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                          <img className="rounded-t-lg object-cover w-[330px] h-[170px]" src={image} alt="" />

                                          <div className="p-5 w-full h-[184px] ">
                                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                                                <p className="mb-3 text-1xl font-semibold text-gray-800 dark:text-gray-400">publisher: {publisher}</p>
                                                <div className="flex items-center justify-between py-2">
                                                      <div className="flex items-center gap-4">
                                                            <img alt="" className="w-10 h-10 rounded-full bg-gray-500" src={articalAuthorPhoto} />
                                                            <h2 className="text-base font-bold text-[#E31C25]">{articleAuthorName}</h2>
                                                      </div>
                                                </div>
                                                <div className='w-full mx-auto mt-2 mb-0'>
                                                      {isPremium && !userHasSubscription ? (
                                                            <button
                                                                  onClick={handleDetailsButtonClick}
                                                                  className="bg-[#E31C25] text-white p-2 w-full rounded-lg cursor-not-allowed opacity-50"
                                                                  disabled
                                                            >
                                                                  View Detail Button
                                                            </button>
                                                      ) : (
                                                            <Link to={`/articledetils/${_id}`}>
                                                                  <button className="bg-[#E31C25] text-white p-2 w-full rounded-lg hover:bg-black mb-0">
                                                                        View Detail Button
                                                                  </button>
                                                            </Link>
                                                      )}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </>
                              : <>
                                    <div className="">
                                          <div className="max-w-[330px] h-[467px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <img className="rounded-t-lg object-cover w-[330px] h-[170px]" src={image} alt="" />

                                                <div className="p-5 w-full h-[184px] ">
                                                      <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                                                      <p className="mb-3 text-1xl font-semibold text-gray-800 dark:text-gray-400">publisher: {publisher}</p>
                                                      <div className="flex items-center justify-between py-2">
                                                            <div className="flex items-center gap-4">
                                                                  <img alt="" className="w-10 h-10 rounded-full bg-gray-500" src={articalAuthorPhoto} />
                                                                  <h2 className="text-base font-bold text-[#E31C25]">{articleAuthorName}</h2>
                                                            </div>
                                                      </div>
                                                      <div className='w-full mx-auto mt-2 mb-0'>
                                                            {isPremium && !userHasSubscription ? (
                                                                  <button
                                                                        onClick={handleDetailsButtonClick}
                                                                        className="bg-[#E31C25] text-white p-2 w-full rounded-lg cursor-not-allowed opacity-50"
                                                                        disabled
                                                                  >
                                                                        View Detail Button
                                                                  </button>
                                                            ) : (
                                                                  <Link to={`/articledetils/${_id}`}>
                                                                        <button className="bg-[#E31C25] text-white p-2 w-full rounded-lg hover:bg-black mb-0">
                                                                              View Detail Button
                                                                        </button>
                                                                  </Link>
                                                            )}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </>
                  }
            </>

      );
};

export default ALLArticleCard;