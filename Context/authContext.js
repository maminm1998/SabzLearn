import { createContext } from "react";

const AuthContext = createContext({
    isLoggined:false,
    token:null,
    userInfo:null,
    login:()=>{},
    logout:()=>{}
})

export default AuthContext