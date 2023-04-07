import useColorScheme from "@/hooks/useColorScheme";

const GetInTouch = () => {
  const { resolvedTheme } = useColorScheme();

  return (
    <>
      <div className=" max-w-page mx-auto sm:px-8 px-4 space-y-8  ">
        <h2 className="H1  5">Let&apos;s get in touch</h2>

        <p className="c-gray11">Feel free to contact me. I try to reach back to you soon.</p>
        <ul className="flex flex-wrap gap-4 ac ">
          <li>
            <a
              href="mailto:hamidpm@pm.me"
              className="b-1  fw-500  rd-xl b-orangeA-6  dark:b-orangeA-7 c-prm11 bg-gradient-to-r from-prm1 to-sand1  active:(b-orangeA-8 from-prm5 to-sand2) hover:(b-orangeA-7 from-prm2 to-prm1 )  focus:(b-orangeA-8 from-prm4 to-prm2 ) disabled:(btn-disabled)  bg-origin-border  c-prm11  fw-500 py-4 b-1.5  px-8 rd-xl flex gap-4 ac  !mt-20 "
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.666 27.3333H9.33268C5.33268 27.3333 2.66602 25.3333 2.66602 20.6667V11.3333C2.66602 6.66666 5.33268 4.66666 9.33268 4.66666H22.666C26.666 4.66666 29.3327 6.66666 29.3327 11.3333V20.6667C29.3327 25.3333 26.666 27.3333 22.666 27.3333Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.5 10L18.494 15.3333C17.1207 16.4267 14.8673 16.4267 13.494 15.3333L7.5 10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {/* <img src="/icons/email.svg" alt="" height={20} width={20} className="c-orange11" /> */}
              Email Me
            </a>
          </li>
          <li>
            <a
              href="https/github.com/vashmeen"
              className="c-gray11 before:c-gray12  bg-gradient-to-r from-gray1 to-transparent hover:(b-grayA-3  from-gray2 to-gray1 ) bg-origin-border py-4 b-1.5 b-grayA-2  px-8 rd-xl   !mt-20  flex ac  bf-i-logos-github-icon before:opacity-80 dark:before:filter-invert-100    "
            >
              My GitHub
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/hamidkdesign"
              className="c-gray11 !mt-20 c-gray11 before:c-gray12 bg-gradient-to-r from-gray1 to-transparent hover:(b-grayA-3 from-gray2 to-gray1 ) bg-origin-border py-4 b-1.5 b-grayA-2  px-8 rd-xl  flex ac  bf-i-logos-dribbble-icon before:opacity-100    "
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
