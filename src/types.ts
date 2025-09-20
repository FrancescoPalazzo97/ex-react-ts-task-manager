export type StatusType =
    | 'To do'
    | 'Doing'
    | 'Done'

export type TaskType = {
    id: number
    title: string,
    description: string,
    status: StatusType,
    createdAt: string
};