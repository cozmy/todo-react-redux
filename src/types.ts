import { nanoid } from "@reduxjs/toolkit";

export class Label {
  id: string;
  title: string;

  constructor({ id = undefined, title = "" }: Partial<Label>) {
    this.id = id ?? nanoid();
    this.title = title;
  }
}

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
  labels: Array<Label["id"]>;

  constructor({ id = undefined, title = "", description = "", creationDate = undefined, dueDate = undefined, priority = TTodoPriority.NONE, completionDate = undefined, labels = [] }: Partial<Todo>) {
    this.id = id ?? nanoid();
    this.title = title;
    this.description = description;
    this.creationDate = creationDate ?? new Date().toISOString();
    this.dueDate = dueDate;
    this.priority = priority;
    this.completionDate = completionDate;
    this.labels = labels;
  }
}
