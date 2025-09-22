import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { guardType, launchError } from "../lib";
import type { TaskType, FormDataType } from "../types";
const API_URL: string = import.meta.env.VITE_API_URL;

const useTasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    async function getTasks() {
        try {
            const data = await useFetch(`${API_URL}/tasks`);
            if (guardType.isTasksArray(data)) {
                setTasks(data);
                return;
            };
            throw new Error(`Formato tasks non valido!`);
        } catch (e) {
            if (e instanceof Error) {
                launchError(e)
            } else {
                launchError();
            }
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    const addTask = async (task: FormDataType) => {
        if (tasks.some(t => t.title === task.title)) throw new Error(`Il task ${task.title} è già presente!`);

        const data = await useFetch(`${API_URL}/tasks`, 'POST', task);

        if (guardType.isErrorData(data)) {
            throw new Error(data.messagge);
        } else if (guardType.isSuccessData(data)) {
            setTasks(prev => [...prev, data.task]);
        }
    };

    const removeTask = (taskId: TaskType['id']): void => {
        console.log('Rimuovi task')
    };

    const updateTask = (newTask: TaskType): void => {
        console.log('Aggiorna task')
    }

    return {
        tasks,
        addTask,
        removeTask,
        updateTask
    }
}

export default useTasks
