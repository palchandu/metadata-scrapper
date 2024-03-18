import express from 'express';
import { createUserHandle,getUserHandle,getUsersHandle,updateUserHandle,deleteUserHandle} from '../../controller/index.js'

const router = express.Router();

/** Create user router */
router.post('/create',createUserHandle);
/** Get user router */
router.get('/:id',getUserHandle);
/** Get users router */
router.get('/',getUsersHandle);
/** Update user router */
router.put('/:id',updateUserHandle);
/** Delete user router */
router.delete('/:id',deleteUserHandle);

export default router
