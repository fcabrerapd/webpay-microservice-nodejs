import wp from '../config/transbank.js';

export const createPayment = async (req, res) => {
    try {
        const { amount } = req.body;
        const buyOrder = "O-" + Math.floor(Math.random() * 10000);
        const sessionId = "S-" + Math.random();
        const returnUrl = "http://localhost:5173/commit";

        const response = await wp.create(buyOrder, sessionId, amount, returnUrl);

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const commitPayment = async (req, res) => {
    try {
        const { token_ws } = req.query;
        if (!token_ws) {
            return res.status(400).json({ error: "token not provided" });
        }
        const response = await wp.commit(token_ws);

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};