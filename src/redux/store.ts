//Store is like a mini temporary in-the-middle database. The store is going our temporary database, and were going to be able to access it/the store from different components. Were going to be able to say which components can access which stores  

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice'

export const store = configureStore({
    reducer,
    devTools: true, //This enables redux devtools integration, if you would like to install devtools on chrome to see what redux is doing

})