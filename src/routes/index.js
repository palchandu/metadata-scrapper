import express from 'express';
const router = express.Router();
import ScrapperRouter from '../routes/Scrapper/index.js';
router.use('/scrap',ScrapperRouter);
export default router;
