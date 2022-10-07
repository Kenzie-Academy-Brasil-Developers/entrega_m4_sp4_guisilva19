import deleteCategoryService from "../Services/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCategoryService(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deleteCategoryController;
