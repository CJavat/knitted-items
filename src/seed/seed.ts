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
  inStock: number;
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
      images: ["aguacate-fem_ll8nsm.png"],
      price: 100,
      inStock: 3,
      tags: ["aguacate", "mujer", "aguacate femenino"],
    },
    {
      title: "Aguacate Masculino",
      description:
        "Amigurumi de aguacate hombre, escencial para un recuerdo de pareja",
      category: "amigurumi",
      color: ["verde"],
      slug: "aguacate-mas",
      images: ["aguacate-mas_zw0g3x.png"],
      price: 100,
      inStock: 3,
      tags: ["aguacate", "mujer", "aguacate masculino"],
    },
    {
      title: "Ajolote",
      description: "Amigurumi de un ajolote méxicano",
      category: "amigurumi",
      color: ["rosa"],
      slug: "ajolote-mexicano",
      images: ["ajolote_l0sbrj.png"],
      price: 150,
      inStock: 3,
      tags: ["ajolote", "mexicano", "ajolote mexicano"],
    },
    {
      title: "Almohada Blanca Tejida",
      description: "Almohada tejida de color blanco, relleno de cálidad",
      category: "almohadas",
      color: ["blanco"],
      slug: "almohada-blanca-tejida",
      images: ["almohada-blanca_krpren.png"],
      price: 300,
      inStock: 100,
      tags: ["almohadas", "tejidas", "blanco"],
    },
    {
      title: "Almohada Café Tejida",
      description:
        "Almohada tejida de color café, tiene un relleno de cálidad para que puedas dormir agusto y no te duela tu cuello. Es una excelente opción.",
      category: "almohadas",
      color: ["café"],
      slug: "almohada-cafe-tejida",
      images: ["almohada-gris_jx2lt4.png"],
      price: 400,
      inStock: 10,
      tags: ["almhoada", "almohada tejida", "café"],
    },
    {
      title: "Almohada Tejida Gris",
      description: "Almohada tejida de color gris, la tela es suave y cómoda.",
      category: "almohadas",
      color: ["gris"],
      slug: "almohada-gris-tejida",
      images: ["almohada-gris_jx2lt4.png"],
      price: 250,
      inStock: 3,
      tags: ["almohada", "almohada-tejida", "gris"],
    },
    {
      title: "Anillo Color Verde-Azul",
      description:
        "Anillo tejido hecho a la medida de tu dedo, el color es verde y azul.",
      category: "anillos",
      color: ["verde-azul"],
      slug: "anillo-verde-azul",
      images: ["anillo-verde-azul_ncdcmv.png"],
      price: 15,
      inStock: 100,
      tags: ["anillos", "verde", "azul"],
    },
    {
      title: "Aretes De Fresa",
      description:
        "Aretes con diseño de fresa, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["rojo"],
      slug: "aretes-de-fresa",
      images: ["aretes-flores_c8sxql.png"],
      price: 35,
      inStock: 50,
      tags: ["aretes", "fresa", "rojo"],
    },
    {
      title: "Aretes De Flores",
      description:
        "Aretes con diseño de flores, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["variado"],
      slug: "aretes-flores",
      images: ["aretes-flores_c8sxql.png"],
      price: 35,
      inStock: 20,
      tags: ["aretes", "flores", "naranja", "café", "negro"],
    },
    {
      title: "Aretes Girasol",
      description:
        "Aretes con diseño de girasol, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["amarillo"],
      slug: "aretes-girasol",
      images: ["aretes-girasol_muttpy.png"],
      price: 30,
      inStock: 20,
      tags: ["aretes", "girasol", "amarillo", "café"],
    },
    {
      title: "Aretes Verdes",
      description: "Aretes verdes, para que luzcas bonita a donde vayas.",
      category: "aretes",
      color: ["verde"],
      slug: "aretes-verdes",
      images: ["aretes-verdes_vyt6hs.png"],
      price: 20,
      inStock: 60,
      tags: ["aretes", "redondos", "verde"],
    },
    {
      title: "Bolsa Amarilla",
      description: "Bolsa con diseño peculiar color amarilla, de gran cálidad.",
      category: "bolsas",
      color: ["amarilla"],
      slug: "bolsa-amarilla-tejida",
      images: ["bolsa-amarilla_b5xaru.png"],
      price: 550,
      inStock: 10,
      tags: ["bolsas", "amarilla", "bolsa tejida"],
    },
    {
      title: "Bolsa Café",
      description: "Bolsa con diseño peculiar color café, de gran cálidad.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe",
      images: ["bolsa-cafe_baa7vp.png"],
      price: 600,
      inStock: 5,
      tags: ["bolsas", "café", "bolsa tejida"],
    },
    {
      title: "Bolsa Café Tejida",
      description:
        "Bolsa tejida con diseño peculiar color café, de gran cálidad y espaciosa.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe-tejida",
      images: ["bolsa-cafe-2_ypuljg.png"],
      price: 750,
      inStock: 1,
      tags: ["bolsas", "café", "bolsa tejida", "espaciosa"],
    },
    {
      title: "Bolsa Tejida Café Oscuro",
      description:
        "Bolsa tejida con diseño peculiar color café oscuro, de gran cálidad y espaciosa.",
      category: "bolsas",
      color: ["café"],
      slug: "bolsa-cafe-oscuro",
      images: ["bolsa-cafe-oscuro_wuo7tc.png"],
      price: 755,
      inStock: 3,
      tags: ["bolsas", "café oscuro", "oscuro", "bolsa tejida", "espaciosa"],
    },
    {
      title: "Amigurumi De Calabaza",
      description: "Amigurumi diseño de Calabaza, chiquita para decoración",
      category: "amigurumi",
      color: ["naranja"],
      slug: "amigurumi-calabaza",
      images: ["calabaza_x5dutv.png"],
      price: 50,
      inStock: 5,
      tags: ["deecoración", "naranja", "calabaza", "amigurumi"],
    },
    {
      title: "Amigurumi Carlitos Rugrats",
      description:
        "Amigurumi diseño de Carlitos la famosa serie de los Rugrats",
      category: "amigurumi",
      color: ["variado"],
      slug: "carlitos-rugrats",
      images: ["carlitos-rugrats_jlle4z.png"],
      price: 1000,
      inStock: 3,
      tags: ["carlitos", "rugrats"],
    },
    {
      title: "Amigurumi Cabeza De Mamut",
      description: "Amigurumi diseño de Mamut, cabeza chiquita para decoración",
      category: "amigurumi",
      color: ["café"],
      slug: "mamut",
      images: ["mamut_phlufa.png"],
      price: 50,
      inStock: 5,
      tags: ["cabeza", "mamut", "café"],
    },
    {
      title: "Amigurumi Frozen",
      description: "Amigurumi diseño de Frozen la famosa película de Disney",
      category: "amigurumi",
      color: ["variado"],
      slug: "frozen",
      images: ["frozen_l0kyyx.png"],
      price: 1050,
      inStock: 6,
      tags: ["frozen", "disney", "muñeco"],
    },
    {
      title: "Amigurumi Osito Cariñosito",
      description: "Amigurumi diseño de osito cariñosito la famosa caricatura.",
      category: "amigurumi",
      color: ["rosa"],
      slug: "osito-carinosito",
      images: ["osito-carinosito_x8dhif.png"],
      price: 900,
      inStock: 8,
      tags: ["osito", "caricatura", "osos"],
    },
    {
      title: "Amigurumi Osito Con Bufanda",
      description: "Amigurumi diseño de un osito con bufanda.",
      category: "amigurumi",
      color: ["café"],
      slug: "osito-con-bufanda",
      images: ["osito-con-bufanda_xz178w.png"],
      price: 700,
      inStock: 58,
      tags: ["osito", "osos", "café"],
    },
    {
      title: "Amigurumi Sirenita",
      description:
        "Amigurumi diseño de la sirenita, famosa película de disney.",
      category: "amigurumi",
      color: ["variado"],
      slug: "sirenita-amigurumi",
      images: ["sirenita_u0aept.png"],
      price: 950,
      inStock: 3,
      tags: ["disney", "pelicula", "sirenita"],
    },
    {
      title: "Amigurumi Tiburón",
      description: "Amigurumi diseño de un tiburón.",
      category: "amigurumi",
      color: ["gris", "azul"],
      slug: "tiburon-amigurumi",
      images: ["tiburon_apsaq0.png"],
      price: 400,
      inStock: 7,
      tags: ["tiburon", "amigurumi", "gris", "azul"],
    },
    {
      title: "Sandalias Tejidas",
      description: "sandalías tejidas para bebés de 0 años hasta 2 años.",
      category: "otros",
      color: ["amarillo", "rosa", "verde"],
      slug: "sandalias-tejidas",
      images: ["sandalias-tejidas_ghzsof.png"],
      price: 200,
      inStock: 250,
      tags: ["amarillo", "rosa", "verde", "sandalias", "bebés"],
    },
    {
      title: "Monedero Llavero De Pollito",
      description:
        "Es un monedero chiquito y muy bonito con ese diseño de pollito.",
      category: "monederos",
      color: ["amarillo"],
      slug: "monedero-llavero-pollito",
      images: ["monedero-llavero-pollito_vxj4xn.png"],
      price: 65,
      inStock: 70,
      tags: ["monedero", "pollito", "amarillo"],
    },
    {
      title: "Rosa Tejida",
      description:
        "Excelente opción para dar de regalo a tu pareja, con la promesa de que su amor se terminará cuando la rosa se marchite.",
      category: "flores",
      color: ["roja", "rosa", "blanca"],
      slug: "rosa-tejida",
      images: ["rosa-tejida_qqjxaj.png"],
      price: 250,
      inStock: 60,
      tags: ["rosa", "rosa tejida", "regalos", "san valentín"],
    },
    {
      title: "Tulipanes Tejidos",
      description: "Excelente opción para dar de regalo a tu pareja.",
      category: "flores",
      color: ["rosa", "blanco"],
      slug: "tulipanes-tejidos",
      images: ["tulipanes-tejidos_d2gzyo.png"],
      price: 250,
      inStock: 66,
      tags: ["tilipán", "tilipán tejida", "regalos", "san valentín"],
    },
    {
      title: "Funda Para Latas",
      description: "Funda a la medida para cualquier lata, bonita y práctica.",
      category: "fundas",
      color: ["variado"],
      slug: "funda-lata",
      images: ["funda-lata_rjukhz.png"],
      price: 150,
      inStock: 6,
      tags: ["fundas", "latas"],
    },
    {
      title: "Funda Para Refrescos",
      description:
        "Funda a la medida para cualquier refresco de lata, bonita y práctica.",
      category: "fundas",
      color: ["variado"],
      slug: "funda-refresco",
      images: ["funda-refresco_hlsc5i.png"],
      price: 155,
      inStock: 3,
      tags: ["fundas", "latas"],
    },
  ],
};
