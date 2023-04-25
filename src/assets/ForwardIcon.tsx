import type { IconProps } from '@/types/props';

const ForwardIcon = ({ width = 21, height = 20, color = '#0D0D0D' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.0820339 11.25L15.2945 11.25L8.30703 18.2375L10.082 20L20.082 10L10.082 1.03312e-06L8.31953 1.7625L15.2945 8.75L0.0820341 8.75L0.0820339 11.25Z"
        fill={color}
      />
    </svg>
  );
};

export default ForwardIcon;
