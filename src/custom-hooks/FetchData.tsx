// were going to discover a new hook called use effect. When were writing a hook we use 'use' at the beginning, when your writing or reading React code and you see the word 'use' that means its a hook. There are 11 hooks that comes standar with their library. However were writing our own here. If its not in the  standard 11 hooks, then it is a user defined hook, whether you or someone else wrote it. 'use' is what we start with like 'useGetData
import { useEffect, useState } from "react"
import { server_calls } from "../api/server"


export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    // Were going to do some data processing in the middle of the return and const
    async function handleDataFetch(){ // This is where we handle the fetching of our data from the servers
        const result = await server_calls.get(); //This should go to the servers and inquire about the data that their storing from our database
        setData(result) //Now the contact data is whatever the result of this server call is (line 7 & 11). We can call contact data somewhere else and that is where the data exists
    }

    //useEffect hook on mount
    useEffect( () => { //useEffect syntax is a tad bit off, if you get rid of the comma on line 18 useEffect would occur EVERY single time the component that it lives in changes. this means that ANYTIME something on the page changes like checking or unchecking a box this function will occur. WE DONT WANT THAT TO HAPPEN. Otherwise youll KEEP getting data, getting data, getting data, getting data... ANYTIME we interact with our dashboard something will change, instead we add an empty array after the comma. THIS MEANS, it will occur only one time. in the empty array you could type 'componentName' whatever the name of that component is it will watch for 
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch} //Were returning an empty object here {}, when you put variables in the curly braces your returning objects. This function handleData is going to occur with whatever we name it , somewhere else. The getData function will get Data send it to handle
  
}

