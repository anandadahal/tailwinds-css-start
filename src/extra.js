import "./App.css";
import { useState } from "react";
import Child from "./Component/child"

function App() {
  const [count,setCount]=useState(0)

const age=10;
const name="ananda";

  const handelclick=()=>{
    setCount(count+1)
  }
  const handelclick2=()=>{
    setCount(count-1)
  }
  return (
    <>
      {/*     
       <Test/> */}

      <div className="container max-w-[1280px] mx-auto px-4 text-3xl font-bold ">
       
          
            <div className="max-w-7xl mx-auto grid grid-cols-5 px-4 py-2">
              {/* Logo */}
              <div className="col-span-1">
                <img className="h-8" src="/logo.svg" alt="Logo" />
              </div>

              {/* Navigation Menu */}
              <div className="flex justify-end items-center  md:col-span-3 md:flex md:space-x-4 ">
                <a
                  href="#"
                  className="text-xl hover:bg-gray-100 px-3 py-2 rounded-md no-underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-xl hover:bg-gray-700 px-3 py-2 rounded-md"
                > 
                  About
                </a>
                <a
                  href="#"
                  className="text-xl hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Services
                </a>
                {/* Add more menu items as needed */}
              </div>

              {/* Login/Logout Button */}
              <div className="col-span-1 flex justify-end space-x-2 md:justify-center">
                <button className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">
                  Login
                </button>
                {/* Add Logout button conditionally based on user authentication status */}
                {/* <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button> */}
              </div>
            </div>
          </div>

<div className="flex flex-col bg-emerald-400 p-4 items-center justify-center">
  <p className="text-3xl mb-4 font-bold text-white  ">Count : {count} </p>
  <button className="px-4 py-2 rounded-md bg-black hover:bg-blue-600 text-white" onClick={handelclick}>Increment</button><br></br>
  <button className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-800 text-white" onClick={handelclick2}>Decrement</button>
</div>

    <Child name={name} age={age}/>
     
    </>
  );
}

export default App;
