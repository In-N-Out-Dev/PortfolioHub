import CareerContents from 'components/career/CareerContents';
import InfoCard from 'components/common/InfoCard';
import { SectionProps } from 'types/props';

const Career = ({ forwardRef }: SectionProps) => {
  return (
    <div ref={forwardRef}>
      <InfoCard title="CAREER">
        <CareerContents />
      </InfoCard>
    </div>
  );
};

export default Career;
