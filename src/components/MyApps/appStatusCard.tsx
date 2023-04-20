import { Application } from '@prisma/client';
import { Card } from 'flowbite-react';
import { api } from '../../utils/api';
import { useState } from 'react';
import AppUpdateForm from './appUpdateForm';

interface MyAppsProps {
  app: Application;
}

const AppStatusCard: React.FC<MyAppsProps> = ({ app }) => {
  const [showUpdateForm, setShowUpdateFrom] = useState(false);

  const { data: companyName, isLoading } = api.company.getCompanyName.useQuery({
    companyId: app.companyId,
  });

  return (
    <>
      <Card
        className='mt-3  bg-white shadow-xl  dark:text-white dark:hover:bg-slate-700 dark:md:bg-slate-800'
        onClick={() => setShowUpdateFrom(!showUpdateForm)}
      >
        <div className='flex flex-col'>
          <div className='rounded-md'>
            <div className='text-lg font-bold '>{app.position}</div>
            <div className='md:flex md:justify-between'>
              <div className='flex pt-2'>
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
                {isLoading ? '...' : companyName}
              </div>
              <div className='flex pt-2'>
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
          </div>
        </div>
        <div className='flex flex-col'>
          <div>Status: {app.status}</div>
          <div>Date: {app.date ? app.date?.toLocaleDateString() : ''}</div>
        </div>
      </Card>
      {showUpdateForm ? (
        <AppUpdateForm appId={app.id} status={app.status} date={app.date} notes={app.notes} />
      ) : (
        <></>
      )}
    </>
  );
};

export default AppStatusCard;
