import { v4 as uuidv4 } from "uuid";

const TasksList = () => {
  return [
    {
      id: uuidv4(),
      name: "test - mo is loser",
    },
    {
      id: uuidv4(),
      name: "test2 - mo is more loser",
    },
    {
      id: uuidv4(),
      name: "test3",
    },
  ];
};

export default TasksList;
