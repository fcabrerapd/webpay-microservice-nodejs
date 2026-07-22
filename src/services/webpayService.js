import wp from '../config/transbank.js';
import { randomUUID } from 'crypto';

export const createTransaction = async (amount, returnUrl) => {
    if (!amount || typeof amount !== 'number' || amount <= 0){
        throw new Error('Monto invalido');
    }

    const buyOrder = "O-" + Date.now();
    const sessionId = "S-" + randomUUID();

    const response = await wp.create(buyOrder, sessionId, amount, returnUrl);
    return response;
};

export const commitTransaction = async (token_ws) => {
    if (!token_ws){
        throw new Error('Token no proporcionado');
    }
    const response = await wp.commit(token_ws);
    return response;
};