export type StatusType = "To do" | "Doing" | "Done";

export type FormDataType = {
  title: string;
  description: string;
  status: StatusType;
};

export type TaskType = FormDataType & {
  id: number;
  createdAt: string;
};

export type ErrorFormType = Omit<FormDataType, "status"> & {
  status: string;
};

type ResponseBase = {
    success: boolean
}

export type SuccessType = ResponseBase & {
    task: TaskType
}

export type ErrorType = ResponseBase & {
    messagge: string;
}

export type GlobalContextType = {
    tasks: TaskType[],
    addTask: (task: FormDataType) => Promise<void>
};
