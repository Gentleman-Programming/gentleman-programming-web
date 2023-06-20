/**
 * This is a React component with TypeScript that renders
 * a book icon as an SVG.
 * @returns A React component with TypeScript that renders
 * an SVG icon of a book.
 */
export const ProjectIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 48 48"
      fillRule="nonzero"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon">
        <polygon points="8,10 26,10 26,6 4,6 4,42 30,42 30,38 8,38 	" />
        <path d="M32,34.701l6,7.5l6-7.5V6H32V34.701z M38,35.799l-2-2.5V18h4v15.299L38,35.799z M40,10v4h-4v-4H40z" />
        <polygon points="21,13.856 17.229,17.627 15.343,15.742 12.516,18.571 17.229,23.283 23.828,16.685 	" />
        <polygon points="15.343,25.742 12.516,28.571 17.229,33.283 23.828,26.685 21,23.856 17.229,27.627 	" />
      </g>
    </svg>
  );
};
