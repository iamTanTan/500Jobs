import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import { api } from '../utils/api';
import { Spinner } from 'flowbite-react';
import AppStatusCard from '../components/MyApps/appStatusCard';
import Layout from '../components/layout/layout';

const Application: NextPage = () => (
  <>
    <Navbar />

    <Head>
      <title>{'500Jobs'}</title>
      <meta name='description' content='500 Jobs' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <MyAppsContent />

    <Footer />
  </>
);

const MyAppsContent = () => {
  const { data, isLoading, error } = api.application.getAll.useQuery();

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
      <div className='min-h-screen bg-primary-50 px-4 py-4 dark:bg-midnight'>
        {data.map((d, i) => {
          return <AppStatusCard key={i} app={d} />;
        })}
      </div>
    </Layout>
  );
};

export default Application;
