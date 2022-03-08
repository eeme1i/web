import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between font-medium items-center">
      <Link href="/">
        <a className="transition-all duration-200 hover:drop-shadow-white flex space-x-4 items-center text-neutral-200">
          <img className="h-10 w-auto invert" src="/logo.svg" />
          <p className="hidden sm:block">Eemeli Ruohomäki</p>
        </a>
      </Link>
      <div className="space-x-4">
        <Link href="/">
          <a className="transition-all duration-200 hover:text-neutral-200">
            Index
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="transition-all duration-200 hover:text-neutral-200">
            Portfolio
          </a>
        </Link>
        <Link href="/contact">
          <a className="transition-all duration-200 hover:text-neutral-200">
            Contact
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
