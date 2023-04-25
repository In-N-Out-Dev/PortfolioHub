import Blog from 'components/blog/Blog';
import Career from 'components/career/Career';
import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';
import Project from 'components/project/Project';
import Skills from 'components/skills/Skills';

import Project from './project/Project';

import Carrer from '@/components/career/Career';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Skills />
      <Blog />
      <Career />
      <Carrer />
      <Project />
    </Layout>
  );
};

export default Home;
