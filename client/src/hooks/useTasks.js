import { useCallback, useEffect, useState } from "react";
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

export function useGetLatestTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async () => {
            try {
                const result = await tasksAPI.getLatest();
                setTasks(result);
            } catch (err) {
                setError('Failed to fetch latest tasks. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
        return () => {

        };
    }, []);

    return { tasks, loading, error };
}

export function useGetImportantTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        (async () => {
            try {
                const result = await tasksAPI.getAllImportantTasks();
                setTasks(result);
            } catch (err) {
                setError('Failed to fetch latest tasks. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {tasks, loading, error};  
}


export function useGetCompletedTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        (async () => {
            try {
                const result = await tasksAPI.getAllCompletedTasks();
                setTasks(result);
            } catch (err) {
                setError('Failed to fetch latest tasks. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {tasks, loading, error};  
}

export function useGetDoItNowTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        (async () => {
            try {
                const result = await tasksAPI.getAllDoItNowTasks();
                setTasks(result);
            } catch (err) {
                setError('Failed to fetch latest tasks. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return {tasks, loading, error};  
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
    const taskCreateHandler = useCallback(async (taskData) => {
        
        const dataWithTimestamp = {
            ...taskData,
            dueDate: new Date(taskData.dueDate).getTime(),
        };

        try {
            const response = await tasksAPI.create(dataWithTimestamp);

            if (response.ok) {
                console.log('Task created successfully');
                return await response.json();
            } else {
                const error = await response.json();
                throw new Error(error.message || 'Failed to create task');
            }
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    }, []);
    
    return taskCreateHandler;
}
