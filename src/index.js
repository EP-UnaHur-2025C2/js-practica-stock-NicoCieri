import express from "express";
import productos from "../data/productos.json" with { type: "json" };
import { validaciones } from "./filtros/validaciones.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const validacionesDiccionario = validaciones.reduce((acc, { regla, fn }) => {
  acc[regla] = fn;
  return acc;
}, {});

const cumpleConFiltros = (filtros) => (producto) =>
  filtros.every(({ fn, values }) =>
    validacionesDiccionario[fn](producto, values)
  );

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.post("/productos/filtrar", (req, res) => {
  const filtros = req.body;
  const productosFiltrados = productos.filter(cumpleConFiltros(filtros));
  res.json(productosFiltrados);
});

app.listen(PORT, () => {
  console.log(`Server iniciado en puerto ${PORT}`);
});
