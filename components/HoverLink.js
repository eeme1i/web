import Link from "next/link";

function HoverLink({ url, value }) {
  return (
    <Link href={url}>
      <a className="transition-all duration-200 hover:text-neutral-200">
        {value}
      </a>
    </Link>
  );
}

export default HoverLink;
