import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreyLine from "../components/GreyLine";
import PortfolioItem from "../components/PortfolioItem";

export default function Home() {
  return (
    <div className="tracking-tight font-inter text-sm text-neutral-400 min-h-screen h-full bg-neutral-900 selection:bg-neutral-300">
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
        <main className="text-neutral-300 font-bold px-8 sm:px-0 my-16">
          <p className="pb-4 ">Portfolio</p>
          <div className="text-lg font-medium italic font-Newsreader">
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
          </div>
        </main>
      </div>
      <GreyLine />
      <Footer />
    </div>
  );
}
