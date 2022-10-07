import database from "../database";

const deleteProductService = async (id) => {
  try {
    const res = await database.query(
      `DELETE FROM
            products
        WHERE id = $1
        RETURNING *;`,
      [id]
    );
    if (res.rowCount === 0) {
      throw new Error("Not Exists");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteProductService;
