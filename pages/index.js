import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreyLine from "../components/GreyLine";
import LinkStyle from "../components/LinkStyle";
import ContactLink from "../components/ContactLink";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

export default function Home({ posts }) {
  return (
    <div className="tracking-tight font-inter text-sm text-neutral-400 min-h-screen h-full bg-neutral-900 selection:bg-neutral-300">
      <Head>
        <title>Eemeli | Index</title>
        <meta name="description" content="" />
        <link rel="icon" className="invert" href="/logo.svg" />
        <link rel="image_src" href="/prev.png" />
        <meta property="og:image" content="/prev.png" />
      </Head>

      <div className="relative h-full min-h-screen pt-8 max-w-[36rem] m-auto">
        <Header />
        <main className="px-8 sm:px-0 mt-16">
          <div className="text-neutral-300">
            <p className="font-bold pb-4">About me</p>
            <div className="font-normal pb-12">
              <p className="pb-4">
                Hello, I&apos;m Eemeli, a second year student at{" "}
                <LinkStyle
                  url="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio"
                  value="Porin Lukio"
                />
                .
              </p>

              <p className="pb-4">
                Alongside my studies I like enjoy tinkering around with graphic
                design. You can find some of my work at the{" "}
                <LinkStyle url="/portfolio" value="portfolio" /> section.
              </p>

              <p className="">
                I also enjoy playing around with web design. Some of my projects
                are <LinkStyle url="https://MEK-JS.vercel.app" value="MEK-JS" />
                ,{" "}
                <LinkStyle url="https://porinlukio.fi" value="porinlukio.fi" />{" "}
                and this very site.
              </p>
            </div>

            <div className="pb-12">
              <p className="font-bold pb-4">Contact</p>
              <div className="font-normal">
                <ContactLink
                  url="https://twitter.com/hieemeli"
                  value="Twitter"
                />
                <ContactLink
                  url="https://instagram.com/eemelihq"
                  value="Instagram"
                />
                <ContactLink url="https://github.com/eeme1i" value="Github" />
                <ContactLink url="mailto:'eeruoh@gmail.com'" value="Mail" />
              </div>
            </div>

            <p className="font-bold pb-4">About this site</p>
            <div className="font-normal">
              <p className="pb-4">
                Written in Next.js using TailwindCSS and hosted on Vercel. For
                the typeface I&apos;ve chosen{" "}
                <LinkStyle url="https://rsms.me/inter" value="Inter" /> by{" "}
                <LinkStyle url="https://rsms.me" value="rsms" /> &{" "}
                <LinkStyle
                  url="https://fonts.google.com/specimen/Newsreader"
                  value="Newsreader"
                  className="font-Newsreader"
                />
                .
              </p>
              <p>
                Design of this site is hugely inspired by{" "}
                <LinkStyle url="https://paco.me" value="paco.me" />.
              </p>
            </div>
          </div>
        </main>
      </div>
      <GreyLine />
      <Footer />
    </div>
  );
}

{
  /* <img
  className="h-8"
  src="https://emojicdn.elk.sh/%E2%9C%A8?style=apple"
/> */
}

// https://www.youtube.com/watch?v=MrjeefD8sac

{
  /* <p className="font-bold pb-8">Writings</p>;
{
  posts.map((post, index) => <Post post={post} />);
} */
}

// export async function getStaticProps() {
//   const files = fs.readdirSync(path.join("posts"));

//   const posts = files.map((filename) => {
//     const slug = filename.replace("md", "");

//     const markdownWithMeta = fs.readFileSync(
//       path.join("posts", filename),
//       "utf-8"
//     );

//     const { data: frontmatter } = matter(markdownWithMeta);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }
