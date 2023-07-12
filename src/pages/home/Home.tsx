import { RefObject, useEffect, useRef } from 'react';

import PageTitle from 'components/PageTitle/PageTitle';
import Blog from 'components/blog/Blog';
import Career from 'components/career/Career';
import Layout from 'components/common/Layout';
import Contact from 'components/contact/Contact';
import Introduce from 'components/introduce/Introduce';
import { ModalSwitcher } from 'components/modal';
import Portfolio from 'components/portfolio/Portfolio';
import Project from 'components/project/Project';
import Skills from 'components/skills/Skills';
import { MENU_LIST } from 'contents';
import { useActiveSectionStore } from 'stores/useActiveSectionStore';

const Home = () => {
  const { setActiveSection } = useActiveSectionStore((state) => ({
    setActiveSection: state.setActiveSection,
  }));

  const refs: { [key: string]: RefObject<HTMLDivElement> } = MENU_LIST.reduce<{
    [key: string]: RefObject<HTMLDivElement>;
  }>((acc, value) => {
    acc[value] = useRef<HTMLDivElement>(null);
    return acc;
  }, {});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        MENU_LIST.forEach((menu) => {
          if (entry.target === refs[menu].current) {
            setActiveSection(menu);
          }
        });
      },
      { threshold: 0.6 },
    );

    Object.values(refs).forEach((ref) => {
      if (!ref.current) return;
      observer.observe(ref.current as HTMLDivElement);
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (!ref.current) return;
        observer.unobserve(ref.current as HTMLDivElement);
      });
    };
  }, [refs]);

  return (
    <Layout>
      <ModalSwitcher />
      <PageTitle />
      <Introduce forwardRef={refs['INTRODUCE']} />
      <Career forwardRef={refs['CAREER']} />
      <Project forwardRef={refs['PROJECT']} />
      <Skills forwardRef={refs['SKILLS']} />
      <Portfolio forwardRef={refs['PORTFOLIO']} />
      <Blog forwardRef={refs['BLOG']} />
      <Contact forwardRef={refs['CONTACT']} />
    </Layout>
  );
};

export default Home;
