import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  //imports the styling in index.css

//The lines of code below is a way to look at what version of react your on along with the package.json file (look in the dependencies section). The big difference between react 17 and 18 is you had to import react all the time. We no longer need to do that
//Main has 'App' in it
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

