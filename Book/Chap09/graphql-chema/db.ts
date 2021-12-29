/*
 In memory database
*/

import { v4 } from "uuid";
export const todos = [
    {
        id: v4(),
        title: "First todo",
        description: "First todo desc",
    },
    {
        id: v4(),
        title: "Second todo",
        description: "Second todo desc",
    },
    {
        id: v4(),
        title: "Third todo",
    },
];