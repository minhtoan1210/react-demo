import { useContext } from "react";
import {Context} from './AppProvider.jsx'
export default function useAuth()
{
    let {login , user,handleLogin,popuplogin,closelogin,outlogin} =useContext(Context)
    return{ login , user,handleLogin,popuplogin,closelogin,outlogin }
}