import { memo } from "react";
import type { Propless } from "Types";

export const Cloud = memo(
  function Cloud(_: Propless) {
    return (
      <svg
        className="cloud-icon"
        viewBox="0 0 56 56"
        aria-hidden={true}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M 12.2618 45.5195 L 41.3477 45.5195 C 48.7772 45.5195 54.5195 39.8945 54.5195 32.6992 C 54.5195 25.4102 48.5195 19.9492 40.5743 20.0195 C 37.5743 13.9727 32.0665 10.4805 25.5743 10.4805 C 16.9259 10.4805 9.6368 17.3008 8.9571 26.0430 C 4.4102 27.2851 1.4805 31.1055 1.4805 35.7227 C 1.4805 41.5352 5.8399 45.5195 12.2618 45.5195 Z" />
      </svg>
    );
  },
  () => true,
);
