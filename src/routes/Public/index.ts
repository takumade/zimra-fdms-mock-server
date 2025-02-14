import { Router } from 'express';

// @ts-ignore
import * as publicController from '../../controllers/Public';

const router = Router();

// Add your public routes here
// Example: router.get('/', publicController.getPublicInfo);

router.post('/v1/:deviceID/RegisterDevice', ()=>{});
router.get('v1/GetServerCertificate', ()=>{});
router.post('/v1/:deviceID/VerifyTaxpayerInformation', ()=>{});

export { router as default };
