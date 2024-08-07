import { useEffect, useState } from "react";
import tasksAPI from "../api/tasks-api";

export function useGetAllTasks () {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {

       (async () => {
        const result = await tasksAPI.getAll()

        setTasks(result)
       })();
 

    }, []);

    return [tasks, setTasks]  
}

export function useGetOneTasks(taskId) {
    const [task, setTask] = useState({});
    
    useEffect(() => {
        (async () => {
            const result = await tasksAPI.getOne(taskId);

            setTask(result)
        })();

    }, [taskId]);

    return[
        task, 
        setTask
    ]
}

export function useCreateTask () {
    const taskCreateHandler = (taskData) => tasksAPI.create(taskData);
    
    return taskCreateHandler;
}

export function usedeleteTask () {
    
}