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
  addTask: (task: FormDataType) => Promise<void>,
  showModal: boolean,
  modalProps: ModalPropsType,
  launchModal: (data: ModalPropsType) => void,
  closeModal: () => void
};

export type ModalType = 'DEFAULT' | 'ADD' | 'DELETE' | 'MODIFY' | 'ERROR';

export type ModalPropsType = {
  type: ModalType,
  title: string,
  content: string,
}
