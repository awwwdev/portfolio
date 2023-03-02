import useColorScheme from "@/hooks/useColorScheme";

const GetInTouch = () => {
  const { resolvedTheme } = useColorScheme();

  return (
    <>
      <div className=" max-w-page mx-auto sm:px-8 px-4 space-y-8  ">
        <h2 className="H1  5">Let&apos;s get in touch</h2>

        <p className="c-gray11">Feel free to contact me. I try to reach back to you soon.</p>
        <ul className="flex flex-wrap gap-12 ac ">
          <li>
            <a
              href="mailto:hamidpm@pm.me"
              className="btn-prm fw-700 py-4  px-12 rd-4 flex ac  !mt-20  bf-i-ph-envelope-simple-bold before:opacity-100"
            >
              Email Me
            </a>
          </li>
          <li>
            <a
              href="https/github.com/vashmeen"
              className="c-gray11 !mt-20  flex ac  bf-i-logos-github-icon before:opacity-100 @dark:before:filter-invert-100    "
            >
              My GitHub
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/hamidkdesign"
              className="c-gray11 !mt-20  flex ac  bf-i-logos-dribbble-icon before:opacity-100    "
            >
              My Dribble
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GetInTouch;
