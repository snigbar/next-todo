import Footer  from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TodoLists from "./Components/TodoLists/TodoLists";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 px-3 md:px-10 py-8">
    <Navbar></Navbar>
    <div className='text-gray-700 text-center md:mt-8'>
     <h1 className='text-3xl font-medium mb-2'>
      Next Todo - Create Todo List
     </h1>
     <p>
      Create and manage your ToDos
     </p>
     </div>

     {/* todo list */}
    <TodoLists></TodoLists>

     {/* footer */}
     <Footer></Footer>
    </main>
  )
}
