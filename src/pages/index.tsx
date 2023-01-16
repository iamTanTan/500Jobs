import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { NextPage } from "next";

const Home: NextPage = () => {
  const companies = api.company.getAll.useQuery();

  return (
    <>
      <Head>
        <title>{"Fortune 500 - Tech Jobs"}</title>
        <meta name="description" content="500 Jobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContents />
      <div className="bg-landing relative flex h-screen w-screen flex-col justify-between">
        <div className="flex justify-between py-4 px-8">
          <span>
            Made with &hearts; by{" "}
            <a
              href="https://github.com/iamTanTan"
              className="font-bold text-orange-300 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Tanner Rackow
            </a>
          </span>
          <div className="flex gap-4">
            <a
              href="https://github.com/iamTanTan"
              className="font-bold text-orange-300 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <AuthShowcase />
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button> */}
    </div>
  );
};

const HomeContents = () => {
  const { data } = useSession();

  if (!data)
    return (
      <div className="flex grow flex-col items-center justify-center p-4">
        <div className="relative mb-8 text-6xl font-bold">
          500 Jobs{" "}
          <sup className="absolute top-0 left-full text-xs text-orange-400">
            [BETA]
          </sup>
        </div>
        <div className="mb-8 text-center text-lg">
          An easy way to curate questions from your audience and embed them in
          your OBS.
        </div>
        {/* <Button
          variant="secondary-inverted"
          size="xl"
          onClick={() => signIn("twitch")}
        >
          <div className="flex items-center">
            <FaTwitch /> &nbsp; Sign In
          </div>
        </Button> */}
      </div>
    );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between px-4 pt-4 pb-2 sm:py-4 sm:px-8">
        <div className="relative whitespace-nowrap text-2xl font-bold">
          500 Jobs{" "}
          <sup className="absolute top-0 left-[calc(100%+.25rem)] text-xs font-extrabold text-orange-400">
            [BETA]
          </sup>
        </div>
        {/* <NavButtons userId={data.user?.id!} /> */}
      </div>
      {/* <LazyQuestionsView /> */}
    </div>
  );
};
