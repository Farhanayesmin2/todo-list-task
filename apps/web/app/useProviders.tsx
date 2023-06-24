import React, { createContext, useContext, useReducer } from 'react';

interface Task {
  id: number;
  text: string;
  done: boolean;
}

type TaskAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

interface useProvidersType {
  tasks: Task[];
}

interface TasksDispatchContextType {
  dispatch: React.Dispatch<TaskAction>;
}

const useProviders = createContext<useProvidersType | null>(null);

const TasksDispatchContext = createContext<TasksDispatchContextType | null>(null);

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



const initialTasks: Task[] = [
  { id: 0, text: "It's the first task", done: true },
  { id: 1, text: "It's the second task", done: false },
  { id: 2, text: "It's the third one", done: false },
];

export const TasksProvider=({ children }: { children: React.ReactNode }) =>{
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <useProviders.Provider value={{ tasks }}>
      <TasksDispatchContext.Provider value={{ dispatch }}>
        {children}
      </TasksDispatchContext.Provider>
    </useProviders.Provider>
  );
}

export  const useTasks=(): useProvidersType => {
  const context = useContext(useProviders);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
}
 


 export const useTasksDispatch =(): TasksDispatchContextType =>{
  const context = useContext(TasksDispatchContext);
  if (!context) {
    throw new Error('useTasksDispatch must be used within a TasksProvider');
  }
  return context;
}
