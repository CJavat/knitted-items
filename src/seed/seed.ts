interface SeedUser {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

interface SeedData {
  users: SeedUser[];
  categories: string[];
  items: any[];
}

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
    "funda para lapices",
    "almohadas",
    "otros",
  ],
  items: [],
};
