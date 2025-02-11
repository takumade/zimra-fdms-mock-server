import { Router } from 'express';

// @ts-ignore
import * as publicController from '../../controllers/Public';

const router = Router();

// Add your public routes here
// Example: router.get('/', publicController.getPublicInfo);

export { router as default };
