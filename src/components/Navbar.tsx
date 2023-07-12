import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "./Button" // instead of using this line of code you should use the butten tag <button> UNLESS your trying to do something VERY SPECIFIC otherwise forget this line of code. mui.com is a cool website to use for adding buttons to your website, Their buttons come styled already, versus us adding our own style to the buttons
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from '../config/firebase'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)

  const signOutOnClick = () => {
    signOut(auth) //its going to use sign out and pass in auth, which is our credentials, it remembers whose using things
    location.reload(); // This will refresh the page when you sign in 
  }

  const signInOnClick = async () => { // We want a pop up here that says sign in, its going to wait for the page and not let anyone move on until they actually do that and it waits asynchronously is why we added async
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ){
        location.reload(); // You could throw errors here to.
    }

  }

  const dropDown = () => {
    // You can also write the above line of code like this " const dropDown = (): void => { which represents a function that isnt returning anything because its void which is fine see (line 11)"
    console.log('dropDown') //if you write the word log and press tab thats a short way to write console.log Also, This is a way to check if the dropDown function code is working, inspect and check the console after you click on the bar icon 
    setIsVisible(!isVisible)
    // In This function we changed isVisible to the opposite of what its set to its set to false. If the dropdown function executes it will set isvisible to true. The dropDown function needs to be formatted like it is above. You dont want to have line 20 execute as soon as the page has loaded by calling the function 'onClick={dropDown()}
    console.log(isVisible); //Again this a way to test code to see if its working  
  }
//The function below is for when someone clicks on the home button in the dropdown menu and it directs the user to the homepage the dropdown menu will not remain open it will close.
  const clicked = () => { //If we click on the Navbar it goes away
    setIsVisible(false)
  } 

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to='/' onClick={ clicked } className='fontsemibold text-xl tracking-tight'>Digit</Link>
        </div>
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-teal-200 
                border rounded border-teal-400 hover:text-white hover:border-white"
                >
                    
                    <i className="fa-solid fa-bars"></i>
                {/* The above code is the html snippet for the bar icon version 6. The react, vue snippets etc. They prefer to not use they do not look to good */}
            </button>
        </div>
        {/* tailwind uses rems as its measurements 1.5 rem = 24 px which is a relative sizing unit with excellent browser support*/}
        {/* below is ternary operator */}
        { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    {/* Button is a new component, there is a file created for it  */}
                    
                    <Button className="p-3 m-5 bg-teal-400 justify-center">
                        <div>
                            <Link to='/' onClick={ clicked }className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Home
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-teal-400 justify-center">
                        <div>
                            <Link to='/about' onClick={ clicked }className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                About
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-teal-400 justify-center">
                        <div>
                            <Link to='/dashboard' onClick={ clicked }className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 bg-teal-400 justify-center">
                        <div>
                            <Link to='/contact' onClick={ clicked }className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                                Contact
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?  //If there is no one logged in then were going to render

                        <Button className='p-3 m-5 bg-teal-400 justify-center' >
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                    Login
                                </Link>
                            </div>
                        </Button> 
                        :
                        <Button className='p-3 m-5 bg-teal-400 justify-center' >
                            <div>
                                <Link to="/" onClick={ () => {signOutOnClick()}} className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                    Sign Out
                                </Link>
                            </div>
                        </Button> 
                    }
                </div>
            </div>
            ) : (
            <></>
        )}
    </nav>
  )
}

export default Navbar

//We use netlify to get the website up and running, deploy project manually, type command 'npm run build' in terminal to break all of the typescriptr down into javascript . LOOK FOR THE dist folder in the application file drag and drop the dist file. DONT FORGET TO USE THE URL FROM NETLIFY AFTER YOU DEPLOY and ADD the URL to domains on Firebase Authentication, Authorized domains