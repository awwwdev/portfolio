import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";
import { GetStaticProps } from "next";
import useColorScheme from "@/hooks/useColorScheme";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post: Post | undefined = allPosts.find((post) => post._raw.flattenedPath === params?.slug);
  return {
    props: {
      post,
    },
  };
};

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className=" py-8 article max-w-xl mx-auto sm:px-8 px-4">
        <div>
          <h1 className="H1">{post.title}</h1>
          <time dateTime={post.date} className="text-xs c-gray11 mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
        <MDXContent
          components={{
            h1: (props) => <h3 className="H1" {...props} />,
            h2: (props) => <h3 className="H2" {...props} />,
            h3: (props) => <h3 className="H3" {...props} />,
            h4: (props) => <h3 className="H4" {...props} />,
            code: (props) => <code className="bg-gray2 px-2 py-1 rd-md c-gray11" {...props} />,
            Image: (props) => (
              <div className="relative overflow-hidden isolate">
                <NextImage fill={true} {...props} className="object-cover" />
              </div>
            ),
            MyButton: ({ children, ...props }) => (
              <div className="p-4 c-red11">
                <button type="button" className="b-1 b-yellow10" {...props}>
                  {children}
                </button>
              </div>
            ),
          }}
        />
      </article>
      <section className="mt-20 bg-pink2 py-32">
        <div className="max-w-page mx-auto space-y-8">
          <h2 className="H2 c-pink11">Other Works</h2>
          <div className="flex flex-wrap gap-6 ">
            {slug !== "momenta" && (
              <Card
                logoSrc="/momenta/logo.png"
                darkLogoSrc="/momenta/logo-dark.png"
                color="c-purple11"
                bg="bg-purple4"
                title="MOMENTA"
                href="/works/momenta"
                subtitle={<>Two Crazy Landings</>}
                stack={
                  <>
                    <StackLogo icon="i-logos-nextjs-icon" title="NEXTjs" />
                    <StackLogo icon="i-logos-framer" title="Framer Motion" />
                    <StackLogo icon="i-logos-figma" title="Figma" />
                  </>
                }
              ></Card>
            )}
            {slug !== "dbilia" && (
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
                    <br /> The Unreadable
                  </>
                }
                stack={
                  <>
                    <li className="w-[1.5em] h-[1.5em] rd-full flex jc ac bg-grayA-3">
                      <img src="/sc-logo2.png" alt="Styled Components" className="w-[0.8em] h-[0.8em] " />
                    </li>
                    <StackLogo icon="i-logos-sass" title="Sass and CSS" />
                    <StackLogo icon="i-logos-react" title="Sass and CSS" />
                    <StackLogo icon="i-logos-figma" title="Figma" />
                  </>
                }
              ></Card>
            )}
            {slug !== "darsoon" && (
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
              ></Card>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostLayout;

export const MyButton = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 c-red11">
    <button className="b-1 b-yellow10">{children}</button>
  </div>
);

type CardProps = {
  title: string;
  logoSrc: string;
  darkLogoSrc: string;
  href: string;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  stack: React.ReactNode;
  bg?: string;
  color?: string;
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
    <Link href={href} className={`block  `}>
      <article className={`rd-6 overflow-hidden min-h-80  p-8 flex flex-col ${bg}`}>
        <div>
          <img src={resolvedTheme === "dark" ? darkLogoSrc : logoSrc} alt={title} className="h-4 w-auto lt-sm:mt-1" />
        </div>
        <h3 className={`mt-4 block H3 text-3xl fw-900 ${color} `}>
          <span className="sr-only">{title} ,</span>
          {subtitle}
        </h3>
        <ul aria-label="Stack Used" className="mt-auto flex  gap-2">
          {stack}
        </ul>
      </article>
    </Link>
  );
};

const StackLogo = ({ icon = "", title = "", bgColor = "bg-grayA-3" }) => (
  <li className={`w-[1.5em] h-[1.5em] rd-full flex jc ac ${bgColor} `}>
    <span className={`inline-block ${icon} text-2xs`}>
      <span className="sr-only">{title}</span>
    </span>
  </li>
);
