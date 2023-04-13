const ListIcon = ({ width = 28, height = 24, color = '#0d0d0d' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.2665 3.66654V0.333206H0.599868V3.66654H27.2665ZM27.2663 10.3329V13.6662H0.599609V10.3329H27.2663ZM27.2663 20.3329V23.6662H0.599609V20.3329H27.2663Z"
        fill={color}
      />
    </svg>
  );
};

export default ListIcon;
