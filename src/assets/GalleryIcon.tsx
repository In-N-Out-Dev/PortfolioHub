const GalleryIcon = ({ width = 28, height = 28, color = '#0d0d0d' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.267 12.3333V0.666613H15.6004V12.3333H27.267ZM12.267 0.666794V12.3335H0.600342V0.666794H12.267ZM12.267 27.3333V15.6666H0.600358V27.3333H12.267ZM27.267 27.3333V15.6666H15.6004V27.3333H27.267ZM8.93356 18.9998H3.93356V23.9998H8.93356V18.9998ZM18.9336 18.9998H23.9336V23.9998H18.9336V18.9998ZM8.93356 3.99982H3.93356V8.99982H8.93356V3.99982ZM18.9336 3.99982H23.9336V8.99982H18.9336V3.99982Z"
        fill={color}
      />
    </svg>
  );
};

export default GalleryIcon;
