import { Route, Routes } from "react-router"
import Dashboard from "../components/Dashboard";// en el mismo nivel un punto ./ una carpeta atrás dos punto ../

const AuthRouter = () => {
    return (
        <>
           <Routes>
               <Route path="/" element= {<Dashboard/>}></Route>
           </Routes>
        </>
    )
}

export default AuthRouter;
