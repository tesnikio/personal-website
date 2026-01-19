import { ThemeProvider } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const ThemeToggleIsland = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <ThemeToggle />
  </ThemeProvider>
);

export default ThemeToggleIsland;
