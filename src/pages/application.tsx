import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import ApplicationForm from '../components/application/applicationForm';
import Layout from '../components/layout/layout';

const Application: NextPage = () => (
  <>
    <Navbar />

    <Head>
      <title>{'500Jobs'}</title>
      <meta name='description' content='500 Jobs' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <ApplicationContent />

    <Footer />
  </>
);

const ApplicationContent = () => {
  return (
    <Layout>
      <div className='h-screen pt-4'>
        <ApplicationForm />
      </div>
    </Layout>
  );
};

export default Application;
