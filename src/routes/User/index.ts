import { Router } from 'express';
import * as userController from '../../controllers/User';

const router = Router();

// Add your user routes here
// Example: router.get('/', userController.getAllUsers);


router.get('/v1/:deviceID/GetUsersList', () =>{});
router.post('/v1/:deviceID/SendSecurityCodeToTaxpayer', () =>{});
router.post('/v1/:deviceID/CreateUser', () =>{});

export { router as default };
