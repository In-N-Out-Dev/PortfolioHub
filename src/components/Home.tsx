import Blog from 'components/blog/Blog';
import Career from 'components/career/Career';
import Layout from 'components/common/Layout';
import Introduce from 'components/introduce/Introduce';
import Project from 'components/project/Project';
import Skills from 'components/skills/Skills';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Blog />
      <Career />
      <Project />
      {/* <Skills /> */}
    </Layout>
  );
};

export default Home;
