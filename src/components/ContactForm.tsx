// type rafce will generate code
//The trickiest part with any web app is handling forms
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'; //use dispatch is a way to utilize the stuff we just made as our reducers
import { chooseName, chooseEmail, choosePhone, chooseAddress } from '../redux/slices/RootSlice'


//interfaces

interface ContactFormProps{ 
  id?: string[], //The question mark means its optional to add a string of some characters
  // data?: {} // This will be an empty object this line is unnecessary
  onClose?: () => void;
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm({}) //This is similar to useState setup, except we have 'handleSubmit function. When we use the handle submit function its going to use the form data and apply useForm to our form
  const dispatch = useDispatch(); // This is a function, This is a function we can use for our slices
  const store = useStore();


  const onSubmit = (data: any, event: any) => {
    // console.log('pass'); //pass means you will finish the code listSubheaderClasses, but you set it up so when you run the code you wont receive any errore but the function is already set up when you get back to it
    console.log(`ID: ${props.id}`); //This will allow us to see the id when we hit the submit button. Thi sline is not required, its helpful to see whats going on when running/testing the application
    console.log(props.id); //This is so you have an idea of what the props id is
    
    if (props.id && props.id.length > 0){
      server_calls.update(props.id[0], data)//server calls.update does not exist at time of publication. id[0]This will only update the first name that is selected in the datatable.You should allow one thing to be selected at a time
      console.log(`Updated: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000) //The 1000 miliseconds is when the use clicks submit, the amount of time it takes the My contacts table to repopulate/ ID to update, you change the amount of time 
      event.target.reset() //This has to with what were going to pass in to our onSubmit function above (theres an event parameter)   
    }else{
      // Use dispatch to update our state in our store 
      dispatch(chooseName(data.name)) //data.name is comming from the data in the form below, the register functions below allow us to add this data to
      dispatch(chooseEmail(data.email))
      dispatch(choosePhone(data.phone_number))
      dispatch(chooseAddress(data.address))

      server_calls.create(store.getState()) //This line of code is going to ping the store (line 22). The store is like the local database were accessing and were going to get the state from that store. So its going to get the state/ get the information then go VIEW it. See diagrame (State, view, actions) https://redux.js.org/tutorials/essentials/part-1-overview-concepts // This line of code will get the information from the store, create a new user with that information. dispatch takes the information and sends it to the store. store.getState is where we pull data back from the store, and send it off to our create function
      setTimeout( () => {window.location.reload()}, 1000); //Setting timeout just slows things down, YOU CAN COMMENT OUT THIS CODE SO THAT IT STOPS REFRESHING THE PAGE 
    }
    
    
  }

  return (
    //TODO - finish Handle function with state management
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label htmlFor='name'>Contact Name</label>
          {/* Add input comment here */}
           <Input {...register('name')} name='name' placeholder="Name"/> {/* Were taking this string ("name") which is the value and key (placeholder), passing this data down to our Input function (Input.tsx file). Putting it into a text field. Were basically connecting the child and the parent component. */}
        </div>
     <div>    {/* In the models.py file from the flask phone application, we were generating id's/uuid. That is what we need to do here to make everything unique/different id's. Flask is going to add the id, send it to the database, then we can access that id from react */}
          <label htmlFor="email">Email</label>
            <Input {...register('email')} name='email' placeholder="Email"/>  {/*Double tap or highlight word, then hold down option and click ALL of the areas you want to type the same code.  */}
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
           <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number"/>  {/* now that we added register to input, what we are doing here is saying that we want the useForm hook to have access to my inputs and all of the data thats inside of them. We want to be able to pass down that information as props all the way down to props in Input.tsx, then we will be able to use that ref in the Input function (Input.tsx), take that registered information, and pull it back and send it to our onSubmit function */}
        </div>
        <div>
          <label htmlFor="address">Address</label>
           <Input {...register('address')} name='address' placeholder="Address"/> 
        </div>
        <div className="flex p-1">
          <Button
          className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit  {/*We dont want to add 'onSubmit' because we want to submit the whole form (WE DONT WANT TO SUBMIT THE NAME SEPERATELY FROM THE ADDRESS EMAIL, ETC, We want to submit everything at the same time, and manage that state as one entity) thats why it was put IN the form component (line 10) instead of down here. at this point of the project were going to type a command in the terminal 'npm install react-hook-form' along with the import {useForm} module above*/}
          </Button>
          {/* redux makes it easy for data to come in from the database, data to be seen and data to be changed similar to insomnia https://redux.js.org/tutorials/essentials/part-1-overview-concepts AND READ https://redux.js.org/tutorials/essentials/part-3-data-flow AND READ https://redux.js.org/tutorials/essentials/part-5-async-logic */}
          {/* INSTALL redux instructions, since were using redux, You need the toolkit first Here is the command for that: npm install @reduxjs/toolkit THEN npm install react-redux */}
        </div>
      </form>
    </div>
  )
}

export default ContactForm