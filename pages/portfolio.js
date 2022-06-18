import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreyLine from "../components/GreyLine";
import PortfolioItem from "../components/PortfolioItem";

export default function Home(router) {
  return (
    <div className="tracking-tight font-inter text-sm text-neutral-400 min-h-screen h-full bg-neutral-900 selection:bg-neutral-700">
      <Head>
        <title>Eemeli | Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
        <link rel="image_src" href="/prev.png" />
        <meta property="og:image" content="/prev.png" />
        <meta name="twitter:picture" content="/prev.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://eem.works" />
      </Head>

      <div className="relative h-full min-h-screen pt-8 max-w-[36rem] m-auto">
        <Header />
        <motion.main
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          className="text-neutral-300 font-bold px-8 sm:px-0 my-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="pb-4 "
          >
            Portfolio
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg font-medium italic font-Newsreader"
          >
            <PortfolioItem
              img="/portfolio/lines2.png"
              link="https://twitter.com/hieemeli/status/1532746581216309248"
              title="mirror"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/res.jpg"
              link="https://twitter.com/hieemeli/status/1528778178742956032"
              title=".res"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/rnbw2.png"
              link=""
              title=">"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/rnbw_ds.png"
              link="https://twitter.com/hieemeli/status/1523337755123589121/photo/1"
              title="<"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/depth.png"
              link="https://twitter.com/hieemeli/status/1517194551278112768/photo/1"
              title="depth"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/interlinked.png"
              link="https://www.instagram.com/p/CdQ10tgMj-p/"
              title="interlinked"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/arc.jpg"
              link="https://www.instagram.com/p/CaSW7AlM6sJ/"
              title="arc"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/lownoise.jpg"
              link="https://www.instagram.com/p/CaSW7AlM6sJ/"
              title="low noise"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/01.jpg"
              link="https://www.instagram.com/p/CZmcNyZsuqG/"
              title="01"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/02.jpg"
              link="https://www.instagram.com/p/CZWjjAJNbw4/"
              title="s-4-pro"
              date="2022"
            />
            <PortfolioItem
              img="/portfolio/03.jpg"
              link="https://www.instagram.com/p/CYrOamxMLKq/"
              title="Vendetta"
              date="2022"
            />
            <p className="not-italic font-inter text-sm text-neutral-400">
              More coming soon.
            </p>
          </motion.div>
        </motion.main>
      </div>
      <GreyLine />
      <Footer />
    </div>
  );
}
