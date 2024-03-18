import express from 'express';
import { 
	Scrapper,
} from '../../controller/scrapper.controller.js'

const router = express.Router();

router.post('/',Scrapper);

export default router