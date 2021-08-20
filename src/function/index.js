import * as api from '../api';

export const createMessage = async (message) => {
    try {
        const { data } = await api.createMessage(message);
        return data
    } catch (error) {
        console.log(error);
    }
}