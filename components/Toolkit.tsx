type Props = {
  children: React.ReactNode;
  [key: string]: any;
};

const Toolkit = ({ children, ...props }: Props) => {
  return (
    <>
      <div className="flex gap-1 items-baseline sm:px-8  px-4">
        <h2 className="H1">Toolkit</h2>
        <img src="/3d-icons/fire.png" alt="fire" className="w-15 translate-y-2" />
      </div>
      <h3 className="H3">For Design</h3>
      <ul>
        <li>Figma</li>
        <li>Pinterest</li>
        <li>Dribble</li>
      </ul>
      <h3 className="H3">For Development</h3>
      <ul>
        <li>NEXTjs</li>
        <li>supabase</li>
        <li>Figma</li>
        <li>Radix UI</li>
        <li>UnoCSS</li>
        <li>Typescript</li>
        <li>React Query</li>
        <li>React Table</li>
        <li>React-Hook-Form</li>
      </ul>
      <h3>My Future Stack</h3>
      <ul>
        <li>SolidStart</li>
        <li>Strapi</li>
        <li>Figma</li>
        <li>Deno</li>
        <li>UnoCSS</li>
        <li>Typescript</li>
      </ul>
      <h3>Honorable Mentions!</h3>
      <ul>
        <li>Astro</li>
        <li>Framer Motion</li>
      </ul>
    </>
  );
};

export default Toolkit;
