# Day Night Toggle
A dark mode toggle with day/night visualizations built for React

<video title="Demo" src="https://github.com/user-attachments/assets/7166c32d-6ef5-41cc-a95d-cf62b111a4c5" height="auto" width="auto"></video>

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

### Browser Support
This package relies on CSS `@property` rules as well as CSS custom properties in order to function. For more detailed information on specific browser version support, please reference the [Can I Use @property](https://caniuse.com/?search=%40property) and [Can I Use CSS Custom Properties](https://caniuse.com/?search=CSS%20custom%20properties) support tables.
