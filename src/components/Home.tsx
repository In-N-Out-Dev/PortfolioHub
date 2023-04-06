import Carrers from 'components/carrer/Carrers';
import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Carrers />
    </Layout>
  );
};

export default Home;
