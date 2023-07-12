
//REACT IS GREAT FOR BIG PROJECTS NOT SO MUCH PORTFOLIOS OR SMALL
// import reactLogo from './assets/react.svg' This is how you import the react logo that is being removed
//import viteLogo from '/vite.svg' This is how you import the Vite logo that is being removed
//import './App.css' //The 'App.css' file is being deleted but this is how you would import the file
// App has 'Home' in it.
//Below, line (8) were importing pieces of router dom (see main.py for router dom info)

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
// You dont need the import statements below from the 3 lines of code because your pulling them in from routes now that config file has been created
// import Home from './pages/Home'
// import About from './pages/About'
// import Dashboard from './pages/Dashboard'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import AuthChecker from './auth/AuthChecker'

function App() {
  return (
    // <div> Just testing code (lie below)
    //   this is my app
    // </div>  
    // <h1 className="text-3xl font-bold ">
  //   <h1 className="text-3xl font-bold bg-blue-400"> 
  //   Hello world!
  // </h1>
  // instead of the div below,  (line 43-45) now that react router dom is installed we will change the div to browser router, that is where all of the code will live
  // <div>
  //   <Home /> 
  // </div>
  // Hold cmmd + shift + p type 'wrap with abbreviation in drop down', type 'div', return it will wrap code in a div automaticall
    <BrowserRouter>
      {/*Navbar goes here */}
      <Navbar />
      {/* If we want to write plain JavaScript with React we have to put the code in curly braces */}
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                <AuthChecker>
                  <route.component/>
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
          )) }
                </Routes>
        </Provider>
    </BrowserRouter>
  )
}


export default App

// src which stands for source, is the name of the folder this file is located in.
// This is where the source code comes from. This is where the main application logic is. This is where all of our files are.
//Install Tailwind CSS Intellisense in VS Code (currently installed) to get the automated pop ups to display the color your using in a box etc. 
// The code that the developer wrote is usually in the source folder.
// public is a file thats accessible to everything. it has the Vite logo on it
