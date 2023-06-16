import Blog from 'components/blog/Blog';
import Career from 'components/career/Career';
import Layout from 'components/common/Layout';
import Contact from 'components/contact/Contact';
import Introduce from 'components/introduce/Introduce';
import Portfolio from 'components/portfolio/Portfolio';
import Project from 'components/project/Project';
import Skills from 'components/skills/Skills';

const Home = () => {
  return (
    <Layout>
      <Introduce />
      <Career />
      <Project />
      <Skills />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </Layout>
  );
};

export default Home;
