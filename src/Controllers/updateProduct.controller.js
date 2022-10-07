import updateProductService from "../Services/updateProduct.service";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const product = await updateProductService(id, user);
    return res.status(200).json({
      product: product,
      message: "Updated",
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default updateProductController;
