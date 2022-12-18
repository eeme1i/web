import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreyLine from "../components/GreyLine";
import LinkStyle from "../components/LinkStyle";
import ContactLink from "../components/ContactLink";

export default function Home() {
  return (
    <div className="h-full min-h-screen text-sm tracking-tight font-inter text-neutral-400 bg-neutral-900 selection:bg-neutral-700">
      <Head>
        <title>Eemeli | Index</title>
        <meta name="description" content="" />
        <link rel="icon" className="invert" href="/logo.svg" />
        <link rel="image_src" href="/prev.png" />
        <meta property="og:image" content="/prev.png" />
        <meta name="twitter:picture" content="/prev.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://eem.works" />
      </Head>

      <div className="relative h-full min-h-screen pt-8 max-w-[36rem] m-auto">
        <Header />
        <main className="px-8 pb-8 my-16 sm:px-0">
          <div className="text-neutral-300">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <p className="pb-4 font-bold">About me</p>
              <div className="pb-12 font-normal">
                <p className="pb-4">
                  Hello, I&apos;m Eemeli, a third year student at{" "}
                  <LinkStyle
                    url="https://www.pori.fi/kasvatus-ja-koulutus/lukio/porin-lukio"
                    value="Porin Lukio"
                  />
                  .
                </p>

                <p className="pb-4">
                  Alongside my studies I like enjoy tinkering around with
                  graphic design. You can find some of my work at the{" "}
                  <LinkStyle url="/portfolio" value="portfolio" /> section.
                </p>
                <p className="pb-4">
                  I also enjoy playing around with webdev. Currently working on{" "}
                  <LinkStyle url="https://lettuce.watch" value="Lettucewatch" />
                  {"."}
                </p>
                <p className=""></p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="pb-12"
            >
              <p className="pb-4 font-bold">Contact</p>
              <div className="grid w-full sm:grid-cols-2">
                <ContactLink
                  url="https://mastodon.social/@eem"
                  value="Mastodon"
                />
                <ContactLink url="https://cohost.org/human" value="Cohost" />
                <ContactLink url="https://layers.to/em" value="Layers.to" />
                <ContactLink
                  url="https://twitter.com/hieemeli"
                  value="Twitter"
                />
                <ContactLink
                  url="https://instagram.com/eee.me.li"
                  value="Instagram"
                />
                <ContactLink url="https://github.com/eeme1i" value="Github" />
                <ContactLink url="mailto:'eeruoh@gmail.com'" value="Mail" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="pb-4 font-bold">About this site</p>
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
            </motion.div>
          </div>
        </main>
      </div>
      <GreyLine />
      <Footer />
    </div>
  );
}
