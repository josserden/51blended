import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '../components/Button';

const News: NextPage = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-4xl font-semibold uppercase text-center text-gray-600 mb-20'>
          News Page
        </h1>
      </div>
    </section>
  );
};

export default News;
