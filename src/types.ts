import { nanoid } from '@reduxjs/toolkit';

export type TList = {
  id: string;
  name: string;
  creationDate: Date | string;
};

export enum TTodoPriority {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export const dateFormat = "dd.MM.yyyy";

export class Todo {
  id: string;
  title: string;
  description?: string;
  creationDate: Date | string;
  dueDate?: Date | string;
  priority: TTodoPriority;
  completionDate?: Date | string;

  constructor({ id = undefined, title = "", description = "", creationDate = undefined, dueDate = undefined, priority = TTodoPriority.NONE, completionDate = undefined }: Partial<Todo>) {
    this.id = id ?? nanoid();
    this.title = title;
    this.description = description;
    this.creationDate = creationDate ?? new Date().toISOString();
    this.dueDate = dueDate;
    this.priority = priority;
    this.completionDate = completionDate;
  }
}
