// This Folder name and home file name along with the file name source are not special names you can anme them whatever youd like. If theres nothing in the home file it might get mad or be confused.
// Simple react snippets is an extension in VS code that was installed (shortcuts etc)

//type 'rfce' code from lines 6-12 will appear automatically delete import line(that is from react version 17) its no longer needed. This is a typescript file which is set up along with tailwind

import Background from "../assets/images/teal_mountains.jpg"

function Home() {
  return (
    <div 
    style={{backgroundImage: `url(${ Background })`}} className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      {/* Home - Uncomment this code to see the gradient and the centered text*/}
       <div className= 'flex place-items-center h-screen'> {/*This code is what centers the background and makes it appear on the screen */}
        <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>Welcome to the Phonebook</h3>
      </div>
    </div>
  )
}

export default Home
