import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from "../api/server";
//Rather then creating your own data grid, which can be tedious they dont recommend doing this we install visist this webpage for the code below https://mui.com/x/react-data-grid/. You must use this command to install mui data grid npm install @mui/x-data-grid
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData";



const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90},
  { field: 'name', headerName: "Contact Name", flex: 1}, // flex will allow you to stretch things depending on how much priority you give them
  { field: 'email', headerName: "Email", flex: 1 },
  { field: 'phone_number', headerName: "Phone Number", flex: 1 },
  { field: 'address', headerName: "Address", flex: 2 }
]


function DataTable() {
  
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData(); //Were going to create our own hook 
  const [ selectionModel, setSelectionModel ] = useState<string[]>([]) //This string will accept an array of strings. now We will be able to add items to this array, piece by piece, we dont recommend adding multiple things because its going to end up copying stuff multiple times
  // console.log(`Selection model: ${selectionModel}`)
  // setTimeout( () => { window.location.reload () }, 5000)
  

 // What we want to be able to do is click on the checkboxes and get the id of the thing we just clicked on. https://mui.com/x/react-data-grid/row-selection/
  //TODO: write useGetData hook and selection model state change content

  const handleOpen = () => { //This function doesnt need to do anything except set open to true
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
// TODO: add delete function to button
const deleteData = () => {
  server_calls.delete(selectionModel[0]);
  getData();
  console.log(`Selection model: ${selectionModel}`)
  setTimeout( () => {window.location.reload()}, 500)
}



  // const getData = async () =>{ No longer need this code  (line 35-37) were using 'useGetData' now 
  //   const result = await server_calls.get();
  //   console.log(result);   
  // }

  return (
    <>
       
        {/* Modal */}
        {/* Modal pop up is the part that lets you put in your name, email, address, etc. The modal is set to open for users that open the dialogue box*/}
        <Modal 
            id={selectionModel}
            open={open} //The fragment will appear and disappear if you change the value to true or false
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white '
                    //onClick={setOpen()} This is OK however the code is going to automatically run when the page runs, then we will have an error. So we can create an anonymous function that way it waits until the user actually clicks on the Modal (see below)
                    //onClick={() => setOpen()}. The problem with this code is set open actually wants something to happen. This is ok (see below)
                    // onClick={() => setOpen(true)}
                    onClick={() => handleOpen()} //This is better
                >
                    Create New Contact
                </button>
            </div>
            {/* <button onClick={() => handleClose()}>close</button> No longer need this  */}
            <Button onClick={handleOpen} className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' >Update</Button>
            <Button onClick={deleteData} className='p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white' >Delete</Button>
        </div>
        {/* Buttons section for controlling CRUD */}
        {/* Data Table section */}
                {/* <button onClick={getData}>get data</button>      When this get data button is clicked, it should use the 'const response' function in server.ts to go and ask the application for information. We dont need this anymore so this line will be commented out */}
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col" }  style={{ height: 400, width: '100%'}}> {/*We put curly braces in the div next to class name, because we want this to disappear if the pop up is available or not, One of the downsides of using other peoples tools like this data grid from mui is that when a popup shows up, it shows up on top of the data grid, were making the popup hide, thats what the curly brace is for, if the popup is open, the tailwind class will be hidden. if its not open we have 'container' */}
          <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2> {/*We should have a nice header now */}
           <DataGrid 
           rows={contactData} 
           columns={columns} 
          //  rowsPerPageOptions={[5]}
          //  /*this just says how many rows can be displayed at a time  */

           checkboxSelection={true} //This is important because we cannot get or select any ids if we dont have this code
           onRowSelectionModelChange ={ (item:any) => {
                setSelectionModel(item)
           }}
           />
        </div>
    </>
  )
}

export default DataTable

//Firebase, Digital Ocean, and AWS are pretty much the same thing. Firebase keeps things really simple. Firebase comes with their own databases. To use firebase the website is firebase.google.com, then you can go to create project, you can skip analytics, it slows things down, and type npm install firebase in terminal. CLick continue on website, authentication, get started, Add Google, Enable it. Project support email can be your personal email