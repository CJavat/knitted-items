interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

interface SeedItems {
  title: string;
  description: string;
  category: ValidTypes;
  color: string[];
  slug: string;
  images: string[];
  price: number;
  inStok: number;
  tags: string[];
}

interface SeedShippingMeasures {}

interface SeedData {
  users: SeedUser[];
  categories: string[];
  items: SeedItems[];
  // shippingMeasures: SeedShippingMeasures[];
}

type ValidTypes =
  | "amigurumi"
  | "bolsas"
  | "aretes"
  | "anillos"
  | "fundas"
  | "almohadas"
  | "llaveros"
  | "flores"
  | "monederos"
  | "otros";

export const initialData: SeedData = {
  users: [
    {
      name: "Javato Blakk",
      email: "cjavatx@gmail.com",
      password: "123123",
      role: "admin",
    },
    {
      name: "Daniel Plascencia",
      email: "daniel.plascencia@gmail.com",
      password: "123123",
      role: "user",
    },
  ],
  categories: [
    "amigurumi",
    "bolsas",
    "aretes",
    "anillos",
    "fundas",
    "almohadas",
    "llaveros",
    "flores",
    "monederos",
    "otros",
  ],
  items: [
    {
      title: "Aguacate Femenino",
      description:
        "Amigurumi de aguacate mujer, escencial para un recuerdo de pareja",
      category: "amigurumi",
      color: ["verde"],
      slug: "aguacate-fem",
      images: ["aguacate-fem.png"],
      price: 100,
      inStok: 3,
      tags: ["aguacate", "mujer", "aguacate femenino"],
    },
    {
      title: "Aguacate Masculino",
      description:
        "Amigurumi de aguacate hombre, escencial para un recuerdo de pareja",
      category: "amigurumi",
      color: ["verde"],
      slug: "aguacate-mas",
      images: ["aguacate-mas.png"],
      price: 100,
      inStok: 3,
      tags: ["aguacate", "mujer", "aguacate masculino"],
    },
    {
      title: "Ajolote",
      description: "Amigurumi de un ajolote méxicano",
      category: "amigurumi",
      color: ["rosa"],
      slug: "ajolote-mexicano",
      images: ["ajolote.png"],
      price: 150,
      inStok: 3,
      tags: ["ajolote", "mexicano", "ajolote mexicano"],
    },
    {
      title: "Almohada Blanca Tejida",
      description: "Almohada tejida de color blanco, relleno de cálidad",
      category: "almohadas",
      color: ["blanco"],
      slug: "almohada-blanca-tejida",
      images: ["almohada-blanca.png"],
      price: 300,
      inStok: 100,
      tags: ["almohadas", "tejidas", "blanco"],
    },
    {
      title: "Almohada Café Tejida",
      description:
        "Almohada tejida de color café, tiene un relleno de cálidad para que puedas dormir agusto y no te duela tu cuello. Es una excelente opción.",
      category: "almohadas",
      color: ["café"],
      slug: "almohada-cafe-tejida",
      images: ["almohada-cafe.png"],
      price: 400,
      inStok: 10,
      tags: ["almhoada", "almohada tejida", "café"],
    },
    {
      title: "Almohada Tejida Gris",
      description: "Almohada tejida de color gris, la tela es suave y cómoda.",
      category: "almohadas",
      color: ["gris"],
      slug: "almohada-gris-tejida",
      images: ["almohada-gris.png"],
      price: 250,
      inStok: 3,
      tags: ["almohada", "almohada-tejida", "gris"],
    },
    {
      title: "Anillo Color Verde-Azul",
      description:
        "Anillo tejido hecho a la medida de tu dedo, el color es verde y azul.",
      category: "anillos",
      color: ["verde-azul"],
      slug: "anillo-verde-azul",
      images: ["anillo-verde-azul.png"],
      price: 15,
      inStok: 100,
      tags: ["anillos", "verde", "azul"],
    },
    {
      title: "Aretes De Fresa",
      description:
        "Aretes con diseño de fresa, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["rojo"],
      slug: "aretes-de-fresa",
      images: ["aretes-de-fresa.png"],
      price: 35,
      inStok: 50,
      tags: ["aretes", "fresa", "rojo"],
    },
    {
      title: "Aretes De Flores",
      description:
        "Aretes con diseño de flores, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["variado"],
      slug: "aretes-flores",
      images: ["aretes-flores.png"],
      price: 35,
      inStok: 20,
      tags: ["aretes", "flores", "naranja", "café", "negro"],
    },
    {
      title: "Aretes Girasol",
      description:
        "Aretes con diseño de girasol, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["amarillo"],
      slug: "aretes-girasol",
      images: ["aretes-girasol.png"],
      price: 30,
      inStok: 20,
      tags: ["aretes", "girasol", "amarillo", "café"],
    },
    {
      title: "Aretes Verdes",
      description: "Aretes verdes, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["verde"],
      slug: "aretes-verdes",
      images: ["aretes-verdes.png"],
      price: 20,
      inStok: 60,
      tags: ["aretes", "redondos", "verde"],
    },
    {
      title: "Bolsa Amarilla",
      description: "Bolsa con diseño peculiar color amarilla, de gran cálidad.",
      category: "bolsas",
      color: ["amarilla"],
      slug: "bolsa-amarilla-tejida",
      images: ["bolsa-amarilla.png"],
      price: 550,
      inStok: 10,
      tags: ["bolsas", "amarilla", "bolsa tejida"],
    },
    {
      title: "Bolsa Café",
      description: "Bolsa con diseño peculiar color café, de gran cálidad.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe",
      images: ["bolsa-cafe.png"],
      price: 600,
      inStok: 5,
      tags: ["bolsas", "café", "bolsa tejida"],
    },
    {
      title: "Bolsa Café Tejida",
      description:
        "Bolsa tejida con diseño peculiar color café, de gran cálidad y espaciosa.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe-tejida",
      images: ["bolsa-cafe-2.png"],
      price: 750,
      inStok: 1,
      tags: ["bolsas", "café", "bolsa tejida", "espaciosa"],
    },
    {
      title: "Bolsa Tejida Café Oscuro",
      description:
        "Bolsa tejida con diseño peculiar color café oscuro, de gran cálidad y espaciosa.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe-oscuro",
      images: ["bolsa-cafe-oscuro.png"],
      price: 755,
      inStok: 3,
      tags: ["bolsas", "café oscuro", "oscuro", "bolsa tejida", "espaciosa"],
    },
    {
      title: "Amigurumi De Calabaza",
      description: "Amigurumi diseño de Calabaza, chiquita para decoración",
      category: "amigurumi",
      color: ["naranja"],
      slug: "amigurumi-calabaza",
      images: ["calabaza.png"],
      price: 50,
      inStok: 5,
      tags: ["deecoración", "naranja", "calabaza", "amigurumi"],
    },
    {
      title: "Amigurumi Carlitos Rugrats",
      description:
        "Amigurumi diseño de Carlitos la famosa serie de los Rugrats",
      category: "amigurumi",
      color: ["variado"],
      slug: "carlitos-rugrats",
      images: ["carlitos-rugrats.png"],
      price: 1000,
      inStok: 3,
      tags: ["carlitos", "rugrats"],
    },
    {
      title: "Amigurumi Cabeza De Mamut",
      description: "Amigurumi diseño de Mamut, cabeza chiquita para decoración",
      category: "amigurumi",
      color: ["café"],
      slug: "mamut",
      images: ["mamut.png"],
      price: 50,
      inStok: 5,
      tags: ["cabeza", "mamut", "café"],
    },
    {
      title: "Amigurumi Frozen",
      description: "Amigurumi diseño de Frozen la famosa película de Disney",
      category: "amigurumi",
      color: ["variado"],
      slug: "frozen",
      images: ["frozen.png"],
      price: 1050,
      inStok: 6,
      tags: ["frozen", "disney", "muñeco"],
    },
    {
      title: "Amigurumi Osito Cariñosito",
      description: "Amigurumi diseño de osito cariñosito la famosa caricatura.",
      category: "amigurumi",
      color: ["rosa"],
      slug: "osito-carinosito",
      images: ["osito-carinosito.png"],
      price: 900,
      inStok: 8,
      tags: ["osito", "caricatura", "osos"],
    },
    {
      title: "Amigurumi Osito Con Bufanda",
      description: "Amigurumi diseño de un osito con bufanda.",
      category: "amigurumi",
      color: ["café"],
      slug: "osito-con-bufanda",
      images: ["osito-con-bufanda.png"],
      price: 700,
      inStok: 58,
      tags: ["osito", "osos", "café"],
    },
    {
      title: "Amigurumi Sirenita",
      description:
        "Amigurumi diseño de la sirenita, famosa película de disney.",
      category: "amigurumi",
      color: ["variado"],
      slug: "sirenita-amigurumi",
      images: ["sirenita.png"],
      price: 950,
      inStok: 3,
      tags: ["disney", "pelicula", "sirenita"],
    },
    {
      title: "Amigurumi Tiburón",
      description: "Amigurumi diseño de un tiburón.",
      category: "amigurumi",
      color: ["gris", "azul"],
      slug: "tiburon-amigurumi",
      images: ["tiburon.png"],
      price: 400,
      inStok: 7,
      tags: ["tiburon", "amigurumi", "gris", "azul"],
    },
    {
      title: "Sandalias Tejidas",
      description: "sandalías tejidas para bebés de 0 años hasta 2 años.",
      category: "otros",
      color: ["amarillo", "rosa", "verde"],
      slug: "sandalias-tejidas",
      images: ["sandalias-tejidas.png"],
      price: 200,
      inStok: 250,
      tags: ["amarillo", "rosa", "verde", "sandalias", "bebés"],
    },
    {
      title: "Monedero Llavero De Pollito",
      description:
        "Es un monedero chiquito y muy bonito con ese diseño de pollito.",
      category: "monederos",
      color: ["amarillo"],
      slug: "monedero-llavero-pollito",
      images: ["monedero-llavero-pollito.png"],
      price: 65,
      inStok: 70,
      tags: ["monedero", "pollito", "amarillo"],
    },
    {
      title: "Rosa Tejida",
      description:
        "Excelente opción para dar de regalo a tu pareja, con la promesa de que su amor se terminará cuando la rosa se marchite.",
      category: "flores",
      color: ["roja", "rosa", "blanca"],
      slug: "rosa-tejida",
      images: ["rosa-tejida.png"],
      price: 250,
      inStok: 60,
      tags: ["rosa", "rosa tejida", "regalos", "san valentín"],
    },
    {
      title: "Tulipanes Tejidos",
      description: "Excelente opción para dar de regalo a tu pareja.",
      category: "flores",
      color: ["rosa", "blanco"],
      slug: "tulipanes-tejidos",
      images: ["tulipanes-tejidos.png"],
      price: 250,
      inStok: 66,
      tags: ["tilipán", "tilipán tejida", "regalos", "san valentín"],
    },
    {
      title: "Funda Para Latas",
      description: "Funda a la medida para cualquier lata, bonita y práctica.",
      category: "fundas",
      color: ["variado"],
      slug: "funda-lata",
      images: ["funda-lata.png"],
      price: 150,
      inStok: 6,
      tags: ["fundas", "latas"],
    },
    {
      title: "Funda Para Refrescos",
      description:
        "Funda a la medida para cualquier refresco de lata, bonita y práctica.",
      category: "fundas",
      color: ["variado"],
      slug: "funda-refresco",
      images: ["funda-refresco.png"],
      price: 155,
      inStok: 3,
      tags: ["fundas", "latas"],
    },
  ],
};
