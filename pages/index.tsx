import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dale</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <div className="flex flex-col items-center mt-32 ">
          <button
            className=" px-6 py-4 bg-primary-green text-white rounded-md"
            onClick={() => Router.push('/meeting')}
          >
            Start meeting
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
