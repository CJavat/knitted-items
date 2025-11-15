"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

import { useUIStore } from "@/src/stores";
import type { Category } from "@/src/interfaces";
import { textCapitalized } from "@/src/utils";

interface Props {
  categories: Category[];
}

export const TopMenu = ({ categories }: Props) => {
  const openMenu = useUIStore((state) => state.openSideMenu);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <Image
            src="/knitted-items-banner.png"
            alt="Knitted Items Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 font-bold rounded-md transition-all hover:bg-indigo-100 hover:text-indigo-500"
          href="/category/amigurumis"
        >
          Amigurumis
        </Link>
        <Link
          className="m-2 p-2 font-bold rounded-md transition-all hover:bg-indigo-100 hover:text-indigo-500"
          href="/category/bolsas"
        >
          Bolsas
        </Link>

        <div className="inline-block relative group m-2 p-2 font-bold rounded-md transition-all hover:bg-gray-100 hover:text-indigo-500 cursor-pointer">
          <p>Más Categorías</p>
          <ul className="absolute left-0 top-full w-48 z-20 bg-indigo-50 shadow-lg rounded-md opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  className="block p-2 text-indigo-950 hover:bg-indigo-100 hover:text-indigo-500"
                  href={`/category/${category.name}`}
                >
                  {textCapitalized(category.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search, Cart & Menu */}
      <div className="flex items-center gap-2">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link
          href={`${/*totalItemsInCart === 0 &&*/ loaded ? "/empty" : "/cart"}`}
        >
          <div className="relative">
            {/*
              //TODO: Terminar 
              {loaded && totalItemsInCart > 0 && (
                <span className="absolute fade-in text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-indigo-700 text-white">
                  {totalItemsInCart}
                </span>
              )} 
             */}
            <span className="absolute fade-in text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-indigo-700 text-white">
              10
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
