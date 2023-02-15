import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-page mx-auto ">
      <section aria-label="introduction" className=" rd-xl py-8 min-h-80">
        <Intro />
      </section>
      <section aria-label="Works" id="works" className="mt-50 rd-xl">
        <div className="flex gap-1 items-baseline">
          <h2 className="H1">Works</h2>
          <img src="/3d-icons/fire.png" alt="fire" className="w-15 translate-y-2" />
        </div>

        <ul className="mt-20 space-y-32">
          <Darsoon />
          <Dbilia />
          <Momenta />
        </ul>
      </section>
      <section aria-label="about" id="about" className="my-50 rd-xl space-y-4">
        <div className="flex gap-1 items-baseline">
          <h2 className="H1">About Me</h2>
          <img src="/3d-icons/dino.png" alt="dinosaur" className="w-15 translate-y-2" />
        </div>
        <AboutMe />
      </section>
      <section aria-label="contact" id="contact" className="my-50 rd-xl space-y-4">
        <GetInTouch />
      </section>
    </div>
  );
}

// <section aria-label="skills" className="mt-50 rd-xl">
//     <h2 className="H2">Tools & Skills</h2>
//     {/* <p>Generally, I like to hunt and try new tools.</p>
//     <p>Here are some of tools I worked with...</p> */}
//     <h3 className="mt-8 H4">Frameworks</h3>
//     <ul className="flex gap-2">
//       <Logo icon="bf-i-logos-react" title="React" />
//       <Logo icon="bf-i-logos-html-5" title="HTML5" />
//       <Logo icon="bf-i-logos-nextjs-icon" title="NEXTjs" />
//       <Logo icon="bf-i-logos-solidjs" title="SOLIDjs" />
//       <Logo icon="bf-i-logos-astro" title="Astro" />
//     </ul>
//     <h3 className="mt-8 H4">Backend and Databases</h3>
//     <ul className="flex gap-2">
//       <Logo icon="bf-i-logos-supabase" title="Supabase" />
//       <Logo icon="bf-i-logos-mongodb" title="MongoDB" />
//       <Logo icon="bf-i-logos-express" title="Express" />
//     </ul>
//     <h3 className="mt-8 H4">Design</h3>
//     <ul className="flex gap-2">
//       <Logo icon="bf-i-logos-figma" title="Figma" />
//       <Logo icon="bf-i-logos-adobe-illustrator" title="Illustrator" />
//       <Logo icon="bf-i-logos-adobe-indesign" title="InDesign" />
//     </ul>
//   </section>

const Darsoon = () => {
  return (
    <>
      <Card
        color="c-orange-11"
        bg="bg-orange5"
        title="DARSOON"
        href="/works/darsoon"
        subtitle={
          <>
            Restarting <br /> an Startup
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
          <li>A Brand new website created.</li>
          <li>+80000 data records migrated from Google Sheet to Supabase</li>
          <li>+10 tasks automated saving hounders of hours monthly manual work</li>
        </ul>
      </Card>
    </>
  );
};

const Dbilia = () => (
  <Card
    color="c-violet11"
    bg="bg-violet5"
    title="DBILIA"
    href="/works/dbilia"
    subtitle={
      <>
        Re-designed
        <br /> on the fly
      </>
    }
    stack={
      <>
        <StackLogo icon="i-logos-components" title="Styled Components" />
        <StackLogo icon="i-logos-sass" title="Sass and CSS" />
        <StackLogo icon="i-logos-figma" title="Figma" />
      </>
    }
  >
    <ul>
      <li>Proposed a Re-design</li>
      <li>Implemented based on the prior refactored UI</li>
    </ul>
  </Card>
);

type CardProps = {
  title: string;
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
      color="c-purple11"
      bg="bg-purple5"
      title="MOMENTA"
      href="/works/momenta"
      subtitle={
        <>
          Ideated
          <br />
          and Created
        </>
      }
      stack={
        <>
          <StackLogo icon="i-logos-nextjs-icon" title="NEXTjs" />
          <StackLogo icon="i-logos-framer" title="Framer Motion" />
          <StackLogo icon="i-logos-figma" title="Figma" />
          <StackLogo icon="i-logos-adobe-after-effects" title="Adobe After Effects" />
        </>
      }
    >
      <ul>
        <li>Delivered an highly creative landing page in 2 weeks</li>
        <li>Not compromising accessability and not flashy animations</li>
      </ul>
    </Card>
  );
};

const Card = ({
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
          className={`rd-xl overflow-hidden ${bg} min-h-100 p-10 pbs-30 flex flex-col g-col-[1/-1] g-row-[overlap/card] sm:(min-h-80 g-row-[1/-1] g-col-[overlap/card] pis-40 pbs-10 )  `}
        >
          {children}
          <div className="mt-auto flex flex-col gap-8 sm:(flex-row justify-between ac)">
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

const GetInTouch = () => {
  return (
    <>
      <h2 className="H1"> Get in touch</h2>

      <p>Feel free to contact me.</p>
      <p className="!mt-0">I try my best to reach back to you soon!</p>
      <a href="mailto:hamidpm@pm.me" className="btn-prm !mt-6 !flex gap-1 ac py-2 max-w-50">
        <img src="/3d-icons/envelop.png" alt="Envelop" className="w-10 flex ac jc scale-150 rotate-20 " />
        <span className="pis-4  fw-900 ">EMAIL ME</span>
      </a>
    </>
  );
};

const Intro = () => {
  return (
    <>
      <div className="mt-50">
        <div className="flex gap-1 items-baseline">
          <h1 className="H1">
            <span className="fw-200">Hi! I am</span> <span className="">Hamid </span>
          </h1>
          <img src="/3d-icons/waving-hand.png" alt="waving-hand" className=" w-15" />
        </div>
        <p className="mt-6 max-w-100">I create beautiful apps with clean code.</p>
      </div>
      {/* <MoreAboutMe /> */}
    </>
  );
};

const StackLogo = ({ icon = "", title = "", bgColor = "bg-grayA-7" }) => (
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

const AboutMe = () => {
  return (
    <div className=" space-y-4">
      <p>I am Web Developer and a Designer.</p>
      <p>
        Currently, I am obsessed with Design System and bridging the gap between Design and Development islands.
        Currently I am planning out to build a customizable and accessible Design System with modern CSS technologies.
      </p>
      <p>
        I do Backend and Database stuff time to time for my freelance gigs and side projects. In the teams however, I am
        mostly left with all the Design and Frontend tasks. Everyone happier this way!
      </p>
      <p>
        Beside work, I love Art and Music. In fact, I wanted to be an artist not a while back. But I&apos;ve been busy
        learning web development stuff. In the future I want to work on things that combine Art and Web Technologies
        together!
      </p>
    </div>
  );
};
