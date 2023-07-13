import InfoCard from 'components/common/InfoCard';
import { SectionProps } from 'types/props';

import ProjectContents from './ProjectContents';

const Project = ({ forwardRef }: SectionProps) => {
  return (
    <div ref={forwardRef}>
      <InfoCard title="PROJECT">
        <ProjectContents />
      </InfoCard>
    </div>
  );
};

export default Project;
