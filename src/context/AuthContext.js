import { createContext, useState } from "react";


const AuthContext = createContext();//creando comtexto hook createContext

const AuthProvider = ({children}) =>{//creando proveedor, donde se crean estados y funciones, children son los hijos en el contexto
    const [auth, setAuth] = useState("");// estado de autenticación del usuario

    const handleAuth = (user, pass) =>{
        console.log("llamando handleAuth del context...");

        user === 'admin' && pass === '12345'?  setAuth(true) : setAuth(false);       
    }//creando manejador de autenticación, (método o función)

    const data = {auth, handleAuth};

    return <AuthContext.Provider value ={data}>{children}</AuthContext.Provider>//return del AuthProvider, children en la mitad del contexto
} 

export {AuthProvider};
export default AuthContext;
