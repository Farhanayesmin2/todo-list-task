import React, { useState } from 'react';
import { useTasksDispatch } from './useProviders';
import { IoIosAddCircle } from 'react-icons/io';

const AddTask = (): JSX.Element => {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  const [nextId, setNextId] = useState<number>(3);

  const handleAddTask = (): void => {
    // Dispatches an action to add a new task
    dispatch.dispatch({
      type: 'added',
      id: nextId + 1,
      text: text,
    });

    // Clears the input field after adding the task
    setText('');

    // Logs the next task ID in the console
    console.log(nextId + 1);

    // Updates the next task ID for future tasks
    setNextId(nextId + 1);
  };

  return (
    <div className="flex">
      {/* Input field */}
      <input
        className="shadow-md shadow-sky-400 focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter any things"
      />

      {/* Add button */}
      <button
        className="px-2 bg-gray-600 text-white font-mono rounded-md ml-2"
        onClick={handleAddTask}
      >
        <span className="flex items-center">
          <IoIosAddCircle className="text-sky-400" />
          Add
        </span>
      </button>
    </div>
  );
};

export default AddTask;
