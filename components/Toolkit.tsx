import Icon from "./Icon";

const Toolkit = ({ ...props }: AnyProps) => {
  return (
    <>
      <div className="flex gap-1 items-baseline sm:px-8  px-4">
        <h2 className="H1 c-red-500">Toolkit</h2>
        <img src="/3d-icons/rainbow.png" alt="fire" className="w-15 translate-y-2 scale-x--100" />
      </div>
      <div className="grid gap-4 grid-cols-3 sm:grid-cols-6 grid-rows-auto grid-flow-dense justify-center content-center">
        {/* <h3 className="H3">For Development</h3> */}
        <ul className="display-contents">
          <Li className="col-span-3 row-span-3 bg-gray-200">
            <Logo icon="i-logos-nextjs" className="!w-6em !h-2em" alt="NEXTjs" />
          </Li>
          <Li className="col-span-1 row-span-1 bg-cyan-100">
            <Logo icon="i-logos-react" className="!w-2em !h-2em" alt="React" />
          </Li>

          <Li className="col-span-4 row-span-2 bg-teal-50">
            <Logo icon="i-logos-supabase" className="!w-10em !h-2em" alt="Supabase" />
          </Li>
          <Li className="col-span-2 row-span-2 bg-rose-50">
            <Logo icon="i-logos-figma" className="!w-2em !h-2em" alt="Figma" />
          </Li>
          <Li className="col-span-1 row-span-2 bg-gray-900 c-white">
            {/* <Logo icon="i-logos-radix" className="!w-1em !h-1em" alt="Radix-UI" /> */}
            Radix UI
          </Li>
          <Li className="col-span-1 row-span-1 bg-slate-100">
            <Logo icon="i-logos-unocss" className="!w-2em !h-2em" alt="UnoCSS" />
          </Li>
          <Li className="col-span-1 row-span-1 bg-slate-100">
            <Logo icon="i-logos-tailwindcss" className="!w-2em !h-2em" alt="TailwindCSS" />
          </Li>
          <Li className="col-span-1 row-span-1 bg-blue-900">
            <Logo icon="i-logos-typescript-icon" className="!w-6em !h-2em" alt="TypeScript" />
          </Li>
          <Li className="col-span-3 row-span-1 bg-red-50">
            <Logo icon="i-logos-react-query" className="!w-5em !h-1em" alt="React-Query" />
          </Li>
          <Li className="col-span-3 row-span-3 bg-red-50">
            {/* <Logo icon="i-logos-react-table" className="!w-5em !h-1em" alt="React Table" /> */}
            React Table
          </Li>
          <Li className="col-span-3 row-span-3">React-Hook-Form</Li>
        </ul>
        {/* <h3>My Future Stack</h3> */}
        <ul className="display-contents">
          <Li className="bg-blue-50">
            <Logo icon="i-logos-solidjs" className="!w-5em !h-1em" alt="SolidStart" />
          </Li>
          <Li>
            <Logo icon="i-logos-strapi" className="!w-5em !h-1em" alt="Strapi" />
          </Li>
          <Li className="bg-pink-50">
            <Logo icon="i-logos-deno" className="!w-2em !h-2em" alt="Deno" />
          </Li>
        </ul>
        {/* <h3>Honorable Mentions!</h3> */}
        <ul className="display-contents">
          <Li className="bg-violet-100">
            <Logo icon="i-logos-astro" className="!w-2em !h-4em" alt="Astro" />
          </Li>
          <Li className="bg-violet-500">
            <Logo icon="i-logos-framer" className="!w-2em !h-2em" alt="Framer Motion" />
          </Li>
        </ul>
        {/* <h3 className="H3">For Design</h3> */}
        <ul className="display-contents">
          <Li className="bg-stone-100">
            <Logo icon="i-logos-pinterest" className="!w-2em !h-2em" alt="Pinterest" />
          </Li>
          <Li className="bg-pink-100">
            <Logo icon="i-logos-dribbble-icon" className="!w-2em !h-2em" alt="Dribbble" />
          </Li>
        </ul>
      </div>
    </>
  );
};

export default Toolkit;

const Li = (props: Children & ClassName & { icon?: string }) => {
  return (
    <li className={`rd-4 p-4 bg-gray-100 c-gray700  flex jc ac ${props.className}`}>
      {props.icon && <Icon name={props.icon} />}
      {props.children}
    </li>
  );
};

const Logo = ({ icon, className, alt }: ClassName & { icon: string; alt?: string }) => {
  return <Icon name={icon} className={`!block ${className} `} alt={alt} />;
};
