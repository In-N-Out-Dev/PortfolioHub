import { IconProps } from '@/types/Icon';

const MoonIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M553.386667 128a342.186667 342.186667 0 0 0-172.970667 298.666667c0 188.501333 150.272 341.333333 335.616 341.333333 48.896 0 95.402667-10.666667 137.301333-29.781333C784.64 833.877333 673.578667 896 548.224 896 339.712 896 170.666667 724.053333 170.666667 512s169.045333-384 377.557333-384h5.12z"
        fill={color}
      />
    </svg>
  );
};

export default MoonIcon;
