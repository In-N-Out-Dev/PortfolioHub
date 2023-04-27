interface LinkIconProps {
  color: string;
}

const LinkIcon = ({ color }: LinkIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 7V9H7C5.34315 9 4 10.3431 4 12C4 13.5977 5.24892 14.9037 6.82373 14.9949L7 15H11V17H7C4.23858 17 2 14.7614 2 12C2 9.31125 4.12231 7.11818 6.78311 7.00462L7 7H11ZM13 7V9H17C18.6569 9 20 10.3431 20 12C20 13.5977 18.7511 14.9037 17.1763 14.9949L17 15H13V17H17C19.7614 17 22 14.7614 22 12C22 9.31125 19.8777 7.11818 17.2169 7.00462L17 7H13ZM16 11H8V13H16V11Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkIcon;
