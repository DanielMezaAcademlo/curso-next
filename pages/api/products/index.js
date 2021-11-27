import { createItem, getItems } from "../../../db/DB";

export default async function productsHandler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const items = getItems();
    const response = {
      status: 200,
      length: items.length,
      data: items
    };
    res.status(200).json(response);
  } else if (method === "POST") {
    const { body } = req;
    const items = await createItem(body);

    res.status(200).json({
      status: 200,
      message: "Producto creado con éxito",
      body,
      data: items
    });
  }
}
