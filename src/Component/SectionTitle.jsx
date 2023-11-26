import React from 'react';

const SectionTitle = ({title}) => {
      return (
            <div>
                  <h2 className='text-4xl font-bold '>{title}</h2>
                  <div className='h-[5px] w-[100px] bg-[#B80000] mt-1 mb-10'></div>
            </div>
      );
};

export default SectionTitle;