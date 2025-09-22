import type { TaskType, StatusType, SuccessType, ErrorType } from "../types";

const status = ["To do", "Doing", "Done"];

function isTask(data: unknown): boolean {
  return (
    data !== null &&
    typeof data === "object" &&
    "id" in data &&
    typeof data.id === "number" &&
    "title" in data &&
    typeof data.title === "string" &&
    "description" in data &&
    typeof data.description === "string" &&
    "status" in data &&
    typeof data.status === "string" &&
    status.includes(data.status) &&
    "createdAt" in data &&
    typeof data.createdAt === "string"
  );
}

function isTasksArray(data: unknown): data is TaskType[] {
  return (
    data !== null && Array.isArray(data) && data.every((item) => isTask(item))
  );
}

function isStatusValid(data: unknown) {
  return data !== null && typeof data === "string" && status.includes(data);
}

function isStatusType(data: unknown): data is StatusType {
  return isStatusValid(data);
}

function isSuccessData(data: unknown): data is SuccessType {
  return (
    data !== null && typeof data === 'object'
    && 'success' in data && typeof data.success === 'boolean'
    && data.success === true && 'task' in data && isTask(data.task)
  )
}

function isErrorData(data: unknown): data is ErrorType {
  return (
    data !== null && typeof data === 'object'
    && 'success' in data && typeof data.success === 'boolean'
    && data.success === false && 'message' in data && typeof data.message === 'string'
  )
}

export default {
  isTask,
  isTasksArray,
  isStatusValid,
  isStatusType,
  isSuccessData,
  isErrorData
};
