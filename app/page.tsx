import Games from '@/components/Games';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import About from '@/components/About';
import Head from '@/components/Head';

export default async function Home() {
  return (
    <>
      <Header />
      <Head/>
      <About />
      <Games />
      <Contacts />
    </>
  );
}