import Blog from 'components/blog/Blog';
import Carrers from 'components/carrer/Carrers';
import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';
import Skills from 'components/skills/Skills';

import Project from './project/Project';

import Carrer from '@/components/career/Career';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Skills />
      <Blog />
      <Carrers />
      <Carrer />
      <Project />
    </Layout>
  );
};

export default Home;
