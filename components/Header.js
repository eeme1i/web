import Link from "next/link";
import HoverLink from "./HoverLink";
import Image from "next/image";

function Header() {
  return (
    <header className="px-8 sm:px-0 flex justify-between font-medium items-center">
      <Link href="/">
        <a className="transition-all duration-200 hover:drop-shadow-white flex space-x-4 items-center text-neutral-200">
          <div className="h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    fill="white"
                    d="M208.6,152.16c23.72-8.23,51.6-8.16,79.4-8.16-33.74-.12-59.57-4.05-79.35-10.94C213,98.93,239.81,72.3,267,45.08c-35.25,35-64.4,51.86-89.56,56.85C188.72,81.8,206.76,63.83,225,45.61c-24.76,24.58-46.5,40.2-66,49.06C143.9,68.42,144,34.49,144,0c-.15,43.68-6.89,74.1-18.21,95.3C103,84.57,83.19,64.88,63.39,45.08c21.69,21.54,36.43,40.83,45.73,58.35-34.2-4.46-61-31-87.78-57.82C57,81,73.91,110.35,78.67,135.72,55.17,143.92,27.62,144,0,144c34.12-.12,60.14,3.9,80,11-2,37.25-30.3,65.84-58.67,94.21,35.26-35.51,64.42-52.52,89.58-57.48-11.23,20.55-29.38,38.8-47.53,56.95C88.93,223,111.27,207,131.21,198.22,143.89,224,144,256,144,288c-.14-40.71,5.51-69.91,15.32-90.85,24.18,10.5,44.93,31.36,65.67,52.1-21.73-21.88-36.52-41.34-45.86-58.92,34.26,4.57,61.08,31.57,87.9,58.39C228.52,209.94,211.77,178.75,208.6,152.16Z"
                  />
                </g>
              </g>
            </svg>
          </div>
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
