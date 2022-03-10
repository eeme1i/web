import Link from "next/link";

function LinkStyle({ url, value }) {
  return (
    <Link href={url}>
      <a className="inline underline decoration-neutral-500 transition-all duration-200 hover:decoration-neutral-200">
        {value}
      </a>
    </Link>
  );
}

export default LinkStyle;
