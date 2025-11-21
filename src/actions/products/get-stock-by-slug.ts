"use server";

import prisma from "@/src/lib/prisma";

export const getStockBySlug = async (slug: string) => {
  try {
    const stock = await prisma.item.findFirst({
      where: { slug },
      select: { inStock: true },
    });

    return stock?.inStock ?? 0;
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar el producto.");
  }
};
