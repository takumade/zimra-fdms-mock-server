import { Router } from 'express';

// @ts-ignore

import { getConfig, getStatus } from '../../controllers/Device';


const router = Router();

// Add your device routes here
// Example: router.get('/', deviceController.getAllDevices);

router.get('/v1/:deviceID/GetConfig', getConfig);
router.get('/v1/:deviceID/GetStatus', getStatus);


export { router as default };
