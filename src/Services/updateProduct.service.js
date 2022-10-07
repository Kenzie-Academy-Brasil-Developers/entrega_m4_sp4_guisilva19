import database from "../database";

const updateProductService = async (id, user) => {
  try {
    const keys = Object.keys(user);
    const values = Object.values(user);

    let query = "UPDATE products SET";

    keys.forEach((key, index) => {
      query += ` ${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);
    if (res.rowCount === 0) {
      throw new Error("Product not exists");
    }
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
