# Day Night Toggle
A dark mode toggle with day/night visualizations built for React

![Toggle Demo](media/toggle.gif "Toggle Demo")

## Installation
```bash
npm i @figliolia/day-night-toggle
# or 
yarn add @figliolia/day-night-toggle
```

### Basic Usage
Rendering your toggle:
```tsx
import { ITheme, DayNightToggle } from "@figliolia/day-night-toggle";

const App = () => {
  const [theme, setTheme] = useState<ITheme>("light");
  return (
    <DayNightToggle theme={theme} onChange={setTheme} />
  );
}
```

### Changing the Size of your toggle (CSS)
The toggle scales based on a custom property (`--height`) on the component. It's the only value that needs to change when scaling the dimensions of the toggle:
```css
.my-app .day-night-toggle {
  --height: <your-value>;
}
```