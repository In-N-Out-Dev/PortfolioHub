import { Fragment } from 'react';

import styled from '@emotion/styled';
import LinkIcon from 'assets/LinkIcon';
import Divider from 'components/common/Divider';
import PROJECT_DATA from 'contents/projectData';

const ProjectContents = () => {
  return (
    <Wrap>
      {PROJECT_DATA.map((project, index) => {
        return (
          <Fragment key={index}>
            <TitleWrap>
              <h3>{project.company}</h3>
              <p>{project.date}</p>
            </TitleWrap>
            <Position>{project.position}</Position>
            <Contents>{project.contnets}</Contents>
            <Project>
              {project.projectFeature.map((feature, index) => {
                return <Feature key={index}>{feature}</Feature>;
              })}
            </Project>
            <RepoLink
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon color={'#E85913'} />
              Gihub repository
            </RepoLink>
            <StackList>
              {project.stack.map((stack, index) => {
                return <Stack key={index}>{stack}</Stack>;
              })}
            </StackList>
            <Divider />
          </Fragment>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.MAIN_FONT};
  margin-bottom: 10rem;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: bold;

  h3 {
    margin-right: 0.4rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakPoint.small} {
    display: block;

    h3 {
      margin-bottom: 2rem;
    }
  }
`;

const Position = styled.p`
  font-size: 1.6rem;
  line-height: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const Contents = styled.p`
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  white-space: normal;
`;

const Project = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const Feature = styled.li`
  margin-left: 2rem;
  line-height: 1.2rem;
  list-style: disc;
`;

const RepoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

const StackList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 6rem;
`;

const Stack = styled.li`
  padding: 1.1rem 1.4rem;
  font-size: 1.4rem;
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.BORDER};
`;

export default ProjectContents;
