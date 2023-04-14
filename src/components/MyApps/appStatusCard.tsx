import { Application } from '@prisma/client';
import { Card } from 'flowbite-react';

interface MyAppsProps {
  app: Application;
}

const AppStatusCard: React.FC<MyAppsProps> = ({ app }) => {
  return (
    <Card className='my-3 mb-4 bg-white shadow-xl  dark:text-white dark:hover:bg-slate-700 dark:md:bg-slate-800'>
      <div className='flex flex-col items-start pl-2 outline-dashed '>
        <div className='text-lg font-medium '>{app.position}</div>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.75}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
            />
          </svg>
          {app.companyId}
        </div>
        <div className='flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.75}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            />
          </svg>
          {app.location}
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='flex justify-center'>Applied</div>
          <div className='flex justify-center'></div>
          <div className='flex justify-center'>
            {app.status === 'Applied' ? app.date?.toDateString() : ''}
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='flex justify-center'>Screen</div>
          <div className='flex justify-center'></div>
          <div className='flex justify-center'>
            {app.status === 'Screen' ? app.date?.toDateString() : ''}
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='flex justify-center'>Interview</div>
          <div className='flex justify-center'></div>
          <div className='flex justify-center'>
            {app.status === 'Interview' ? app.date?.toDateString() : ''}
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='flex justify-center'>Offer</div>
          <div className='flex justify-center'></div>
          <div className='flex justify-center'>
            {app.status === 'Offer' ? app.date?.toDateString() : ''}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AppStatusCard;
