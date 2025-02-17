import { Router } from 'express';
import * as userController from '../../controllers/User';

const router = Router();

// Add your user routes here
// Example: router.get('/', userController.getAllUsers);


router.get('/v1/:deviceID/GetUsersList', () =>{});
router.post('/v1/:deviceID/SendSecurityCodeToTaxpayer', () =>{});
router.post('/v1/:deviceID/CreateUser', () =>{});
router.post('/v1/:deviceID/Login', () =>{});
router.post('/v1/:deviceID/SendSecurityCodeToUserPhone', () =>{});
router.post('/v1/:deviceID/SendSecurityCodeToUserEmail', () =>{});
router.post('/v1/:deviceID/ConfirmUser', () =>{});
router.post('/v1/:deviceID/ChangePassword', () =>{});
router.post('/v1/:deviceID/ResetPassword', () =>{});
router.post('/v1/:deviceID/ConfirmContact', () =>{});
router.post('/v1/:deviceID/Update', () =>{});
router.post('/v1/:deviceID/ConfirmPasswordReset', () =>{});


export { router as default };
