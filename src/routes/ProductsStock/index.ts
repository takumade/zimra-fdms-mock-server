import { Router } from 'express';
import * as productsStockController from '../../controllers/ProductsStock';

const router = Router();

// Add your products stock routes here
// Example: router.get('/', productsStockController.getAllProducts);


router.get('/v1/:deviceID/Search', productsStockController.getProductsStock);

export { router as default };
