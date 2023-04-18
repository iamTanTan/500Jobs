import React from 'react';

const footer = () => {
  return (
    <div className='h-full'>
      <div className='relative flex w-screen flex-col justify-between bg-primary-50 dark:bg-midnight dark:text-white'>
        <div className='flex justify-between py-6 px-8'>
          <span>
            Made with &hearts; by{' '}
            <a
              href='https://github.com/iamTanTan'
              className='font-bold hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Tanner Rackow
            </a>
          </span>
          <div className='flex gap-4'>
            <a
              href='https://github.com/iamTanTan'
              className='font-bold hover:underline'
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
