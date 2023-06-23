import "../styles/globals.css"

export const  HomePage=()=> {
  return (
    <>
     <div>
       <h1 className=" mt-5  text-center font-bold font-mono text-gray-600 text-2xl">
         This is To Do List.
       </h1>
       
     <div className='flex flex-row justify-center w-full h-full mt-5'>
     <div className="border-green-200 border-2 shadow-lg shadow-sky-400 w-auto h-auto p-12">
        <p className='text-2xl text-center font-bold p-4'>TODO LIST</p>
        <p className='text-md text-left font-bold'>ADD ITEM</p>
             <div className='border-t-2 py-2'></div>
         
        <p className='text-md text-left font-bold pt-2'>TODO</p>
             <div className='border-t-2 py-2'></div>
     
        <p className='text-md text-left font-bold pt-2'>COMPLETED</p>
             <div className='border-t-2 py-2'></div>
           
           </div>
           </div>

       
        </div>
    </>
  );
}
