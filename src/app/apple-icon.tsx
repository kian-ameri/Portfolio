import { ImageResponse } from "next/og";

// Home-screen icon for iPhones and iPads. Same Geist K as icon.svg; iOS rounds the corners.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="180" height="180">
        <rect width="32" height="32" fill="#000" />
        <path
          fill="#fff"
          d="M8.17 26V6H11.21V15.54L19.62 6H23.33L15.66 14.73L23.83 26H20.25L13.63 16.88L11.21 19.59V26Z"
        />
      </svg>
    ),
    size,
  );
}
