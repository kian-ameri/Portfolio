import { ImageResponse } from "next/og";

// Home-screen icon for iPhones and iPads. Same K as icon.svg; iOS rounds the corners.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180">
        <rect width="32" height="32" fill="#000" />
        <path
          fill="#fff"
          transform="matrix(1.25 0 0 1.25 -4 -4)"
          d="M9 8h3v16H9zM18.2 8h4.2L12 18.4v-4.2zM14.5 15.9l8.1 8.1h-4.2l-6-6z"
        />
      </svg>
    ),
    size,
  );
}
