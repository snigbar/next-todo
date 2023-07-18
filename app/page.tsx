import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-8">
    <div className='text-gray-700 text-center'>
     <h1 className='text-3xl font-medium mb-2'>
      Next Todo - Create Todo List
     </h1>
     <p>
      Create and manage your ToDos
     </p>
     </div>


     {/* footer */}
     <Footer></Footer>
    </main>
  )
}
