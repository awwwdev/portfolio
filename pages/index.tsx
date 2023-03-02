import Intro from "@/components/Intro";
import Link from "next/link";
import About from "@/components/About";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useColorScheme from "@/hooks/useColorScheme";
import Toolkit from "@/components/Toolkit";

export default function Home() {
  return (
    <div className=" ">
      <section aria-label="Toolkit" id="toolkit" className="mt-50 rd-xl max-w-page  mx-auto space-y-12 ">
        <Toolkit />
      </section>
      <section aria-label="introduction" className=" rd-xl py-8 min-h-80 max-w-page  mx-auto sm:px-8  px-4">
        <Intro />
      </section>
      <section aria-label="Works" id="works" className="mt-50 rd-xl max-w-page  mx-auto ">
        <div className="flex gap-1 items-baseline sm:px-8  px-4">
          <h2 className="H1">Works</h2>
          <img src="/3d-icons/fire.png" alt="fire" className="w-15 translate-y-2" />
        </div>
        <ul className="mt-20 space-y-12 sm:space-y-32">
          <Darsoon />
          <Dbilia />
          <Momenta />
        </ul>
      </section>
    </div>
  );
}

const Darsoon = () => {
  return (
    <>
      <Card
        logoSrc="/darsoon/logo.png"
        darkLogoSrc="/darsoon/logo-dark.png"
        color="c-orange-11"
        bg="bg-orange4"
        title="DARSOON"
        href="/works/darsoon"
        subtitle={
          <>
            Restarting <br /> a Start-up
          </>
        }
        stack={
          <>
            <StackLogo icon="i-logos-nextjs-icon" title="NEXTjs" />
            <StackLogo icon="i-logos-supabase-icon" title="Supabase" />
            <StackLogo icon="i-logos-react-query-icon" title="React Query" />
            <StackLogo icon="i-logos-unocss" title="UnoCSS" />
          </>
        }
      >
        <ul>
          <li>A Brand new website was created.</li>
          <li>+80k rows from Google Sheets to Supabase migrated</li>
          <li>+100 hours of weekly manual work automated</li>
        </ul>
      </Card>
    </>
  );
};

const Dbilia = () => (
  <Card
    logoSrc="/dbilia/logo.png"
    darkLogoSrc="/dbilia/logo.png"
    color="c-violet11"
    bg="bg-violet4"
    title="DBILIA"
    href="/works/dbilia"
    subtitle={
      <>
        Refactoring
        <br /> the Unreadable
      </>
    }
    stack={
      <>
        <li className="w-[2.5em] h-[2.5em] rd-full flex jc ac bg-grayA-3">
          <img src="/sc-logo2.png" alt="Styled Components" className="w-[1.2em] h-[1.2em] " />
        </li>
        <StackLogo icon="i-logos-sass" title="Sass and CSS" />
        <StackLogo icon="i-logos-react" title="Sass and CSS" />
        <StackLogo icon="i-logos-figma" title="Figma" />
      </>
    }
  >
    <ul>
      <li>Refactored +1000 LoC files with composable components</li>
      <li>Decoupled and improved new user onboarding tour</li>
      <li>Redesigned the whole UI and added Dark Mode</li>
    </ul>
  </Card>
);

type CardProps = {
  title: string;
  logoSrc: string;
  darkLogoSrc: string;
  href: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  stack: React.ReactNode;
  bg?: string;
  color?: string;
};

const Momenta = () => {
  return (
    <Card
      logoSrc="/momenta/logo.png"
      darkLogoSrc="/momenta/logo-dark.png"
      color="c-purple11"
      bg="bg-purple4"
      title="MOMENTA"
      href="/works/momenta"
      subtitle={
        <>
          A One-way Flight &
          <br />
          an Urgent Landing
        </>
      }
      stack={
        <>
          <StackLogo icon="i-logos-nextjs-icon" title="NEXTjs" />
          <StackLogo icon="i-logos-framer" title="Framer Motion" />
          <StackLogo icon="i-logos-figma" title="Figma" />
          {/* <StackLogo icon="i-logos-adobe-after-effects" title="Adobe After Effects" /> */}
        </>
      }
    >
      <ul>
        <li>Ideated and created a low-fidelity prototype</li>
        <li>Created complex and performant scroll animations</li>
        <li>Delivered the whole project in 2 weeks</li>
      </ul>
    </Card>
  );
};

const Card = ({
  logoSrc = "",
  darkLogoSrc = "",
  title = "",
  subtitle = "",
  stack,
  href,
  children = null,
  color = "c-violet11",
  bg = "bg-violet4",
}: // btnColor="bg-violet6"
CardProps) => {
  const { resolvedTheme } = useColorScheme();

  return (
    <article className={`rd-6 overflow-hidden min-h-150 sm:min-h-180 p-6 sm:p-10 flex flex-col ${bg}`}>
      <div>
        <img src={resolvedTheme === "dark" ? darkLogoSrc : logoSrc} alt={title} className="h-5 w-auto lt-sm:mt-1" />
      </div>
      <h3 className={`mt-16 block H1 fw-900 text-4xl sm:text-6xl lh-1.25 ${color} `}>
        <span className="sr-only leading-loose">{title} ,</span>
        {subtitle}
      </h3>
      <ul aria-label="Stack Used" className="mt-8 flex  gap-2">
        {stack}
      </ul>
      <div className="mt-16 text-lg leading-loose c-grayA-11 ls-tighter ">{children}</div>
      <div className="mt-auto flex justify-end ">
        <Link href={href} className={`flex ac jc p4 sm:p6 rd-xl bg-grayA-3  ${color} `}>
          <span className="i-ph-arrow-right inline-block text-3xl sm:text-4xl" />
          <span className="sr-only"> Learn more</span>
        </Link>
      </div>
    </article>
  );
};

const Sleeker = () => {
  return (
    <li>
      <article className="rd-xl overflow-hidden bg-gray2">
        <div className="aspect-4/3 bg-blue3"></div>
        <div className="p-4">
          <h2>Pivoting a failed idea!</h2>
        </div>
      </article>
    </li>
  );
};

const Teaching = () => {
  return (
    <li>
      <article className="rd-xl overflow-hidden bg-gray2">
        <div className="aspect-4/3 bg-blue3"></div>
        <div className="p-4">
          <h2>Teaching Experience: from zero coding experience to Full time Dev</h2>
        </div>
      </article>
    </li>
  );
};

const StackLogo = ({ icon = "", title = "", bgColor = "bg-grayA-3" }) => (
  <li className={`w-[2.5em] h-[2.5em] rd-full flex jc ac ${bgColor} `}>
    <span className={`inline-block ${icon}`}>
      <span className="sr-only">{title}</span>
    </span>
  </li>
);

const MoreAboutMe = () => {
  return (
    <details className=" mt-6 space-y-6">
      <summary className="w-fit p-2 b-gray5 text-tiny-note"> A little more about me</summary>
    </details>
  );
};

const CardOld = ({
  title = "",
  subtitle = "",
  stack,
  href,
  children = null,
  color = "c-violet11",
  bg = "bg-violet5",
}: CardProps) => {
  return (
    <article>
      <div className="grid g-areas-[title|overlap|card] g-rows-[auto_3rem_auto] sm:g-areas-[title_overlap_card] sm:g-cols-[auto_6rem_auto] ">
        <div className="lt-sm:mis-10 sm:mt-10  z-1 g-col-[1/-1] g-row-[title/overlap] sm:g-col-[title/overlap] sm:g-row-[1/-1] ">
          <h3 className={`H1 ${color}`}>{title}</h3>
          <p className={`H2 mt-4 fw-400 ${color} `}>{subtitle}</p>
        </div>
        <div
          className={`rd-xl overflow-hidden ${bg} min-h-100 p-10 pbs-30 flex flex-col g-col-[1/-1] g-row-[overlap/card] sm:min-h-80 sm:g-row-[1/-1] sm:g-col-[overlap/card] sm:pis-40 sm:pbs-10  `}
        >
          {children}
          <div className="mt-auto flex flex-col gap-8 sm:flex-row sm:justify-between sm:ac">
            <ul aria-label="Stack Used" className="flex  gap-2">
              {stack}
            </ul>
            <Link href={href} className="btn-text af-i-ph-arrow-right">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
