import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth' //This will open up pop up menu
import { auth, Providers } from '../config/firebase'

interface Props{ //We used props for our modal
    children: React.ReactNode; 
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
// This will just check if the user is logged in, if so, it returns he children which are passed as props- its just whatever component is either protected or not otherwise it sends them to the login route 
    useEffect(() => {
        if(!auth.currentUser){
            navigate("../")
            signInWithPopup(auth, Providers.google)

        }
    }, []) //If we dont add the empty array then useEffect will happen constantly, any time the auth compenent is checked

  return (
    <>{children}</> //its going to take the children we put in the auth component checker and put it through there
  )
}

export default AuthChecker