import database from "../database";

const listService = async () => {
  try {
    const res = await database.query(
      `SELECT 
                *
            FROM
                products;`,
      []
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listService;
