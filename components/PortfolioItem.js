import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";

function PortfolioItem({ img, link, title, date }) {
  return (
    <Link href={link}>
      <a target="_blank" rel="noreferrer" className="h-full w-full">
        <div className="relative mb-8 h-96 w-full rounded-lg">
          <div className="w-full h-full bg-neutral-800 absolute animate-pulse rounded-lg"></div>
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="opacity-0 hover:opacity-100 absolute h-full w-full bg-neutral-900/[0.6] transition-all duration-150 ease-linear">
            <div className="flex justify-between pt-7 px-8">
              <div className="flex">
                <p className="">{title}</p>
                <Arrow />
              </div>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PortfolioItem;

{
  /* <Link href="https://www.instagram.com/p/CaSW7AlM6sJ/">
  <a target="_blank" rel="noreferrer" className="h-full w-full">
    <div className="mb-8 h-96 w-full rounded-3xl bg-[url('/portfolio/lownoise.jpg')] bg-cover bg-center">
      <div className="h-full w-full rounded-3xl bg-neutral-900/[0.5] opacity-0 transition-all duration-150 ease-linear hover:opacity-100">
        <div className="flex justify-between pt-7 px-8">
          <div className="flex">
            <p className="">low noise</p>
            <Arrow />
          </div>
          <p>2022</p>
        </div>
      </div>
    </div>
  </a>
</Link>; */
}
