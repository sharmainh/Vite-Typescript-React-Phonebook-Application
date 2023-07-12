import { createSlice } from "@reduxjs/toolkit";

// https://redux.js.org/tutorials/quick-start

//All were doing below this line (line 6) is implementing the {createSlice} functionality above
const rootSlice = createSlice({ //createSlice requires certain things linkClasses, name, initialstate, reducers
    name: "root",
    initialState: {
        name: "Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
        //if werent able to finish adding the data to the initialState section above, thats fine  (name, email, phone, and address would be the default values), Typically YOU SHOULD THROW an error if everything is not filled out 
    },
    reducers: { //reducers will allow you to do things with the data. state, and action are default values/parameters, that are required. You can do other things to the state name or to the payload
        //action is submitted elsewhere - written to state.name
        chooseName: (state, action) => {state.name = action.payload}, //All were doing is setting the input to the state.name. We will update the initialState "name" with whatever we feed it
        chooseEmail: (state, action) => {state.email = action.payload},
        choosePhone: (state, action) => {state.phone_number = action.payload},
        chooseAddress: (state, action) => {state.address = action.payload},
        //We can attach functions to other places is why the above variable names are matching the names we used in other places

    }


})

// The below line of code (line 29) is going to take the entire reducer dictionary (line 15-20) and
export const reducer = rootSlice.reducer; // This is redux syntax
export const { chooseName, chooseEmail, choosePhone, chooseAddress} = rootSlice.actions //This is going to give us access to all of the keys and values in reducers, and move it to some place else