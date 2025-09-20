import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import { guardType, launchError } from "../lib";
import type { TaskType } from "../types";
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

    return tasks
}

export default useTasks
