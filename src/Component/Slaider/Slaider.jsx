import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slaider = () => {
      return (
            <div>
                  <>
                        <Swiper
                              spaceBetween={30}
                              centeredSlides={true}
                              autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                              }}
                              pagination={{
                                    clickable: true,
                              }}
                              navigation={true}
                              modules={[Autoplay, Pagination, Navigation]}
                              className="mySwiper"
                        >
                             
                              <SwiperSlide>
                                    <div className='mx-auto w-full'>
                                          <img className='h-[300px] w-full' src="https://i.ibb.co/ZTPJPnd/slaider-01.webp" alt="" />
                                          <h2 className='md:absolute -mt-16  font-bold ml-6 text-white sm:text-1xl md:text-5xl'>Israeli forces detain director of Gaza's al-Shifa Hospital</h2>
                                    </div>
                              </SwiperSlide>
                             
                              <SwiperSlide>
                              <div className='mx-auto w-full'>
                                          <img className='h-[300px] w-full' src="https://i.ibb.co/HGK33Q5/slaider-02.webp" alt="" />
                                          <h2 className='md:absolute -mt-16  font-bold ml-6 text-black sm:text-1xl md:text-5xl'>Israeli forces detain director of Gaza's al-Shifa Hospital</h2>
                                    </div>
                              </SwiperSlide>
                              <SwiperSlide>
                              <div className='mx-auto w-full'>
                                          <img className='h-[300px] w-full' src="https://i.ibb.co/ZTPJPnd/slaider-01.webp" alt="" />
                                          <h2 className='md:absolute -mt-16  font-bold ml-6 text-white sm:text-1xl md:text-5xl'>Israeli forces detain director of Gaza's al-Shifa Hospital</h2>
                                    </div>
                              </SwiperSlide>
                             
                        </Swiper>
                  </>

            </div>
      );
};

export default Slaider;