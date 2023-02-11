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
import { Sora } from "@next/font/google";

const sora = Sora({ subsets: ["latin"] });

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
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <div
            className={`${sora.className} max-w-page mx-auto sm:px-8 h-full grid px-4`}
            style={{ gridTemplateRows: "auto 1fr auto" }}
          >
            <header>
              <nav className=" py-3  flex justify-between">
                <Link href="/" className="bf-i-ph-house-simple fw-900" title="Home" />
                <ThemeToggler className="" />
              </nav>
            </header>
            <main>
              <Component {...pageProps} />
            </main>
            <footer className="">
              <div className="mx-auto  c-gray11 pb-3">
                <div className="flex ac jc py-3">
                  {" "}
                  <Link className="" href="/">
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
                <div className="flex jc ac">
                  <p className="text-note text-2xs">Built, of course by myself :|</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
