import data from './data.js'
import Tours from "./components/Tours.jsx";
import { useState } from "react";
function App() {


  const[tour,settour] = useState(data);
    function removeTour(id){
        const newTours = tour.filter(tour => tour.id !== id);
        settour(newTours)
    }
  const [theme,setTheme] = useState("Light")
    function themehandler(){
      if(theme === "Light"){
        setTheme("Dark");
      }
      else{
        setTheme("Light");
      }
    }
    if(tour.length == 0){
      return (
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
          <h2 className='text-4xl font-medium'>No Tours Left</h2>
          <button onClick={()=>settour(data)} className='text-white w-36 h-16 text-xl font-medium border-4 border-indigo-500 bg-indigo-300 rounded-lg p-3 mt-5 shadow-md shadow-black'>Refresh</button>
        </div>
      )
    }
  return (
    <div className={`flex flex-col flex-wrap items-center h-full w-full m-0 p-0 box-border ${theme==="Dark" ? "bg-slate-800 text-white":"bg-white text-black"}`}>

    <button onClick={themehandler} className='h-16 w-44 text-xl font-medium border-4 border-indigo-500 bg-indigo-300 rounded-lg p-1 mt-5 shadow-md shadow-black absolute top-0 right-5'>{theme}</button>

      <h1 className='text-center mt-20 font-medium text-4xl border-4 w-fit h-fit border-indigo-600 border-dashed rounded-lg px-10 py-4'>PLAN WITH LAV</h1>
      <Tours tours = {tour} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
