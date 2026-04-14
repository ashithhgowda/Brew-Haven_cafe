export type MenuCategory = "starters" | "maincourse" | "appetizers" | "drinks";

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: MenuCategory;
};

export const menuCategories: MenuCategory[] = [
  "starters",
  "maincourse",
  "appetizers",
  "drinks",
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Smoked Tomato Basil Soup",
    price: 8.5,
    description:
      "Slow-roasted tomato soup finished with basil oil and toasted focaccia croutons.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    category: "starters",
  },
  {
    id: 2,
    name: "Truffle Herb Bruschetta",
    price: 9,
    description:
      "Charred sourdough topped with marinated cherry tomatoes, herbs, and truffle zest.",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
    category: "starters",
  },
  {
    id: 3,
    name: "Firewood Chicken Steak",
    price: 18.5,
    description:
      "Grilled chicken breast with peppercorn glaze, buttered greens, and garlic mash.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    category: "maincourse",
  },
  {
    id: 4,
    name: "Mushroom Risotto",
    price: 17,
    description:
      "Creamy arborio rice with wild mushrooms, parmesan, and crispy sage.",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
    category: "maincourse",
  },
  {
    id: 5,
    name: "Crispy Zucchini Fritters",
    price: 10.5,
    description:
      "Golden fritters with whipped feta dip, lemon zest, and chili honey drizzle.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    category: "appetizers",
  },
  {
    id: 6,
    name: "Loaded Potato Bites",
    price: 11,
    description:
      "Crisp potato rounds topped with smoked cheese, scallions, and sour cream.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    category: "appetizers",
  },
  {
    id: 7,
    name: "Caramel Hazelnut Latte",
    price: 6.5,
    description:
      "Double-shot espresso with velvety milk, hazelnut syrup, and caramel foam.",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    category: "drinks",
  },
  {
    id: 8,
    name: "Citrus Cold Brew",
    price: 6,
    description:
      "12-hour cold brew infused with orange peel and a hint of vanilla bean.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    category: "drinks",
  },
  
];

export function formatCategoryName(category: string) {
  if (category === "maincourse") return "Main Course";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export function isMenuCategory(value: string): value is MenuCategory {
  return menuCategories.includes(value as MenuCategory);
}
