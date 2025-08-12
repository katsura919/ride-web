import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      className="bg-background text-primary border-border border  hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring transition-colors"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-foreground" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-foreground" />
      )}
    </Button>
  );
}