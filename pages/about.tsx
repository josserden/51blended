import type { NextPage } from 'next';
import { AboutPage } from '../components/AboutPage';

const About: NextPage = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <AboutPage />
      </div>
    </section>
  );
};

export default About;
