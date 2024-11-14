import prisma from "../lib/prisma";
import { initialData } from "./seed";
import { countries } from "./seed-countries";

async function main() {
  // 1. Borrar la base de datos
  await prisma.country.deleteMany();
  await prisma.user.deleteMany();
  await prisma.itemImage.deleteMany();
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();

  const { categories, items, users } = initialData;

  // 2. Agregar Países y Usuarios
  await prisma.country.createMany({ data: countries });
  await prisma.user.createMany({ data: users });

  // 3. Agregar Categorías
  const categoriesData = categories.map((name) => ({ name }));
  await prisma.category.createMany({ data: categoriesData });

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;

    return map;
  }, {} as Record<string, string>);

  // 4. Agregar Items e Imagenes
  items.forEach(async (item) => {
    const { images, category, ...restItem } = item;

    const dbProduct = await prisma.item.create({
      data: {
        ...restItem,
        categoryId: categoriesMap[category],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      itemId: dbProduct.id,
    }));
    await prisma.itemImage.createMany({ data: imagesData });
  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();

  console.log("Seed Ejecutado Correctamente");
})();
