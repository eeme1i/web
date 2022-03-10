import Link from "next/link";
import Arrow from "./Arrow";

function ContactLink({ url, value }) {
  return (
    <div className="flex items-center">
      <Link href={url}>
        <a className="inline underline decoration-neutral-500 transition-all duration-200 hover:decoration-neutral-200">
          {value}
        </a>
      </Link>
      <Arrow />
    </div>
  );
}

export default ContactLink;
