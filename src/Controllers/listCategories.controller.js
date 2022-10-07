import listCategoriesService from "../Services/listCategories.service";

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listCategoriesController;
