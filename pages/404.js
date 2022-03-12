import Link from "next/link";
import Arrow from "../components/Arrow";
import LinkStyle from "../components/LinkStyle";

export default function Custom404() {
  return (
    <div className="tracking-tight font-inter text-sm min-h-screen h-full bg-neutral-900 selection:bg-neutral-300 text-neutral-300">
      <div className="flex w-screen justify-center h-screen items-center">
        <div className="">
          <p className="pb-2">Not found.</p>
          <div className="flex">
            <LinkStyle url="/" value="Home" />
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}
