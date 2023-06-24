// Importing the useState hook from 'react'
import { useState } from 'react';
import React from 'react';
import { useTasks, useTasksDispatch } from './useProviders';

// Interface for the Task object
interface Task {
  id: number;
  text: string;
  done: boolean;
}

// Interface for the Task component props
interface TaskProps {
  task: Task;
}

// CompleteTask component
export const CompleteTask = (): JSX.Element => {
  const tasks = useTasks();

  return (
    <ul>
      {/* Filtering tasks that are marked as done and mapping them to Task components */}
      {tasks.tasks.filter((t) => t.done === true).map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

// Task component
const Task = ({ task }: TaskProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false); // Using the useState hook to manage the state of isEditing
  const dispatch = useTasksDispatch();

  let taskContent: JSX.Element;
  if (isEditing) {
    // Displaying input field and Save button when in edit mode
    taskContent = (
      <div className="px-2">
        <input
          className="rounded-md text-gray-500"
          value={task.text}
          onChange={(e) => {
            dispatch.dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button
          className="bg-red-200 rounded-lg px-2 ml-2"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </div>
    );
  } else {
    // Displaying task text and Edit button when not in edit mode
    taskContent = (
      <div className="px-2">
        {task.text}
        <button
          className="bg-red-200 rounded-lg px-2 ml-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <label className="flex space-x-2 py-4 px-2">
      {/* Checkbox input for marking the task as done */}
      <input
        className="rounded-md text-gray-500"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch.dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {/* Displaying task content and buttons */}
      {taskContent}
      {/* Delete button */}
      <button
        className="bg-red-200 rounded-lg px-2"
        onClick={() => {
          dispatch.dispatch({
            type: 'deleted',
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
