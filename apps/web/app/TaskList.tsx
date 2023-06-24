import React from "react"; // Importing React
import { useState } from "react"; // Importing useState from React
import { useTasks, useTasksDispatch } from "./useProviders"; // Importing custom hooks from './useProviders'
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri"; // Importing RiDeleteBin2Fill icon from react-icons library
import Swal from "sweetalert2";
interface Task {
	id: number;
	text: string;
	done: boolean;
}

interface TaskProps {
	task: Task;
}

export const TaskList = (): JSX.Element => {
	const tasks = useTasks();

	return (
		<ul>
			{tasks.tasks
				.filter((t) => t.done === false)
				.map((task) => (
					<li key={task.id}>
						<Task task={task} /> {/* Render the Task component with the task */}
					</li>
				))}
		</ul>
	);
};

const Task = ({ task }: TaskProps): JSX.Element => {
	const [isEditing, setIsEditing] = useState(false); // State for editing mode
	const dispatch = useTasksDispatch();

	let taskContent: JSX.Element;
	if (isEditing) {
		// Content in editing mode
		taskContent = (
			<div className="px-2">
				<input
					className="rounded-md outline-sky-400 border border-sky-400 shadow-lg shadow-sky-400 text-gray-500"
					value={task.text}
					onChange={(e) => {
						dispatch.dispatch({
							type: "changed",
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
		// Content in non-editing mode
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
		<label className="flex font-mono text-gray-600 space-x-2 py-4 px-2">
			<input
				className=""
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					dispatch.dispatch({
						type: "changed",
						task: {
							...task,
							done: e.target.checked,
						},
					});
				}}
			/>
			{taskContent}
			<button
				className="bg-gradient-to-r from-sky-400/70 via-gray-50 to-sky-400/70 flex items-center shadow-lg shadow-gray-300 hover:-translate-y-1 transition duration-500 rounded-lg px-2 ml-2"
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
				<RiDeleteBin2Fill className="text-red-600"></RiDeleteBin2Fill> Delete
			</button>
		</label>
	);
};
