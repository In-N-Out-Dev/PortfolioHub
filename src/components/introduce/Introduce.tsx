import InfoCard from 'components/common/InfoCard';
import IntroContents from 'components/introduce/IntroContents';
import { SectionProps } from 'types/props';

const Introduce = ({ forwardRef }: SectionProps) => {
  return (
    <div ref={forwardRef}>
      <InfoCard title="INTRODUCE">
        <IntroContents />
      </InfoCard>
    </div>
  );
};

export default Introduce;
