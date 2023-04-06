import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';

import Project from './project/Project';

import Carrer from '@/components/career/Career';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Carrer />
      <Project />
    </Layout>
  );
};

export default Home;
