"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

import { useUIStore } from "@/src/stores";

export const TopMenu = () => {
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
          className="m-2 p-2 font-bold rounded-md transition-all hover:bg-gray-100 hover:text-indigo-500"
          href="/category/men"
        >
          Amigurumis
        </Link>
        <Link
          className="m-2 p-2 font-bold rounded-md transition-all hover:bg-gray-100 hover:text-indigo-500"
          href="/category/women"
        >
          Bolsas
        </Link>
        <Link
          className="m-2 p-2 font-bold rounded-md transition-all hover:bg-gray-100 hover:text-indigo-500"
          href="/categories"
        >
          Más Categorías
        </Link>
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
