// Importing the useState hook from 'react'
import { useState } from 'react';
import React from 'react';
import { useTasks, useTasksDispatch } from './useProviders';
import Swal from 'sweetalert2';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
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
					className="bg-gradient-to-r from-sky-400/70 via-gray-50 to-sky-400/70 shadow-lg shadow-gray-300 rounded-lg px-2 ml-2"
					onClick={() => {
						Swal.fire({
							title: "Data saved!",
							icon: "success",
							confirmButtonText: "OK",
						});
						setIsEditing(false);
					}}
				>
					Save
				</button>
      </div>
    );
  } else {
    // Displaying task text and Edit button when not in edit mode
    taskContent = (
<div className="px-2 font-mono text-gray-600 flex items-center">
        {task.text}
        	<button
					className="bg-gradient-to-r from-sky-400/70 via-gray-50 to-sky-400/70 flex items-center shadow-lg shadow-gray-300 hover:-translate-y-1 transition duration-500 rounded-lg px-2 ml-2"
					onClick={() => setIsEditing(true)}
				>
					<RiEdit2Fill className="text-gray-950"></RiEdit2Fill> Edit
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
				className=" sm:p-0 md:p-0 bg-gradient-to-r from-sky-400/70 via-gray-50 to-sky-400/70 flex items-center shadow-lg shadow-gray-300 hover:-translate-y-1 transition duration-500 rounded-lg px-2 ml-2"
				onClick={() => {
					Swal.fire({
						title: "Delete Task",
						text: "Are you sure you want to delete this task?",
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes, delete it!",
					}).then((result) => {
						if (result.isConfirmed) {
							dispatch.dispatch({
								type: "deleted",
								id: task.id,
							});

							Swal.fire("Deleted!", "The task has been deleted.", "success");
						}
					});
				}}
			>
				Delete<RiDeleteBin2Fill className="text-red-600"></RiDeleteBin2Fill> 
			</button>
    </label>
  );
}
