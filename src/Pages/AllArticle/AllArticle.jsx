/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ALLArticleCard from './ALLArticleCard';
import PublisherCard from './PublisherCard';
import useArticle from '../../hooks/useArticle';
import { Helmet } from 'react-helmet-async';
import InfiniteScroll from 'react-infinite-scroll-component';
const AllArticle = () => {
      const [searchInput, setSearchInput] = useState("")
      // console.log(searchInput);
      const [article] = useArticle()
      const [filteredData, setFilteredData] = useState([]);
      const [selectedMenuItem, setSelectedMenuItem] = useState(null);
      const [userHasSubscription, setUserHasSubscription] = useState(false);
      const [page, setPage] = useState(1);
      const [showLoader, setShowLoader] = useState(false);
      const itemParPage = 4;

      // infiniti loop ar kaj 
      const fetchMoreData = () => {
            const newData = article.slice(0, page * itemParPage); 
            setFilteredData(newData);
            setPage(page + 1);
      };

      useEffect(() => {
            fetchMoreData();
            setShowLoader(true)
      }, []);


      const handleScience = () => {
            const scienceData = article.filter(item => item.publisher.toUpperCase() === 'SCIENCE DAILY');
            setShowLoader(true)
            setFilteredData(scienceData);
            setSelectedMenuItem('Science Daily');
      };

      const nationalGeographic = () => {

            const nationalGeographicData = article.filter(item => item.publisher.toUpperCase() === 'NATIONAL GEOGRAPHIC');
            setShowLoader(true)
            setFilteredData(nationalGeographicData);
            setSelectedMenuItem('National Geographic');
      };

      const techInnovations = () => {
            const techInnovationsData = article.filter(item => item.publisher.toUpperCase() === 'TECH INNOVATIONS');
            setShowLoader(true)
            setFilteredData(techInnovationsData);
            setSelectedMenuItem('Tech Innovations');
      };
      const handleMenuItemClick = (menuItem) => {
            if (menuItem === 'Science Daily') {
                  handleScience();
            } else if (menuItem === 'National Geographic') {
                  nationalGeographic();
            } else if (menuItem === 'Tech Innovations') {
                  techInnovations();
            }
      };
      return (
            <div className='max-w-6xl mx-auto mt-20'>
                  <div>
                        <Helmet>
                              <title>DailyPulse || All Article</title>
                        </Helmet>
                  </div>
                  <div className='max-w-[400px] mx-auto '>
                        <fieldset className="w-full space-y-1 dark:text-gray-100">

                              <div className="flex ">
                                    <span className="flex items-center py-3 px-3 bg-[#E31C25] pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-white font-bold hover:bg-slate-950">Search</span>
                                    <input onChange={(e) => setSearchInput(e.target.value)} type="text" name="url" id="url" placeholder=" Type here news Title" className="flex flex-1 border sm:text-sm rounded-r-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
                              </div>
                        </fieldset>
                  </div>
                  <div className='max-w-[12rem] mx-auto mt-2 '>

                        <div className="dropdown dropdown-right dropdown-end">
                              <label tabIndex={0} className="btn hover:bg-red-700 hover:text-white m-1">Filtered by publisher</label>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52 ">
                                    <li className='hover:bg-red-400 rounded-lg'><a onClick={() => handleMenuItemClick('Science Daily')}>Science Daily</a></li>
                                    <li className='hover:bg-red-400 rounded-lg'><a onClick={() => handleMenuItemClick('National Geographic')}>National Geographic</a></li>
                                    <li className='hover:bg-red-400 rounded-lg'><a onClick={() => handleMenuItemClick('Tech Innovations')}>Tech Innovations</a></li>
                              </ul>
                        </div>
                  </div>
                  <div>
                        <h2 className='text-center text-4xl text-[#E31C25] font-semibold mt-12' >All Article</h2>
                  </div>

                  {/* infiniti Loop code start  */}

                  <InfiniteScroll
                        dataLength={filteredData.length}
                        next={fetchMoreData}
                        hasMore={true} 
                        loader={showLoader ?'' : null }
                  >
                        <div className='grid gird-col-1 md:grid-cols-3 mt-8 gap-8'>
                              {filteredData.map((data, index) => (
                                    <PublisherCard key={index} data={data} userHasSubscription={userHasSubscription} showLoader={showLoader}/>
                              ))}
                              {article
                                    .filter(df => !searchInput ? true : df.title.toUpperCase() === searchInput.toUpperCase())
                                    .map(data => <ALLArticleCard key={data._id} data={data} userHasSubscription={userHasSubscription}></ALLArticleCard>)
                              }
                        </div>
                  </InfiniteScroll>


                  {/* infiniti loop code end   */}


            </div>
      );
};

export default AllArticle;