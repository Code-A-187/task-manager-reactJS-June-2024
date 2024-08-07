import request from './requester';

const BASE_URL ='http://localhost:3030/data/tasks';

export const getAll = async () => {
    try {
        const result = await request.get(BASE_URL);
        const tasks = Object.values(result);

        return tasks;

    } catch (err) {
        console.error('Failed to fetch tasks:', err);
        throw new Error('Unable to fetch tasks');
    }
};

export const getOne = async (taskId) => {
    try {

        return await request.get(`${BASE_URL}/${taskId}`);

    } catch (err) {

        console.error(`Failed to fetch task with ID ${taskId}:`, err);
        throw new Error(`Unable to fetch task with ID ${taskId}`);
    }
};

export const create = async (taskData) => {
    try {
        
        return await request.post(BASE_URL, taskData);

    } catch (err) {
        console.error('Failed to create task:', err);
        throw new Error('Unable to create task');
    }
};

export const remove = (taskId) => request.del(`${BASE_URL}/${taskId}`)

export const update = (taskId, gameData) => request.put(`${BASE_URL}/${taskId}`, gameData)

const tasksAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
};

export default tasksAPI;