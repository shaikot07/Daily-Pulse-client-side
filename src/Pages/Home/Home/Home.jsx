import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slaider from '../../../Component/Slaider/Slaider';
import UserCounter from '../UserCounter/UserCounter';
import Priceing from '../UserCounter/Priceing/Priceing';
import Publisher from '../../../Component/Publisher/Publisher';
import SectionTitle from '../../../Component/SectionTitle';


const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>DailyPulse || Home</title>
                  </Helmet>
                  <div className='max-w-6xl mx-auto  mt-10'>
                        <SectionTitle title="Trending News"></SectionTitle>
                  <Slaider></Slaider>
                  </div>
                  <UserCounter></UserCounter>
                  <Priceing></Priceing>
                  <div className='max-w-6xl mx-auto mt-20'>
                        <Publisher></Publisher>
                  </div>
            </div>
      );
};

export default Home;