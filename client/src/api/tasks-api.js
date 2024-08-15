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

export const getLatest = async () => {
    try {
        const params = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 6,
        });

        const queryString = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');

        console.log(queryString)

        const result = await request.get(`${BASE_URL}?${queryString}`);
        
        
        const latestTasks = Object.values(result);

        return latestTasks; 

    } catch (err) {
        console.error('Failed to fetch latest tasks:', err);
        throw new Error('Unable to fetch latest tasks');
    }
};


export const getAllImportantTasks = async () => {
    try {
        const params = new URLSearchParams({
            where: `status="Important"`,
        });

        const queryString = params.toString();

    
        const result = await request.get(`${BASE_URL}/tasks?${queryString}`);

    
        const latestTasks = Object.values(result);

    
        return latestTasks;

    } catch (err) {
        console.error('Failed to fetch important tasks:', err);
        throw new Error('Unable to fetch important tasks');
    }
};

export const getAllCompletedTasks = async () => {
    try {
        const params = new URLSearchParams({
            where: `status="Completed"`,
        });

        const queryString = params.toString();

    
        const result = await request.get(`${BASE_URL}/tasks?${queryString}`);

    
        const latestTasks = Object.values(result);

    
        return latestTasks;

    } catch (err) {
        console.error('Failed to fetch important tasks:', err);
        throw new Error('Unable to fetch important tasks');
    }
};

export const getAllDoItNowTasks = async () => {
    try {
        const params = new URLSearchParams({
            where: `status="Do It Now"`,
        });

        const queryString = params.toString().replace(/\+/g, '%20');
    
        const result = await request.get(`${BASE_URL}/tasks?${queryString}`);

    
        const latestTasks = Object.values(result);

    
        return latestTasks;

    } catch (err) {
        console.error('Failed to fetch important tasks:', err);
        throw new Error('Unable to fetch important tasks');
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
    getLatest,
    getAllImportantTasks,
    getAllCompletedTasks,
    getAllDoItNowTasks,
};

export default tasksAPI;