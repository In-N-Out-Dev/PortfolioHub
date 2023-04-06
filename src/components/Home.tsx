import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';

import Carrer from '@/components/career/Career';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Carrer />
    </Layout>
  );
};

export default Home;
