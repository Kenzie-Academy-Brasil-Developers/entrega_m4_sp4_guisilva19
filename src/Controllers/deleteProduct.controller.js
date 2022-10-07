import deleteProductService from "../Services/deleteProduct.service";

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProductService(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export default deleteProductController;
