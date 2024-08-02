import { memo } from "react";
import type { Propless } from "Types";

export const Moon = memo(
  function Moon(_: Propless) {
    return (
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={true}
        role="img"
        className="moon"
        preserveAspectRatio="xMidYMid meet">
        <radialGradient
          id="IconifyId17ecdb2904d178eab14353"
          cx="63.55"
          cy="56.074"
          r="68.672"
          gradientUnits="userSpaceOnUse">
          <stop offset=".306" stopColor="#6092ab" />
          <stop offset=".472" stopColor="#5989a1" />
          <stop offset=".749" stopColor="#457287" />
          <stop offset=".843" stopColor="#3d687d" />
        </radialGradient>
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="url(#IconifyId17ecdb2904d178eab14353)"
        />
        <radialGradient
          id="IconifyId17ecdb2904d178eab14354"
          cx="63.702"
          cy="50.155"
          r="85.604"
          gradientUnits="userSpaceOnUse">
          <stop offset=".762" stopColor="#b2ebf2" stopOpacity="0" />
          <stop offset="1" stopColor="#e0f7fa" />
        </radialGradient>
        <circle
          cx="64"
          cy="64"
          r="60"
          fill="url(#IconifyId17ecdb2904d178eab14354)"
        />
        <path
          d="M85.49 59.81c1.53 1.25 4.18 1.39 6.42.44c2.66-1.14 3.87-2.9 3.91-5.65c.04-3.41-2.8-7.05-8.42-7.41c-9.26-.59-12.82 7.71-12.92 8.02c-.22.65.1 1.58 1.95.12c5.63-4.45 7.65-3.71 7.65-3.71s-3.24 4.37 1.41 8.19z"
          fill="#212121"
        />
        <path
          d="M43.26 59.81c1.53 1.25 4.18 1.39 6.42.44c2.66-1.14 3.87-2.9 3.91-5.65c.04-3.41-2.8-7.05-8.42-7.41c-9.26-.59-12.82 7.71-12.92 8.02c-.22.65.1 1.58 1.95.12c5.63-4.45 7.65-3.71 7.65-3.71s-3.24 4.37 1.41 8.19z"
          fill="#212121"
        />
        <path
          d="M80.04 77.94l-.12-.07c-.6-.36-1.39-.29-1.92.16c-1.57 1.34-8.08 3.82-14.01 3.94c-5.93-.12-12.44-2.6-14.01-3.94c-.53-.45-1.31-.53-1.92-.16l-.12.07c-.76.46-.9 1.4-.37 2.08c2.06 2.58 7.52 6.46 16.41 6.59c8.89-.12 14.34-4.01 16.41-6.59c.56-.68.41-1.62-.35-2.08z"
          fill="#212121"
        />
        <path
          d="M61.8 93.24c-.72.21-1.57.75-1.39 1.48c.06.24.22.43.4.6c.57.52 1.31.82 2.05 1.01c2.09.53 4.36.17 6.25-.85c1.09-.59 4.57-3.19 3.8-4.83c-.62-1.33-3.01.52-3.94.91c-2.31.97-4.77.99-7.17 1.68z"
          fill="#274c5e"
        />
        <path
          d="M58.68 72.26c-1.44-1.62-.11-2.46 1.47-1.98c2 .61 5.2.32 6.02-1.48c1.58-3.46-.39-5.41-2.84-11.39c-2.56-6.25.65-13.06 4.35-13.41c2.97-.28 1.98 1.27 1.05 1.93c-1.82 1.3-3.73 5.6-.8 10.42c4.99 8.19 5.4 12.12 2.42 15.98c-1.85 2.4-7.62 4.49-11.67-.07z"
          fill="#274c5e"
        />
        <radialGradient
          id="IconifyId17ecdb2904d178eab14355"
          cx="91.892"
          cy="62.842"
          r="16.37"
          gradientTransform="matrix(.9201 -.3918 .3131 .7354 -12.333 52.628)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#fff9b9" stopOpacity="0" />
        </radialGradient>
        <path
          d="M82.57 72.92c1.55 3.75 7.63 4.79 13.58 2.32c5.95-2.46 9.52-7.5 7.97-11.24c-1.55-3.75-7.63-4.79-13.58-2.32c-5.95 2.46-9.52 7.49-7.97 11.24z"
          opacity=".3"
          fill="url(#IconifyId17ecdb2904d178eab14355)"
        />
        <radialGradient
          id="IconifyId17ecdb2904d178eab14356"
          cx="-2357.148"
          cy="63.126"
          r="16.135"
          gradientTransform="matrix(-.9201 -.3918 -.3131 .7354 -2108.489 -906.767)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#fff9b9" stopOpacity="0" />
        </radialGradient>
        <path
          d="M49.43 72.92c-1.55 3.75-7.63 4.79-13.58 2.32c-5.95-2.46-9.52-7.5-7.97-11.24c1.55-3.75 7.63-4.79 13.58-2.32c5.95 2.46 9.52 7.49 7.97 11.24z"
          opacity=".3"
          fill="url(#IconifyId17ecdb2904d178eab14356)"
        />
      </svg>
    );
  },
  () => true,
);
