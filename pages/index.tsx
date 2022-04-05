import type { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from '../components/home/home-page';
import { MainLayout } from '../components/main-layout';
import { APP_NAME } from '../config';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}

Home.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)


export default Home
