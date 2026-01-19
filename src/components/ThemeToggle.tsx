import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const getTimeBasedTheme = (now = new Date()) => {
  const hour = now.getHours();
  return hour >= 18 || hour < 8 ? "dark" : "light";
};

const getMsUntilNextBoundary = (now = new Date()) => {
  const next = new Date(now);

  if (now.getHours() < 8) {
    next.setHours(8, 0, 0, 0);
  } else if (now.getHours() < 18) {
    next.setHours(18, 0, 0, 0);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(8, 0, 0, 0);
  }

  return Math.max(next.getTime() - now.getTime(), 0);
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    const applyTheme = () => {
      setTheme(getTimeBasedTheme());
    };

    const scheduleNextCheck = () => {
      const delay = getMsUntilNextBoundary();
      timeoutId = setTimeout(() => {
        applyTheme();
        scheduleNextCheck();
      }, delay);
    };

    applyTheme();
    scheduleNextCheck();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [mounted, setTheme]);

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
