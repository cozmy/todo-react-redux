import { Label, Todo, TTodoPriority } from '../types';

export const labelsInitialState: Label[] = [{ ...new Label({ title: "Work" }) }, { ...new Label({ title: "Leisure" }) }, { ...new Label({ title: "Personal" }) }];

export const todosInitialState: Todo[] = [
  { ...new Todo({ description: "It is imperative", title: "Make this app work", priority: TTodoPriority.HIGH, dueDate: "2021-02-27" }) },
  { ...new Todo({ description: "Maybe play some video games?", title: "Relax a bit", dueDate: "2021-02-12" }) },
  { ...new Todo({ title: "Have some fun" }) },
  { ...new Todo({ title: "Workout!", priority: TTodoPriority.MEDIUM }) },
  { ...new Todo({ title: "Do the laundry", dueDate: "2021-02-16" }) },
  { ...new Todo({ description: "Just a bit", title: "Try to document it", priority: TTodoPriority.LOW, dueDate: "2021-02-16" }) },
  { ...new Todo({ description: "Hello!", title: "Publish this on GitHub", completionDate: "2021-02-09T18:28:39.266Z" }) },
];
