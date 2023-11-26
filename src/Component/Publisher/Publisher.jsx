import React from 'react';
import usePublisher from '../../hooks/usePublisher';
import SectionTitle from '../SectionTitle';

const Publisher = () => {
      const [publisher] = usePublisher()
      return (
            <div >
                  <SectionTitle title="Our Publisher"></SectionTitle>
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        {publisher.map((item, index) => (
                              <div key={index} className="card w-[250px] bg-base-100 shadow-xl image-full">
                                    <figure>
                                          <img src={item.image} alt={item.publisherName} />
                                    </figure>

                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Publisher;