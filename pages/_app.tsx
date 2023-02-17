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
import { Sora, Inter } from "@next/font/google";
import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";

const sora = Sora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
        <meta property="og:description" content="About my website in one sentence" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:site_name" content="my-site0name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <div
            className={`${sora.className}  h-full text-lg fw-300 line-height-1.7 `}
            style={{ gridTemplateRows: "auto 1fr auto" }}
          >
            <header>
              <nav className=" py-3  flex justify-between max-w-page mx-auto sm:px-8grid px-4">
                <Link href="/" className="bf-i-ph-house-simple fw-900" title="Home" />
                <ThemeToggler className="" />
              </nav>
            </header>
            <main>
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
                <nav className="flex ac  py-4 gap-4 c-gray9 text-note b-t-1 b-gray5">
                  <Link href="/#works">Works</Link>
                  <Link href="/#blog">Blog</Link>
                  <Link href="/#About Me">About Me</Link>
                  <Link href="/#Contact">Contact</Link>
                </nav>
                <div className="flex  ac">
                  <p className="text-note c-gray9 text-2xs">
                    Built from fresh Open Source ingredients, of course by myself :|
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
