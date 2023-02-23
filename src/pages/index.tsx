import Head from 'next/head';
import { useMemo, useState } from 'react';

import { NextPage } from 'next';
import { Pagination, Spinner } from 'flowbite-react';
import { api } from '../utils/api';
import CompanyList from '../components/companyList';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';

const Home: NextPage = () => (
  <>
    <Navbar />
    <hr />
    <Head>
      <title>{'500Jobs'}</title>
      <meta name='description' content='500 Jobs' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <HomeContents />

    <Footer />
  </>
);

export default Home;

const HomeContents = () => {
  const companies = api.company.getAll.useQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const currentCompanies = useMemo(() => {
    if (!companies.data) {
      return [];
    }

    return companies.data.slice((currentPage - 1) * 20, (currentPage - 1) * 20 + 20);
  }, [currentPage, companies]);

  if (!companies.data) {
    return (
      <div className='flex justify-center'>
        <Spinner size='xl' />
      </div>
    );
  }

  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <CompanyList companies={currentCompanies} />
      <Pagination
        className='flex justify-center'
        currentPage={currentPage}
        totalPages={25}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
