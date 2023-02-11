import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import NextImage from "next/image";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8 article">
        <div>
          <h1 className="H1">{post.title}</h1>
          <time dateTime={post.date} className="text-xs text-gray-600 mb-1">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
        <MDXContent components={{ h1, h2, h3, h4, code, Image, MyButton }} />
      </article>
    </>
  );
};

export default PostLayout;

export const MyButton = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 c-red11">
    <button className="b-1 b-yellow10">{children}</button>
  </div>
);

const h1 = ({ children }: { children: React.ReactNode }) => <h1 className="H1">{children}</h1>;
const h2 = ({ children }: { children: React.ReactNode }) => <h2 className="H2">{children}</h2>;
const h3 = ({ children }: { children: React.ReactNode }) => <h3 className="H3">{children}</h3>;
const h4 = ({ children }: { children: React.ReactNode }) => <h4 className="H4">{children}</h4>;
const code = ({ children }: { children: React.ReactNode }) => (
  <code className="bg-gray2 px-2 py-1 rd-md c-gray11">{children}</code>
);

const Image = (props) => (
  <div className="relative overflow-hidden isolate">
    <NextImage fill={true} {...props} className="object-cover" />
  </div>
);
