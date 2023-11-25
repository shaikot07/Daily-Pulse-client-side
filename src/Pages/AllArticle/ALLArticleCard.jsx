import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ALLArticleCard = ({ data, userHasSubscription }) => {
      const { title, image, isPremium, publisher, description, articalAuthorPhoto, articleAuthorName, _id} = data || {}
      const handleDetailsButtonClick = () => {
            if (isPremium && !userHasSubscription) {
                  Swal.fire("You need to subscribe to access details for premium articles!");
                  
                  // baki kj pore korbo 
            } 
      };
      return (
            <div className="relative flex max-w-[550px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img className='rounded-lg'
                              src={image}
                              alt="ui/ux review check"
                        />
                  </div>
                  <div className="p-6">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#E31C25] ">
                              <span className='text-black'>Title:</span>  {title}
                        </h4>

                        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                              {description}
                        </p>
                        <h2 className='text-2xl mt-4 text-[#E31C25]'><span className='text-black'>Publisher: {publisher}</span> </h2>
                  </div>
                  <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                              <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={articalAuthorPhoto} />
                              <h2 className='text-2xl font-bold text-[#E31C25] '>{articleAuthorName}</h2>

                        </div>

                  </div>
                  <div className=' ml-5'>
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">

                        </p>
                  </div>
                  <div className='w-full mx-auto mt-5 mb-0'>
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
                                    <button className="bg-[#E31C25] text-white p-2 w-full rounded-lg hover:bg-black">
                                          View Detail Button
                                    </button>
                              </Link>
                        )}
                  </div>
            </div>
      );
};

export default ALLArticleCard;