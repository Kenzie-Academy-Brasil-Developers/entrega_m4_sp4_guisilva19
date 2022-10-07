import database from "../database";

const listProductAndCategoryService = async (id) => {
  try {
    const res = await database.query(
      `SELECT
                pd.name,
                pd.price,
                ct.name category
            FROM 
                products pd
            JOIN categories ct ON pd.category_id = ct.id
            WHERE pd.category_id = $1;
        `,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("Not Exists");
    }

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default listProductAndCategoryService;
