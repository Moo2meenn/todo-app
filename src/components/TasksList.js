import { v4 as uuidv4 } from "uuid";

const TasksList = () => {
  return [
    {
      id: uuidv4(),
      name: "test",
    },
    {
      id: uuidv4(),
      name: "test2",
    },
    {
      id: uuidv4(),
      name: "test3",
    },
  ];
};

export default TasksList;
