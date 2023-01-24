import Head from "next/head";
import { useSession } from "next-auth/react";
import { api } from "../utils/api";
import { NextPage } from "next";
import { Spinner } from "flowbite-react";
import CompanyList from "../components/companyList";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>{"Fortune 500 - Tech Jobs"}</title>
        <meta name="description" content="500 Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContents />

      <Footer />
    </>
  );
};

export default Home;

const HomeContents = () => {
  const companies = api.company.getAll.useQuery();

  if (!companies.data) {
    return <Spinner aria-label="Extra large spinner example" size="xl" />;
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <CompanyList companies={companies.data} />
    </div>
  );
};
