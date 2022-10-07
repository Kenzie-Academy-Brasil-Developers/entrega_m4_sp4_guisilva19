import { Router } from "express";
import createCategoryController from "../Controllers/createCategory.controller";
import createProductController from "../Controllers/createProduct.controller";
import deleteCategoryController from "../Controllers/deleteCategory.controller";
import deleteProductController from "../Controllers/deleteProduct.controller";
import listCategoriesController from "../Controllers/listCategories.controller";
import listCategoryController from "../Controllers/listCategory.controller";
import listProductController from "../Controllers/listProduct.controller";
import listProductsController from "../Controllers/listProducts.controller";
import updateCategoryController from "../Controllers/updateCategory.controller";
import updateProductController from "../Controllers/updateProduct.controller";
import listProductAndCategoryController from "../Controllers/listProductAndCategory.controller";

const router = Router();

router.post("/categories", createCategoryController);
router.post("/products", createProductController);

router.get("/categories", listCategoriesController);
router.get("/categories/:id", listCategoryController);
router.get("/products", listProductsController);
router.get("/products/:id", listProductController);
router.get("/products/category/:category_id", listProductAndCategoryController);

router.patch("/categories/:id", updateCategoryController);
router.patch("/products/:id", updateProductController);

router.delete("/categories/:id", deleteCategoryController);
router.delete("/products/:id", deleteProductController);

export default router;
