import Image from "next/image";
import Link from "next/link";

import { titleFont } from "@/src/config/fonts";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2
          className={`${titleFont.className} antialiased text-5xl text-indigo-500`}
        >
          Lo siento, no se encontró la página buscas
        </h2>

        <Link
          href="/"
          className="font-normal text-2xl text-indigo-950 transition-all mt-5 block hover:underline hover:text-indigo-500"
        >
          Regresar al inicio
        </Link>
      </div>

      <div className="px-5 mx-5">
        <Image
          src="/images/404-not-found.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
