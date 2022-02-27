import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between font-medium items-center">
      <div className="flex space-x-4 items-center">
        <img className="h-10 w-auto invert" src="/logo.svg" />
        <p>Eemeli Ruohomäki</p>
      </div>
      <div>
        <Link href="https://eem.works">
          <a className="transition-all duration-200 hover:text-neutral-400">
            Website
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
