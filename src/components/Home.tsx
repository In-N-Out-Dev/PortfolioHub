import Blog from 'components/blog/Blog';
import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';
import Skills from 'components/skills/Skills';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Skills />
      <Blog />
    </Layout>
  );
};

export default Home;
