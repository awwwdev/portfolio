export default function Home() {
  return (
    <div className="max-w-page mx-auto ">
      <section aria-label="introduction" className=" rd-xl py-8 min-h-80">
        <div className="mt-50">
          <div className="flex gap-1 H1">
            Hi, I am
            <h1>Hamid </h1>
            👋
          </div>
          <p className="mt-10 max-w-100">I write codes that look beautiful both in the browser and the code editor.</p>
        </div>
        <details className="text-note mt-10">
          <summary>More About Me</summary>
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
        </details>
        {/* <p>See this button I built.</p> */}
      </section>
      <section></section>
      <section aria-label="Works" className="mt-50 rd-xl space-y-4">
        <h2 className="H1">Works</h2>
        <ul className="grid grid-min-col-20rem gap-8">
          <li>
            <article className="rd-xl overflow-hidden bg-gray2">
              <div className="aspect-4/3 bg-blue3"></div>
              <div className="p-4">
                <h2>Restarting a running Startup</h2>
              </div>
            </article>
          </li>
          <li>
            <article className="rd-xl overflow-hidden bg-gray2">
              <div className="aspect-4/3 bg-blue3"></div>
              <div className="p-4">
                <h2>Pivoting a failed idea!</h2>
              </div>
            </article>
          </li>
          <li>
            <article className="rd-xl overflow-hidden bg-gray2">
              <div className="aspect-4/3 bg-blue3"></div>
              <div className="p-4">
                <h2>One team, 7 Projects, 7 Iterations</h2>
              </div>
            </article>
          </li>
          <li>
            <article className="rd-xl overflow-hidden bg-gray2">
              <div className="aspect-4/3 bg-blue3"></div>
              <div className="p-4">
                <h2>Teaching Experience: from zero coding experience to Full time Dev</h2>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section aria-label="skills" className="mt-50 rd-xl bg-gray2 p-8">
        <h2 className="H2">Tools & Skills</h2>
        <p>Generally, I like to hunt and try new tools.</p>
        <p>Here are some of tools I worked with...</p>
        Frameworks
        <ul>
          <li className="bf-i-logos-react">React</li>
          <li className="bf-i-logos-html-5">HTML</li>
          <li>Nextjs</li>
        </ul>
        Databases
      </section>
      {/* <section aria-label="Experience" className="mt-50 rd-xl bg-gray2 p-8 space-y-4">
        <h2 className="H1">Experience </h2>
        <p>Momenta, Inc. Sep 2021 - Present</p>
      </section> */}
      <section aria-label="contact" className="my-50 rd-xl space-y-4">
        <p className="H1"> Get in touch</p>

        <a href="" className="btn-prm max-w-70">
          EMAIL ME
        </a>
      </section>
    </div>
  );
}
