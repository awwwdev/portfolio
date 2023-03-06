import Emoji from "@/components/Emoji";
import Icon from "@/components/Icon";

const Toolkit = ({ ...props }: AnyProps) => {
  return (
    <>
      {/* <div className="flex gap-1 items-baseline sm:px-8  px-4">
        <h2 className="H1">Toolkit</h2>
        <Emoji name="rainbow" className="scale-x--100" />
      </div> */}
      <div className="mt-20 toolkit__grid">
        {/* <h3 className="H3">For Development</h3> */}
        <ul className="display-contents">
          <Li
            className="col-span-3 row-span-3 bg-gradient-to-r from-gray-100 to-gray-200"
            icon="i-logos-nextjs"
            size="!w-6em !h-2em"
            alt="NEXTjs"
          />
          {/* <Li className="col-span-1 row-span-1 bg-cyan-100" icon="i-logos-react" size="!w-2em !h-2em" alt="React" /> */}
          <Li
            className="col-span-2 row-span-1 bg-sky3 @dark:bg-sky-4 "
            src="/tool-logos/react.svg"
            size="p-2  c-#0063AA  @dark:c-#6DC2FF"
            alt="React"
          />
          <Li
            className="col-span-3 row-span-2 light bg-olive3"
            src="/tool-logos/supabase.svg"
            size="p-2"
            alt="Supabase"
          />
          <Li className="col-span-2 row-span-2 bg-stone-800" icon="i-logos-figma" size="!w-2em !h-2em" alt="Figma" />

          <Li
            className="col-span-1 row-span-1 bg-blue-900"
            src="/tool-logos/typescript.svg"
            alt="TypeScript"
            size="p-1"
          />
          <Li
            className="col-span-1 row-span-1 bg-yellow-400  @dark:bg-yellow-700"
            src="/tool-logos/javascript.svg"
            alt="JavaScript"
            size="p-1"
          />
          <Li
            className="col-span-2 row-span-1 bg-neutral-800 "
            src="/tool-logos/radix-ui.svg"
            size="p-2 filter-invert"
            alt="Radix-UI"
          />
          <Li
            className="col-span-1 row-span-1 bg-violet4 "
            src="/tool-logos/pwa.svg"
            alt="Progressive Web Applications"
          />
          <Li className="col-span-2 row-span-1 p-2 bg-slate-100 " src="/tool-logos/unocss.svg" alt="UnoCSS" />
          <Li className="col-span-2 row-span-3 bg-blue-200" src="/tool-logos/css.svg" alt="CSS" size="" />
          <Li
            className="col-span-3 row-span-1 bg-gradient-to-r from-teal-50 to-teal-100"
            src="/tool-logos/tailwindcss.svg"
            alt="TailwindCSS"
            size="px-4"
          />
          <Li className="col-span-1 row-span-1 bg-orange6" src="/tool-logos/html.svg" size="p-1" alt="HTML" />
          <Li className="col-span-2 row-span-1 bg-slate-100" src="/tool-logos/react-query.svg" alt="React-Query" />
          {/* <Li className="col-span-2 row-span-1 bg-red-50" src="/tool-logos/react-table.svg" alt="React Table" /> */}
          <Li className=" bg-indigo-900" src="/tool-logos/zod.svg" size="p-1" alt="Zod validator" />
          <Li
            className="col-span-1 row-span-1 bg-blue-800"
            src="/tool-logos/react-hook-form.svg"
            alt="React-Hook-Form"
          />
        </ul>
        {/* <h3>My Future Stack</h3> */}
        <ul className="display-contents">
          <Li className="col-span-2 row-span-1 bg-slate-200" src="/tool-logos/solidjs.svg" size="p-2" alt="Solidjs" />
          <Li icon="i-logos-strapi bg-violet12" src="/tool-logos/strapi.svg" alt="Strapi" />
          <Li className="bg-pink-200" icon="i-logos-deno" size="!w-2em !h-2em" alt="Deno" />
          <Li className="bg-white" icon="i-logos-nodejs" size="!w-2em !h-2em" alt="nodejs" />
          {/* <Li className="bg-gray-50" icon="i-logos-mongodb" size="!w-2em !h-2em" alt="MongoDB" />
          <Li className="bg-sky-50" icon="i-logos-postgresql" size="!w-2em !h-2em" alt="PostgreSQL" /> */}
        </ul>
        {/* <h3>Honorable Mentions!</h3> */}
        <ul className="display-contents">
          <Li className="bg-violet-100" icon="i-logos-astro" size="!w-1em !h-2em" alt="Astro" />
          <Li className="bg-violet-100" src="/tool-logos/framer-motion.png" size="p-1" alt="Framer Motion" />
        </ul>
        {/* <h3 className="H3">For Design</h3> */}
        <ul className="display-contents">
          <Li className=" bg-amber-50" icon="i-logos-adobe-illustrator" size="!w-1em !h-1em" alt="Adobe Illustrator" />
          <Li className=" bg-rose-50" icon="i-logos-adobe-indesign" size="!w-1em !h-1em" alt="Adobe InDesign" />
          <Li className="bg-stone-100" icon="i-logos-pinterest" size="!w-2em !h-2em" alt="Pinterest" />
          <Li className="bg-pink-100" icon="i-logos-dribbble-icon" size="!w-2em !h-2em" alt="Dribbble" />
        </ul>
      </div>
    </>
  );
};

export default Toolkit;
type LiProps = {
  className?: string;
  icon?: string;
  src?: string;
  alt?: string;
  size?: string;
};
const Li = (props: LiProps) => {
  return (
    <li className={`toolkit__grid-item rd-4 p-4  c-gray700  flex jc ac ${props.className}`}>
      {props.icon && <Icon name={props.icon} alt={props.alt} className={`${props.size}`} />}
      {props.src && <img src={props.src} alt={props.alt} className={`object-cover  ${props.size}`} />}
    </li>
  );
};

const Logo = ({ icon, className, alt }: ClassName & { icon: string; alt?: string }) => {
  return <Icon name={icon} className={`!block ${className} `} alt={alt} />;
};
