import React from 'react';
import { Helmet } from 'react-helmet-async';
import Slaider from '../../../Component/Slaider/Slaider';
import UserCounter from '../UserCounter/UserCounter';
import Priceing from '../UserCounter/Priceing/Priceing';

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>DailyPulse || Home</title>
                  </Helmet>
                  <div className='max-w-6xl mx-auto  mt-10'>
                  <Slaider></Slaider>
                  </div>
                  <UserCounter></UserCounter>
                  <Priceing></Priceing>
            </div>
      );
};

export default Home;