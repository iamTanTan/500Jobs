import React from 'react';
import { Company } from '@prisma/client';
import CompanyCard from './companyCard';

interface CompanyListProps {
  companies: Company[];
}

const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
  return (
    <div className='grid grid-cols-6 gap-4'>
      <div className='col-span-4 col-start-2'>
        <h1 className='my-4 text-center text-3xl font-bold dark:text-white dark:underline'>
          500 List
        </h1>
        {companies.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
