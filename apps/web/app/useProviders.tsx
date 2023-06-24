import React, { createContext, useContext, useReducer } from 'react';

// Define the Task interface
interface Task {
  id: number;
  text: string;
  done: boolean;
}

// Define the different types of Task actions
type TaskAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

// Define the type for the tasks state in the provider
interface UseProvidersType {
  tasks: Task[];
}

// Define the type for the tasks dispatch context
interface TasksDispatchContextType {
  dispatch: React.Dispatch<TaskAction>;
}

// Create the context for the tasks state
const UseProviders = createContext<UseProvidersType | null>(null);

// Create the context for the tasks dispatch
const TasksDispatchContext = createContext<TasksDispatchContextType | null>(null);

// Define the tasks reducer function
export const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      const unknownAction: never = action;
      throw new Error('Unknown action: ' + (unknownAction as string));
    }
  }
};

// Define the initial tasks
const initialTasks: Task[] = [
  { id: 0, text: "It's the first task", done: true },
  { id: 1, text: "It's the second task", done: false },
  { id: 2, text: "It's the third one", done: false },
];

// Create the TasksProvider component
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <UseProviders.Provider value={{ tasks }}>
      <TasksDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TasksDispatchContext.Provider>
    </UseProviders.Provider>
  );
}

// Custom hook to access the tasks state
export const useTasks = (): UseProvidersType => {
  const context = useContext(UseProviders);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}

// Custom hook to access the tasks dispatch
export const useTasksDispatch = (): TasksDispatchContextType => {
  const context = useContext(TasksDispatchContext);
  if (!context) {
    throw new Error('useTasksDispatch must be used within a TasksProvider');
  }
  return context;
}
