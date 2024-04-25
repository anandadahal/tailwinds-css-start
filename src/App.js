import "./App.css";

function App() {
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
    
     
    </>
  );
}

export default App;
