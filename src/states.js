import { useState, useEffect } from "react";

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
