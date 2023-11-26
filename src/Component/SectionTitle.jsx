
import { Typewriter } from 'react-simple-typewriter';

const SectionTitle = ({ title }) => {
      return (
            <div>
                  <h2 className='text-4xl font-bold '>
                        <Typewriter words={[title]} />
                  </h2>
                  <div className='h-[5px] w-[100px] bg-[#B80000] mt-1 mb-10'></div>
            </div>
      );
};

export default SectionTitle;
