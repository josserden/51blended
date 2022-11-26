import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { HomePage } from '../components/HomePage';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <section className='py-20 h-full'>
      <div className='container flex items-center justify-center h-full'>
        <HomePage />
      </div>
    </section>
  );
};

export default Home;
