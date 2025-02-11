import { Router } from 'express';

// @ts-ignore

import { getConfig, getStatus, openDay, closeDay, issueCertificate } from '../../controllers/Device';


const router = Router();

// Add your device routes here
// Example: router.get('/', deviceController.getAllDevices);

router.get('/v1/:deviceID/GetConfig', getConfig);
router.get('/v1/:deviceID/GetStatus', getStatus);
router.post('/v1/:deviceID/OpenDay', openDay);
router.post('/v1/:deviceID/CloseDay', closeDay);
router.post('/v1/:deviceID/IssueCertificate', issueCertificate);

export { router as default };
