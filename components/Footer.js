import Link from "next/link";

function Footer() {
  return (
    <div className="py-8 flex justify-between font-medium max-w-[36rem] mx-auto">
      <Link href="/">
        <a className="space-x-4 items-center flex transition-all duration-200 hover:drop-shadow-white text-neutral-200">
          <img className="h-10 w-auto invert" src="/logo.svg" />
          <p className="hidden sm:block">Eemeli Ruohomäki</p>
        </a>
      </Link>
      <div className="text-right space-y-2">
        <div>
          <Link href="/">
            <a className="transition-all duration-200 hover:text-neutral-200">
              Index
            </a>
          </Link>
        </div>
        <div>
          <Link href="/portfolio">
            <a className="transition-all duration-200 hover:text-neutral-200">
              Portfolio
            </a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a className="transition-all duration-200 hover:text-neutral-200">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
