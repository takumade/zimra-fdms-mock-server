import { Router } from 'express';

// @ts-ignore
import * as deviceController from '../../controllers/Device';

const router = Router();

// Add your device routes here
// Example: router.get('/', deviceController.getAllDevices);

export { router as default };
