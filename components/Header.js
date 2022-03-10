import Link from "next/link";
import HoverLink from "./HoverLink";
import Image from "next/image";

function Header() {
  return (
    <header className="px-8 sm:px-0 flex justify-between font-medium items-center">
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
      <div className="space-x-4">
        <HoverLink url="/" value="Index" />

        <HoverLink url="/portfolio" value="Portfolio" />
      </div>
    </header>
  );
}

export default Header;
