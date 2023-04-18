import Head from 'next/head';
import { useMemo, useState } from 'react';
import { NextPage } from 'next';
import { Pagination, Spinner } from 'flowbite-react';
import { api } from '../utils/api';
import CompanyList from '../components/companyList';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import Layout from '../components/layout/layout';

const Home: NextPage = () => (
  <>
    <Navbar />

    <Head>
      <title>{'500Jobs'}</title>
      <meta name='description' content='500 Jobs' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <HomeContents />

    <Footer />
  </>
);

const HomeContents = () => {
  const { isLoading, error, data } = api.company.getAll.useQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const currentCompanies = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.slice((currentPage - 1) * 20, (currentPage - 1) * 20 + 20);
  }, [currentPage, data]);

  if (isLoading) {
    return (
      <Layout>
        <div className='flex min-h-screen justify-center'>
          <div className='flex items-center '>
            <Spinner size='xl' />
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return <div>{'An Error has occurred: ' + error.message}</div>;
  }

  return (
    <Layout>
      <div className='flex min-h-0 flex-1 flex-col'>
        <CompanyList companies={currentCompanies} />
        <Pagination
          className='flex justify-center'
          currentPage={currentPage}
          totalPages={25}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Layout>
  );
};

export default Home;
