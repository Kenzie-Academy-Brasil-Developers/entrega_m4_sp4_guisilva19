import listProductAndCategoryService from "../Services/listProductAndCategory.service";

const listProductAndCategoryController = async (req, res) => {
  const { category_id } = req.params;
  try {
    const result = await listProductAndCategoryService(category_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default listProductAndCategoryController;
