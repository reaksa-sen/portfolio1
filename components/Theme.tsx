import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import classNames from "classnames";

const Theme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={toggleTheme}
      className=" transition-all duration-100 dark:bg-gray-700 bg-gray-50 text-2xl md:text-4xl relative w-12 h-6 rounded-2xl dark:border-0 border cursor-pointer"
    >
      <div
        className={classNames(
          "dark:bg-black bg-white rounded-full w-fit absolute mx-1 top-[50%] -translate-y-[50%] transform duration-500",
          theme === "dark" ? "right-0" : "left-0"
        )}
      >
        {currentTheme === "dark" ? (
          <IconMoonStars width={20} height={20} className="p-0.5" />
        ) : (
          <IconSun width={20} height={20} className="p-0.5" />
        )}
      </div>
    </div>
  );
};

export default Theme;
