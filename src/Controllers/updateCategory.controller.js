import updateCategoryService from "../Services/updateCategory.service";

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await updateCategoryService(name, id);
    return res.status(200).json({
      message: "Product Updated",
      category: updatedCategory,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export default updateCategoryController;
