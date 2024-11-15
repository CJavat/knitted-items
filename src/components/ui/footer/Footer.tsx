import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <div className="w-full border-t-2 border-t-indigo-200 flex justify-around items-center py-5">
      <p>
        Copyright© {new Date().getFullYear()} -{" "}
        <span className="text-indigo-500">Knitted Items</span>{" "}
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-indigo-500">Siguenos en nuestras redes sociales</p>

        <div className="flex justify-around">
          <Link href="#">
            <IoLogoFacebook
              size={30}
              className="text-indigo-800 hover:text-indigo-500"
            />
          </Link>
          <Link href="#">
            <IoLogoInstagram
              size={30}
              className="text-indigo-800 hover:text-indigo-500"
            />
          </Link>
          <Link href="#">
            <IoLogoYoutube
              size={30}
              className="text-indigo-800 hover:text-indigo-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
