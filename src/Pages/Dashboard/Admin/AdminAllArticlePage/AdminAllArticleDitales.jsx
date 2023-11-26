import React from 'react';
import { Link } from 'react-router-dom';

const AdminAllArticleDitales = ({ data }) => {
      const { title, image, publisher, description, status, articleAuthorEmail, postedDate, articalAuthorPhoto, articleAuthorName, _id } = data || {}
      return (
            <div>
                  <div className="relative flex max-w-[350px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                              <img className='rounded-lg'
                                    src={image}
                                    alt="ui/ux review check"
                              />
                        </div>
                        <div className="px-6">
                              <div className=''>
                                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-[#E31C25] ">
                                          <span className='text-black'>Title:</span>  {title}
                                    </h4>
                                    <div className='flex gap-2'>
                                          <p>Post Date: {postedDate}</p>
                                          <p >Status: <span className='text-yellow-400'>{status}</span></p>
                                    </div>
                              </div>

                              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    {description}
                              </p>
                              <h2 className='text-2xl mt-4 text-[#E31C25]'><span className='text-black'>Publisher: {publisher}</span> </h2>
                        </div>
                        <div className=" items-center justify-between p-6">
                              <div className="flex items-center gap-4">
                                    <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={articalAuthorPhoto} />
                                    <div>
                                          <h2 className='text-2xl font-bold text-[#E31C25] '>{articleAuthorName}</h2>
                                          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                                {articleAuthorEmail}
                                          </p>
                                    </div>
                              </div>


                        </div>
                        <div className=' ml-5'>

                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-2 mb-0'>

                              <button className="btn btn-outline">Approve</button>
                              <button className="btn btn-outline btn-primary">Decline</button>
                              <button className="btn btn-outline btn-secondary">Delete</button>
                              <button className="btn btn-outline btn-accent">Make premium</button>
                        </div>
                  </div>
            </div>
      );
};

export default AdminAllArticleDitales;