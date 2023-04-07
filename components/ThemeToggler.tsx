import type {} from "next-themes";
import { HTMLAttributes } from "react";
import useColorScheme from "@/hooks/useColorScheme";

const ThemeToggler = ({ ...props }: HTMLAttributes<HTMLButtonElement>) => {
  const { theme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  if (!hasMountedInBrowser)
    return (
      <button {...props}>
        {/* <span className="bf-i-ph-circle-half sr-only sm:not-sr-only capitalize">Auto</span> */}
        <img className='c-gray11' src="/icons/yinyang.svg" alt="" aria-hidden="true" height={20} width={20} />
      </button>
    );

  return (
    <button onClick={(e) => toggleTheme()} className="" {...props}>
      {theme === "system" && (
        <>
          {/* <span className="bf-i-ph-circle-half "></span> */}
          <img
            className="c-gray11 dark:filter-invert"
            src="/icons/yinyang.svg"
            alt=""
            aria-hidden="true"
            height={20}
            width={20}
          />
          <span className="sr-only">Auto</span>
        </>
      )}
      {theme === "dark" && (
        <>
          {/* <span className="bf-i-ph-moon "></span> */}
          <img
            className="c-gray11 dark:filter-invert"
            src="/icons/moon.svg"
            alt=""
            aria-hidden="true"
            height={20}
            width={20}
          />
          <span className="sr-only">Dark</span>
        </>
      )}
      {theme === "light" && (
        <>
          {/* <span className="bf-i-ph-sun "></span> */}
          <img
            className="c-gray11 dark:filter-invert"
            src="/icons/sun.svg"
            alt=""
            aria-hidden="true"
            height={20}
            width={20}
          />
          <span className="sr-only">Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggler;
