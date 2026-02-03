import axios from 'axios';

const api = axios.create({
    baseURL: 'https://verbose-adventure-uau8.onrender.com',
});

export const getTasks = async () => {
    const response = await api.get('/tasks/');
    return response.data;
};

export const createTask = async (task) => {
    const response = await api.post('/tasks/', task);
    return response.data;
};

export const updateTask = async ({ id, ...data }) => {
    const response = await api.put(`/tasks/${id}`, data);
    return response.data;
};

export const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
};
