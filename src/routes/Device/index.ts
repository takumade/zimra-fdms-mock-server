import { Router } from 'express';

// @ts-ignore

import { getConfig } from '../../controllers/Device';

const router = Router();

// Add your device routes here
// Example: router.get('/', deviceController.getAllDevices);

router.get('/v1/:deviceID/GetConfig', getConfig);


export { router as default };
