import database from "../database";

const listCategoryService = async (id) => {
  try {
    const res = await database.query(
      `SELECT * FROM categories WHERE id = $1;`,
      [id]
    );

    return res.rows[0];
  } catch (err) {
    throw new Error("Cannot list");
  }
};

export default listCategoryService;
