import * as webpayService from '../services/webpayService.js';

export const createPayment = async (req, res) => {
    try {
        const { amount } = req.body;
        const returnUrl = process.env.RETURN_URL || "http://localhost:5173/commit";
        const result = await webpayService.createTransaction(amount, returnUrl);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const commitPayment = async (req, res) => {
    try {
        const { token_ws } = req.query;
        const result = await webpayService.commitTransaction(token_ws);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};