"use client";

import clsx from "clsx";

import { useUIStore } from "@/src/stores";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import Link from "next/link";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-xl"
          onClick={closeMenu}
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-indigo-50 z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-indigo-950"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-indigo-100 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Auth */}
        {/* //TODO: Aparece si no está logeado */}
        <Link
          className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
          href="/auth/login"
          onClick={() => closeMenu()}
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

        {/* //TODO: Aparece si está logeado */}
        {/* Global */}
        <>
          <Link
            href="/profile"
            className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoPersonOutline size={30} />
            <span className="ml-3 text-xl">Perfil</span>
          </Link>

          <Link
            href="/orders"
            className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoTicketOutline size={30} />
            <span className="ml-3 text-xl">Ordenes</span>
          </Link>

          <button
            className="flex w-full items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            // onClick={onLogOut}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        </>

        {/* //TODO: Aparece si es admin */}
        {/* Admin */}
        <>
          {/* Line Separator */}
          <div className="w-full h-px bg-gray-200 my-10" />

          <Link
            href="/admin/products"
            className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoShirtOutline size={30} />
            <span className="ml-3 text-xl">Productos</span>
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoTicketOutline size={30} />
            <span className="ml-3 text-xl">Ordenes</span>
          </Link>

          <Link
            href="/admin/users"
            className="flex items-center mt-10 p-2 hover:bg-indigo-100 rounded transition-all"
            onClick={() => closeMenu()}
          >
            <IoPeopleOutline size={30} />
            <span className="ml-3 text-xl">Usuarios</span>
          </Link>
        </>
      </nav>
    </div>
  );
};
