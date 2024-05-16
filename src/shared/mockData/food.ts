import { Food } from "../interfaces/food";
import { Column } from "../interfaces/table";

export const foodColumns: Column[] = [
  { key: "name", label: "Name", size: 100, alignment: "center" },
  { key: "category", label: "Category", size: 100, alignment: "center" },
  { key: "calories", label: "Calories", size: 100, alignment: "center" },
  { key: "protein", label: "Protein (g)", size: 100, alignment: "center" },
  { key: "fat", label: "Fat (g)", size: 100, alignment: "center" },
  { key: "price", label: "Price (€)", size: 100, alignment: "center" },
];

export const foodRows: Food[] = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    calories: 52,
    protein: 0.3,
    fat: 0.2,
    price: 0.3,
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    calories: 96,
    protein: 1.3,
    fat: 0.3,
    price: 0.2,
  },
  {
    id: 3,
    name: "Chicken Breast",
    category: "Meat",
    calories: 165,
    protein: 31,
    fat: 3.6,
    price: 4.2,
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetable",
    calories: 55,
    protein: 3.7,
    fat: 0.6,
    price: 0.9,
  },
  {
    id: 5,
    name: "Salmon",
    category: "Fish",
    calories: 208,
    protein: 20,
    fat: 13,
    price: 10.0,
  },
];
