import { Router } from "express";
import { createPayment, commitPayment } from '../controllers/webpayController.js';

const router = Router();

router.post('/create', createPayment);
router.get('/commit', commitPayment);

export default router;