import express from 'express';
import { Scrapper} from '../../controller/index.js'
const router = express.Router();

router.post('/',Scrapper);
export default router