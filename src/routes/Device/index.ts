import { Router } from 'express';

// @ts-ignore

import * as deviceController from '../../controllers/Device';

const router = Router();

router.get('/v1/:deviceID/GetConfig', deviceController.getConfig);
router.get('/v1/:deviceID/GetStatus', deviceController.getStatus);
router.post('/v1/:deviceID/OpenDay', deviceController.openDay);
router.post('/v1/:deviceID/CloseDay', deviceController.closeDay);
router.post('/v1/:deviceID/IssueCertificate', deviceController.issueCertificate);
router.post('/v1/:deviceID/SubmitReciept', deviceController.submitReciept);
router.post('/v1/:deviceID/Ping', deviceController.ping);
router.post('/v1/:deviceID/SubmitFile', deviceController.submitFile);
router.get('/v1/:deviceID/SubmittedFileList', deviceController.submittedFileList);


export { router as default };
