import { Router } from 'express';
import * as userController from '../../controllers/User';

const router = Router();

// Add your user routes here
// Example: router.get('/', userController.getAllUsers);


router.get('/v1/:deviceID/GetUsersList', userController.getUsersList);
router.post('/v1/:deviceID/SendSecurityCodeToTaxpayer', userController.sendSecurityCodeToTaxpayer);
router.post('/v1/:deviceID/CreateUser', userController.createUser);
router.post('/v1/:deviceID/Login', userController.loginUser);
router.post('/v1/:deviceID/SendSecurityCodeToUserPhone', userController.sendSecurityCodeToUserPhone);
router.post('/v1/:deviceID/SendSecurityCodeToUserEmail', userController.sendSecurityCodeToUserEmail);
router.post('/v1/:deviceID/ConfirmUser', userController.confirmUser);
router.post('/v1/:deviceID/ChangePassword', userController.changePassword);
router.post('/v1/:deviceID/ResetPassword', userController.resetPassword);
router.post('/v1/:deviceID/ConfirmContact', userController.confirmContact);
router.post('/v1/:deviceID/Update', userController.update);
router.post('/v1/:deviceID/ConfirmPasswordReset', userController.confirmPasswordReset);


export { router as default };
