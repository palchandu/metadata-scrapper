import express from 'express';
import { 
	createTokenHandle,
	getTokenHandle,
	getTokensHandle,
	updateTokenHandle,
	deleteTokenHandle,
	getTokenByUserHandle,} from '../../controller/index.js'

const router = express.Router();

/** Token router */
router.post('/create',createTokenHandle);
router.get('/:id',getTokenHandle);
router.get('/',getTokensHandle);
router.put('/:id',updateTokenHandle);
router.delete('/:id',deleteTokenHandle);
router.get('/user/:id',getTokenByUserHandle);

export default router
