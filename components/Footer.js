import Link from "next/link";
import HoverLink from "./HoverLink";

function Footer() {
  return (
    <div className="py-8 px-8 sm:px-0 flex justify-between font-medium max-w-[36rem] mx-auto">
      <Link href="/">
        <a className="space-x-4 items-center flex transition-all duration-200 hover:drop-shadow-white text-neutral-200">
          <img className="h-10 w-auto invert" src="/logo.svg" />
          <p className="hidden sm:block">Eemeli Ruohomäki</p>
        </a>
      </Link>
      <div className="text-right space-y-2">
        <div>
          <HoverLink url="/" value="Index" />
        </div>
        <div>
          <HoverLink url="/portfolio" value="Portfolio" />
        </div>
        <div>
          <HoverLink url="/contact" value="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
