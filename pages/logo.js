import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <div className="tracking-tight font-inter text-sm min-h-screen h-full bg-neutral-900 selection:bg-neutral-300">
      <Head>
        <title>Eemeli | Logo</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo.svg" />
        <link rel="image_src" href="/prev.png" />
        <meta property="og:image" content="/prev.png" />
      </Head>
      <div className="grid place-items-center h-screen">
        <Link href="/">
          <a className="transition-all duration-200 hover:drop-shadow-white flex space-x-4 items-center text-neutral-200">
            <Image
              height="42px"
              width="42px"
              className="h-10 w-auto invert"
              src="/logo.svg"
            />
            <p className="hidden sm:block">Eemeli Ruohomäki</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
