import Emoji from "@/components/Emoji";
import Icon from "@/components/Icon";

const Toolkit = ({ ...props }: AnyProps) => {
  return (
    <>
      {/* <div className="flex gap-1 items-baseline sm:px-8  px-4">
        <h2 className="H1">Toolkit</h2>
        <Emoji name='rainbow' />
      </div> */}
      <div className="mt-20 toolkit__grid">
        {/* <h3 className="H3">For Development</h3> */}
        <ul className="display-contents">
          <Li className="col-span-3 row-span-3 bg-gray-200" icon="i-logos-nextjs" size="!w-6em !h-2em" alt="NEXTjs" />
          <Li className="col-span-1 row-span-1 bg-cyan-100" icon="i-logos-react" size="!w-2em !h-2em" alt="React" />
          <Li
            className="col-span-3 row-span-2 bg-teal-50"
            icon="i-logos-supabase"
            size="!w-10em !h-2em"
            alt="Supabase"
          />
          <Li className="col-span-2 row-span-2 bg-rose-50" icon="i-logos-figma" size="!w-2em !h-2em" alt="Figma" />

          <Li
            className=" bg-rose-50"
            icon="i-logos-adobe-illustrator"
            size="!w-1em !h-1em"
            alt="Adobe Illustrator"
          />
          <Li
            className=" bg-rose-50"
            icon="i-logos-adobe-indesign"
            size="!w-1em !h-1em"
            alt="Adobe InDesign"
          />
          <Li
            className="col-span-1 row-span-2 bg-gray-900 c-white"
            icon="i-logos-radix"
            size="!w-1em !h-1em"
            alt="Radix-UI"
          />
          <Li className="col-span-1 row-span-1 bg-slate-100" icon="i-logos-unocss" size="!w-2em !h-2em" alt="UnoCSS" />
          <Li
            className="col-span-1 row-span-1 bg-slate-100"
            icon="i-logos-tailwindcss"
            className="!w-2em !h-2em"
            alt="TailwindCSS"
          />
          <Li
            className="col-span-1 row-span-1 bg-blue-900"
            icon="i-logos-typescript-icon"
            size="!w-6em !h-2em"
            alt="TypeScript"
          />
          <Li className="col-span-1 row-span-1 " icon="i-logos-javascript" size="!w-6em !h-2em" alt="JavaScript" />
          <Li className="col-span-1 row-span-1 " icon="i-logos-html-5" size="!w-6em !h-2em" alt="HTML" />
          <Li className="col-span-1 row-span-1" icon="i-logos-css-3" size="!w-6em !h-2em" alt="CSS" />
          <Li
            className="col-span-3 row-span-1 bg-red-50"
            icon="i-logos-react-query"
            size="!w-5em !h-1em"
            alt="React-Query"
          />
          <Li
            className="col-span-3 row-span-3 bg-red-50"
            icon="i-logos-react-table"
            size="!w-5em !h-1em"
            alt="React Table"
          />
          <Li
            className=" bg-red-50"
            icon="i-logos-zod"
            size="!w-5em !h-1em"
            alt="Zod validator"
          />
          <Li className="col-span-3 row-span-3" alt="React-Hook-Form" />
        </ul>
        {/* <h3>My Future Stack</h3> */}
        <ul className="display-contents">
          <Li className="bg-blue-50" icon="i-logos-solidjs" size="!w-5em !h-1em" alt="SolidStart" />
          <Li icon="i-logos-strapi" size="!w-5em !h-1em" alt="Strapi" />
          <Li className="bg-pink-50" icon="i-logos-deno" size="!w-2em !h-2em" alt="Deno" />
          <Li className="bg-pink-50" icon="i-logos-nodejs" size="!w-2em !h-2em" alt="nodejs" />
          <Li className="bg-pink-50" icon="i-logos-mongodb" size="!w-2em !h-2em" alt="MongoDB" />
          <Li className="bg-pink-50" icon="i-logos-postgresql" size="!w-2em !h-2em" alt="PostgreSQL" />
        </ul>
        {/* <h3>Honorable Mentions!</h3> */}
        <ul className="display-contents">
          <Li className="bg-violet-100" icon="i-logos-astro" size="!w-1em !h-2em" alt="Astro" />
          <Li className="bg-violet-500" icon="i-logos-framer" size="!w-2em !h-2em" alt="Framer Motion" />
        </ul>
        {/* <h3 className="H3">For Design</h3> */}
        <ul className="display-contents">
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
    <li className={`toolkit__grid-item rd-4 p-4 bg-gray-100 c-gray700  flex jc ac ${props.className}`}>
      {props.icon && <Icon name={props.icon} alt={props.alt} className={`${props.size}`} />}
    </li>
  );
};

const Logo = ({ icon, className, alt }: ClassName & { icon: string; alt?: string }) => {
  return <Icon name={icon} className={`!block ${className} `} alt={alt} />;
};
