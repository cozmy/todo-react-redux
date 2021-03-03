import { Label, Todo, TTodoPriority } from "../types";

export const labelsInitialState: Label[] = [{ ...new Label({ id: "oYS6jCV-9_r6-gApwP-a0", title: "Work" }) }, { ...new Label({ id: "6upNOC-XWS_LKn0Cdcgc_", title: "Leisure" }) }, { ...new Label({ id: "HrlBY9eBGad8ShNV5XWry", title: "Personal" }) }];

export const todosInitialState: Todo[] = [
  { ...new Todo({ description: "It is imperative", title: "Make this app work", priority: TTodoPriority.HIGH, dueDate: "2021-02-27", labels: [labelsInitialState[0].id] }) },
  { ...new Todo({ description: "Maybe play some video games?", title: "Relax a bit", dueDate: "2021-02-12", labels: [labelsInitialState[1].id] }) },
  { ...new Todo({ title: "Have some fun" }) },
  { ...new Todo({ title: "Workout!", priority: TTodoPriority.MEDIUM, labels: [labelsInitialState[2].id] }) },
  { ...new Todo({ title: "Do the laundry", dueDate: "2021-02-16" }) },
  { ...new Todo({ description: "Just a bit", title: "Try to document it", priority: TTodoPriority.LOW, dueDate: "2021-02-16", labels: [labelsInitialState[0].id, labelsInitialState[1].id] }) },
  { ...new Todo({ description: "Hello!", title: "Publish this on GitHub", completionDate: "2021-02-09T18:28:39.266Z" }) },
];
