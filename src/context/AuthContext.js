import { createContext, useState } from "react";


const AuthContext = createContext();//creando comtexto hook createContext

const AuthProvider = ({children}) =>{//creando proveedor, donde se crean estados y funciones, children son los hijos en el contexto
    const [auth, setAuth] = useState(false);// estado de autenticación del usuario

    const handleAuth = () =>{
        console.log("llamando handleAuth del context...");
    }//creando manejador de autenticación, (método o función)

    const data = {auth, handleAuth};

    return <AuthContext.Provider value ={data}>{children}</AuthContext.Provider>//return del AuthProvider, children en la mitad del contexto
} 

export {AuthProvider};
export default AuthContext;
