import createProductService from "../Services/createProduct.service";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const createdProduct = await createProductService(name, price, category_id);

    return res.status(201).json({
      product: createdProduct,
      message: "Created",
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createProductController;
