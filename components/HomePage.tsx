import React, { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div className='bg-white flex relative z-20 items-center rounded-lg'>
      <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-8'>
        <div className='flex flex-col'>
          <h1 className='font-light w-full uppercase text-center text-4xl sm:text-5xl  text-gray-800'>
            The React Framework for Production
          </h1>
          <h2 className='font-light max-w-2xl mx-auto w-full text-xl  text-gray-500 text-center py-8'>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static &amp; server
            rendering, TypeScript support, smart bundling, route pre-fetching,
            and more. No config needed.
          </h2>
          <div className='flex items-center justify-center mt-4'>
            <button className='uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900'>
              Get started
            </button>
            <a className='uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800  hover:bg-gray-800 hover:text-white text-md'>
              Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
