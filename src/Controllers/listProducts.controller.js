import { response } from "express";
import listProductsService from "../Services/listProducts.service";

const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();
    return res.status(200).json(products);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};
export default listProductsController;
