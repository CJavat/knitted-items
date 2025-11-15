"use server";

import prisma from "@/src/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.item.findFirst({
      include: {
        ItemImage: true,
      },
      where: {
        slug,
      },
    });

    if (!product) return null;

    return {
      ...product,
      images: product.ItemImage.map(
        (image) => `${process.env.CLOUDINARY_URL_IMAGE}/${image.url}`
      ),
    };
  } catch (error) {
    console.log(error);

    throw new Error("Error al obtener el producto por slug");
  }
};
