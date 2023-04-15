import type { AppProps } from "next/app";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "@/styles/reset.css";
import "uno.css";
import "@/styles/globals.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import ThemeToggler from "@/components/ThemeToggler";

import Head from "next/head";
import Link from "next/link";
// import { Sora, Inter } from "@next/font/google";
import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Toolkit from "@/components/Toolkit";
import Icon from "@/components/Icon";

// const sora = Sora({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <Head>
        <meta property="og:title" content="" />
        <meta property="og:description" content="Web Development and Design Portfolio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:site_name" content="Hamid's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <div className=" h-full text-lg fw-300 line-height-1.7" style={{ gridTemplateRows: "auto 1fr auto" }}>
            {/* <div className="max-w-page mx-auto">
              <Toolkit />
            </div> */}
            <header>
              <nav className=" py-3  flex justify-between max-w-page mx-auto sm:px-8 px-4">
                <Link href="/" className="c-gray11 " aria-label="Home">
                  <img className="dark:filter-invert" src="/icons/home.svg" height={18} width={18} />
                </Link>
                <ThemeToggler className="c-gray11" />
              </nav>
            </header>
            <main id="main-content">
              <Component {...pageProps} />
              <section
                aria-label="About me"
                id="about"
                className="my-50 rd-xl space-y-4 max-w-page  mx-auto sm:px-8 px-4 "
              >
                <About />
              </section>
              <section aria-label="Contact" id="contact" className="py16 pb32 ">
                <GetInTouch />
              </section>
            </main>
            <footer className=" pb6">
              <div className="mx-auto max-w-page sm:px-8 px-4   pb-3 ">
                <nav className="flex ac  py-4 gap-4 c-gray11 text-note b-t-1 b-gray5">
                  <Link href="/#works">Works</Link>
                  <Link href="/#About Me">About Me</Link>
                  <Link href="/#Contact">Contact</Link>
                </nav>
                <div className="my-6">
                  <p className="text-note c-gray11 text-2xs">
                    Built by love. Powered by WebFlo... Just kidding! Here is
                    {"  "}
                    <a href="https://github.com/vashmeen/portfolio" target="_blank" rel="noreferrer">
                      the source code!
                    </a>
                  </p>
                  <p className="text-note c-gray11 text-2xs">
                    No AI was used during the creation of this website. 100% Pure Natural Intelligence!
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
