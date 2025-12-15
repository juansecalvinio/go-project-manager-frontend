import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/shadcn-ui/components/toggle";
import { useTheme } from "@/ui/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle theme"
      size="sm"
      variant="outline"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
