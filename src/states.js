import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function useLocalStorageState(key, defaultValue) {
  let value = defaultValue;

  try {
    value = JSON.parse(localStorage.getItem(key));
  } catch {
    value = defaultValue;
  }

  if (value === undefined || value === null) value = defaultValue;

  const [state, setState] = useState(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function useTasks() {
  return useLocalStorageState("tasks", []);
}

export function useTaskHistory() {
  return useLocalStorageState("history", []);
}

export function useCategories() {
  return useLocalStorageState("categories", [
    {
      id: uuidv4(),
      name: "Work",
    },
    {
      id: uuidv4(),
      name: "Home",
    },
    {
      id: uuidv4(),
      name: "Life",
    },
  ]);
}
