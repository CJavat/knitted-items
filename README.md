# The Knitted Items

<p align="center">
  <a href="https://nextjs.org/" target="blank">
    <img src="./public/vercel.svg" width="70" alt="The Vercel Logo" />
    <img src="./public/next.svg" width="300" style="margin: 0 5px" alt="The Next Logo" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/CJavat/knitted-items" target="blank">
    <img src="./public/Knitted Items - Logo.png" style="margin-top: 10px" width="200px" alt="The Knitted Items Logo" />
  </a>
</p>

### Dev

1. Clonar el repositorio
2. Duplicar el archivo **.env.template** y renombrarlo a **.env**.
3. Configurar las variables de entorno.
4. Levantar la DB en **Docker** con `docker compose up -d`.
5. Instalar las dependencias del proyecto con `npm install`.
6. Correr las migraciones de prisma.

```
npx prisma migrate dev
```

7. Ejecutar el Seed con `npm run seed`.
8. Correr el proyecto con `npm run dev`.

### Prod

### Prisma

- Ejecutar las migraciones

```
npx prisma migrate dev
```

- Generar cliente de prisma

```
npx prisma generate
```

- Generar una migración

```
npx prisma migrate dev --name nombre_de_la_migracion
```

### Cloudinary
