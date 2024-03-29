import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactLink from "../components/ContactLink";
import GreyLine from "../components/GreyLine";
import Head from "next/head";

export default function Contact() {
  return (
    <main className="h-full text-sm tracking-tight font-inter text-neutral-300 bg-neutral-900 selection:bg-neutral-700">
      <Head>
        <title>Eemeli | Contact</title>
        <meta name="twitter:title" content="Eemeli | Contact" />
        <meta property="og:title" content="Eemeli | Contact" />
        <meta name="twitter:text:title" content="Connect." />
        <meta name="description" content="" />
        <link rel="icon" className="invert" href="/logo.svg" />
        <link rel="image_src" href="/prev.png" />
        <meta property="og:image" content="/prev.png" />
        <meta name="twitter:picture" content="/prev.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://eem.works" />
        <meta name="twitter:site" content="@hieemeli" />
      </Head>

      <div className="relative h-screen pt-8 max-w-[36rem] m-auto">
        <Header />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="px-8 mt-16 sm:px-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="pb-4 font-bold"
            >
              Contact
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid w-full gap-x-32 sm:grid-cols-2"
            >
              <ContactLink
                url="https://mastodon.social/@eem"
                value="Mastodon"
              />
              <ContactLink url="https://cohost.org/human" value="Cohost" />
              <ContactLink url="https://layers.to/em" value="Layers.to" />
              <ContactLink url="https://twitter.com/hieemeli" value="Twitter" />
              <ContactLink
                url="https://instagram.com/eee.me.li"
                value="Instagram"
              />
              <ContactLink url="https://github.com/eeme1i" value="Github" />
              <ContactLink url="mailto:'eeruoh@gmail.com'" value="Mail" />
            </motion.div>
          </div>
        </div>
      </div>
      <GreyLine />
      <Footer />
    </main>
  );
}
