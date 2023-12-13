
import { Helmet } from 'react-helmet-async';
import Slaider from '../../../Component/Slaider/Slaider';
import UserCounter from '../UserCounter/UserCounter';
import Priceing from '../UserCounter/Priceing/Priceing';
import Publisher from '../../../Component/Publisher/Publisher';
import SectionTitle from '../../../Component/SectionTitle';
import MarQuey from '../../../Component/MarQuey/MarQuey';
import HelpHome from '../../../Component/Help-Home/HelpHome';
import MostRead from '../../../Component/MostRead/MostRead';
import TesrtContact from '../../Shared/TesrtContact';


const Home = () => {

      return (
            <div className='px-6'>
                  <Helmet>
                        <title>DailyPulse || Home</title>
                  </Helmet>
                  <MarQuey></MarQuey>
                  <div>

                  </div>
                  <div className='max-w-6xl mx-auto  mt-10'>
                        <SectionTitle title="Trending News"></SectionTitle>
                        <Slaider></Slaider>
                  </div>
                  <div className='max-w-6xl mx-auto mt-20'>
                        <SectionTitle title="Latest News"></SectionTitle>
                        <HelpHome></HelpHome>
                  </div>
                  <UserCounter></UserCounter>
                  <Priceing></Priceing>
                  <div className='max-w-6xl mx-auto mt-20'>
                        <Publisher></Publisher>
                  </div>
                  <div className='max-w-6xl mx-auto mt-20'>
                        <SectionTitle title="Most read"></SectionTitle>
                        <MostRead></MostRead>
                  </div>
                  <div className='max-w-6xl mx-auto mt-20'>
                  <SectionTitle title='Reach Out'></SectionTitle>
                        <TesrtContact></TesrtContact>
                  </div>
            </div>




      );
};

export default Home;