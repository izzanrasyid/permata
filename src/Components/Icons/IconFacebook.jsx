import React from "react";

const IconFacebook = ({ color }) => {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
      <path d="M5 5H7.5L7.1875 7.5H5V15H1.75781V7.5H0V5H1.75781V3.32031C1.75781 2.22656 2.03125 1.39974 2.57813 0.839844C3.125 0.279948 4.03646 0 5.3125 0H7.5V2.5H6.17187C5.67708 2.5 5.35807 2.57813 5.21484 2.73437C5.07161 2.89063 5 3.15104 5 3.51563V5Z" fill="black"/>
      <mask id="mask0_2465_25" maskUnits="userSpaceOnUse" x="0" y="0" width="8" height="15">
      <path d="M5 5H7.5L7.1875 7.5H5V15H1.75781V7.5H0V5H1.75781V3.32031C1.75781 2.22656 2.03125 1.39974 2.57813 0.839844C3.125 0.279948 4.03646 0 5.3125 0H7.5V2.5H6.17187C5.67708 2.5 5.35807 2.57813 5.21484 2.73437C5.07161 2.89063 5 3.15104 5 3.51563V5Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2465_25)">
      <rect x="-13.334" y="-8" width="33.3333" height="30.1205" rx="3" fill={color || "black"}/>
      </g>
      </g>
    </svg>
  );
};

export default IconFacebook;