import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-page mx-auto ">
      <section aria-label="introduction" className=" rd-xl py-8 min-h-80">
        <Intro />
      </section>
      <section aria-label="Works" className="mt-50 rd-xl">
        <h2 className="H1">Works</h2>

        <ul className="mt-20 space-y-32">
          <Darsoon />
          <Dbilia />
          <Momenta />
        </ul>
      </section>
      <section aria-label="contact" className="my-50 rd-xl space-y-4">
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
    title="Dbilia"
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

const MoreAboutMe = () => {
  return (
    <details className="text-note mt-10">
      <summary>More About Me</summary>
      <div className="p-4">
        <p>I am a Web Developer and a Designer, obsessed with UI and Design System.</p>
        <p>
          As a Developer with design background, I searched a lot how to achieve the visuals I want. Eventually I was
          called CSS Master by my teammates!
        </p>
        <p>
          Soon with any new project, All the design, css and UI tasks were left to me, plus so much freedom to how I
          want to get them done!
        </p>
        <p>So, I tested many things!</p>
        <p>Now, I trying to find ways to build things with the least codes.</p>
        <p>And searched, watched tones YouTubes and tutorials </p>
        <p>Now I am developing my own design system.</p>
        <p>I am writing some of my experiments and thoughts here.</p>
      </div>

      <div>
        Hamid is a creative and enthusiastic Full-stack developer with an extensive design background. He is eager to
        bridge the gap between design and code and find solutions to develop aesthetic, accessible, and engaging
        products fast and scalable. Experienced with MERN stack and React Ecosystem as well as various design and user
        analytical tools. • Created and implemented accessible design systems and UI libraries with responsiveness and
        dark mode built-in for different projects to support agile frontend development • built highly customizable and
        reusable UI components with developer experience in mind, to unified UI coding style across team members •
        Ideated, designed, and Developed Highly Creative Landing Pages using Framer animation library and modern CSS
        features • Created Full-stack web application using MERN stack and RESTful API design and deployed on Netlify
        and Heroku • Contributed to the development of backend applications and designing SQL and NoSQL Database schemas
      </div>
    </details>
  );
};

const GetInTouch = () => {
  return (
    <>
      <h2 className="H1"> Get in touch</h2>
      <a href="" className="btn-prm max-w-50 bf-i-ph-envelope-simple before:opacity-70">
        EMAIL ME
      </a>
    </>
  );
};

const Intro = () => {
  return (
    <>
      <div className="mt-50">
        <div className="flex gap-1 H1">
          <span className="fw-200">Hi! I am</span>
          <h1>Hamid </h1>
          👋
        </div>
        <p className="mt-10 max-w-100">I create apps that look beautiful both in the browser and vscode.</p>
      </div>
      <MoreAboutMe />
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
