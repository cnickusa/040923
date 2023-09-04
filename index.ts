// 1. 
interface IChiga {
    name: string,
    age: number,
    position: boolean,
}

// 2.


// 3.
// Определение типа Product
type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    colors: string[];
};
const products: Product[] = [
    {
      id: 1,
      title: "Ноутбук",
      description: "Мощный ноутбук для работы и развлечений",
      price: 999.99,
      colors: ["серебряный", "черный"],
    },
    {
      id: 2,
      title: "Смартфон",
      description: "Современный смартфон с отличной камерой",
      price: 599.99,
      colors: ["белый", "голубой", "черный"],
    },
    {
      id: 3,
      title: "Наушники",
      description: "Беспроводные наушники с качественным звуком",
      price: 149.99,
      colors: ["черный", "красный"],
    },
];

const firstProduct = products[0];
console.log("Название продукта: " + firstProduct.title);
console.log("Описание продукта: " + firstProduct.description);
console.log("Цена продукта: $" + firstProduct.price.toFixed(2));
console.log("Доступные цвета: " + firstProduct.colors.join(", "));
  









