import Head from 'next/head';
import { NextPage } from 'next';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar';
import ApplicationForm from '../components/application/applicationForm';

const Application: NextPage = () => (
  <>
    <Navbar />
    <hr />
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
    <div className='mt-4'>
      <ApplicationForm />
    </div>
  );
};

export default Application;
