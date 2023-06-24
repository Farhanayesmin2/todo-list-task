"use client"
import '../styles/globals.css';
import AddTask from './AddTask';
import { CompleteTask } from './CompleteTask';
import { TaskList } from './TaskList';
import { TasksProvider } from './useProviders';
export default function Page() {
  return (
    <>
     <div className='font-mono text-gray-600 my-12'>
       <h1 className=" mt-5  text-center font-bold font-mono text-gray-600 text-2xl">
         This is To Do List.
       </h1>
   <TasksProvider>
     <div className='flex flex-row justify-center w-full h-full mt-5'>
     <div className="border-sky-200 border-2 shadow-lg shadow-sky-400 w-auto h-auto p-12">
        <p className='text-2xl text-center font-bold p-4'>TODO LIST</p>
        <p className='text-md text-left text-xl font-bold'>ADD ITEM</p>
             <div className='border-t-2 py-2'></div>
       <AddTask></AddTask>
        <p className='text-md text-left text-xl font-bold pt-2'>TODO</p>
             <div className='border-t-2 py-2'></div>
          <TaskList></TaskList>
        <p className='text-md text-left font-bold pt-2'>COMPLETED</p>
             <div className='border-t-2 py-2'></div>
    <CompleteTask></CompleteTask>
           </div>
           </div>

       </TasksProvider>
        </div>
    </>
  );
}













// import "../styles/globals.css"

// export const page=()=> {
//   return (
//     <>
//      <div>
//        <h1 className=" mt-5  text-center font-bold font-mono text-gray-600 text-2xl">
//          This is To Do List.
//        </h1>
       
//      <div className='flex flex-row justify-center w-full h-full mt-5'>
//      <div className="border-green-200 border-2 shadow-lg shadow-sky-400 w-auto h-auto p-12">
//         <p className='text-2xl text-center font-bold p-4'>TODO LIST</p>
//         <p className='text-md text-left font-bold'>ADD ITEM</p>
//              <div className='border-t-2 py-2'></div>
         
//         <p className='text-md text-left font-bold pt-2'>TODO</p>
//              <div className='border-t-2 py-2'></div>
     
//         <p className='text-md text-left font-bold pt-2'>COMPLETED</p>
//              <div className='border-t-2 py-2'></div>
           
//            </div>
//            </div>

       
//         </div>
//     </>
//   );
// }
