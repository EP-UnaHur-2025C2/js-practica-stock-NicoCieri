export const validaciones = [
  {
    regla: "stock",
    fn: ({ stock }, value) => stock > value,
  },
  {
    regla: "precio",
    fn: ({ precio }, value) => precio <= value,
  },

  {
    regla: "nombre",
    fn: ({ nombre }, value) => nombre.length < value,
  },
  {
    regla: "categoria",
    fn: ({ categorias }, value) => value.includes(categorias),
  },
  {
    regla: "precioRango",
    fn: ({ precio }, value) => precio < value.min && precio > value.max,
  },
  {
    regla: "stockRango",
    fn: ({ stock }, value) => stock < value.min && stock > value.max,
  },
];
