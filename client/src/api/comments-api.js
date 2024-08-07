import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (taskId, text) => requester.post(BASE_URL, {taskId, text});

const getAll = (taskId) => {
    const params = new URLSearchParams({
        where: `taskId="${taskId}"`, 
        load: `author=_ownerId:users`,
    })
    
    return requester.get(`${BASE_URL}?${params.toString()}`);
}
 
const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI