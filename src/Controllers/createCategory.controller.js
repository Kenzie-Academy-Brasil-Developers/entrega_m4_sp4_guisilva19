import createCategoryService from "../Services/createCategory.service";

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  try {
    const createdCategory = await createCategoryService(name);
    return res.status(201).json({
      category: createdCategory,
      message: "Created",
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createCategoryController;
