import type { TaskType } from "../types";

function isTask(data: unknown): boolean {
    const status = ['To do', 'Doing', 'Done'];
    return (
        data !== null && typeof data === 'object'
        && 'id' in data && typeof data.id === 'number'
        && 'title' in data && typeof data.title === 'string'
        && 'description' in data && typeof data.description === 'string'
        && 'status' in data && typeof data.status === 'string' && status.includes(data.status)
        && 'createdAt' in data && typeof data.createdAt === 'string'
    )
}

function isTasksArray(data: unknown): data is TaskType[] {
    return (
        data !== null && Array.isArray(data)
        && data.every(item => isTask(item))
    )
}

export default {
    isTask,
    isTasksArray
}