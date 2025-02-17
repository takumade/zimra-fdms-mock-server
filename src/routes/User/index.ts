import { Router } from 'express';
import * as userController from '../../controllers/User';

const router = Router();

// Add your user routes here
// Example: router.get('/', userController.getAllUsers);


router.get('/v1/:deviceID/GetUsersList', () =>{});

export { router as default };
