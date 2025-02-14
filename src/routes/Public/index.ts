import { Router } from 'express';

// @ts-ignore
import * as publicController from '../../controllers/Public';

const router = Router();

// Add your public routes here
// Example: router.get('/', publicController.getPublicInfo);

router.post('/v1/:deviceID/RegisterDevice', publicController.registerDevice);
router.get('v1/GetServerCertificate', publicController.getServerCertificate);
router.post('/v1/:deviceID/VerifyTaxpayerInformation', publicController.verifyTaxpayerInformation);

export { router as default };
