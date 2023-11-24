import React from 'react';
import CountUp from 'react-countup';
const UserCounter = () => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto'>

                  <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/8XbtKKD/counter-cart.jpg" alt="" /></figure>
                        <div className="card-body text-center">
                              <h2 className='text-3xl font-bold'>All User</h2>
                              <CountUp start={0} end={1000} delay={0}>
                                    {({ countUpRef }) => (
                                          <div className='text-4xl'>
                                                <span ref={countUpRef} />
                                          </div>
                                    )}
                              </CountUp>
                        </div>
                  </div>
                  <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/8XbtKKD/counter-cart.jpg" alt="" /></figure>
                        <div className="card-body text-center">
                              <h2 className='text-3xl font-bold'>Normal User</h2>
                              <CountUp start={0} end={800} delay={0}>
                                    {({ countUpRef }) => (
                                          <div className='text-4xl'>
                                                <span ref={countUpRef} />
                                          </div>
                                    )}
                              </CountUp>
                        </div>
                  </div>
                  <div className="card  bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/8XbtKKD/counter-cart.jpg" alt="" /></figure>
                        <div className="card-body text-center">
                              <h2 className='text-3xl font-bold'>Premium User</h2>
                              <CountUp start={0} end={500} delay={0}>
                                    {({ countUpRef }) => (
                                          <div className='text-4xl'>
                                                <span ref={countUpRef} />
                                          </div>
                                    )}
                              </CountUp>
                        </div>
                  </div>
            </div>
      );
};

export default UserCounter;