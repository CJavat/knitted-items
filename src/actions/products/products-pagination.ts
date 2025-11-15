"use server";

import prisma from "@/src/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  category?: string;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  category,
}: PaginationOptions) => {
  if (isNaN(+page)) page = 1;
  if (page < 1) page = 1;

  try {
    // Obtener los products
    const products = await prisma.item.findMany({
      take,
      skip: (page - 1) * take,
      where: {
        category: {
          name: category,
        },
      },
      include: {
        ItemImage: { take: 2, select: { url: true } },
      },
    });

    // Obtener el total de páginas
    const totalCount = await prisma.item.count();

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ItemImage.map(
          (image) => `${process.env.CLOUDINARY_URL_IMAGE}/${image.url}`
        ),
      })),
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};
