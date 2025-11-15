"use server";

import prisma from "@/src/lib/prisma";

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();

    return categories.filter(
      (category) => category.name !== "amigurumi" && category.name !== "bolsas"
    );
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};
