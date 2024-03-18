import express from 'express';
const router = express.Router();
import ScrapperRouter from '../routes/Scrapper/index.js';
import UserRouter from '../routes/user/index.js'
import TokenRouter from '../routes/token/index.js'
/** Scrap Router */
router.use('/scrap',ScrapperRouter);
/** User Router */
router.use('/user',UserRouter);
/** Token Router */
router.use('/token',TokenRouter);
export default router;
