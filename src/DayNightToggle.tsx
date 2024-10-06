import { memo, useCallback, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Cloud } from "Icons/Cloud";
import { Moon } from "Icons/Moon";
import { ShootingStar } from "Icons/ShootingStar";
import { Star } from "Icons/Star";
import { Sun } from "Icons/Sun";
import type { ITheme } from "Types";
import "./styles.scss";

export const DayNightToggle = memo(function DayNightToggle({
  theme,
  className,
  onChange,
}: Props) {
  const classes = useClassNames("day-night-toggle", className, theme);
  const onPress = useCallback(() => {
    onChange(theme === "dark" ? "light" : "dark");
  }, [theme, onChange]);
  const label = useMemo(() => {
    return theme === "dark" ? "Enable Light Mode" : "Enable Dark Mode";
  }, [theme]);
  return (
    <button onClick={onPress} className={classes} aria-label={label}>
      <div>
        <div className="clouds">
          <Cloud />
          <Cloud />
        </div>
        <div className="stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <ShootingStar />
        <div className="knob">
          <Sun />
          <Moon />
        </div>
      </div>
    </button>
  );
});

interface Props {
  theme: ITheme;
  className?: string;
  onChange: (state: ITheme) => void;
}
