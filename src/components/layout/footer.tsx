import React from 'react';

const footer = () => {
  return (
    <div className='h-10'>
      <div className='relative flex w-screen flex-col justify-between dark:bg-midnight dark:text-white'>
        <div className='flex justify-between py-6 px-8'>
          <span>
            Made with &hearts; by{' '}
            <a
              href='https://github.com/iamTanTan'
              className='font-bold text-orange-300 hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Tanner Rackow
            </a>
          </span>
          <div className='flex gap-4'>
            <a
              href='https://github.com/iamTanTan'
              className='font-bold text-orange-300 hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
