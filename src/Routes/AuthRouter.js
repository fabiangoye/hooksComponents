import { Route, Routes } from "react-router"
import Dashboard from "../components/Dashboard";// en el mismo nivel un punto ./ una carpeta atrás dos punto ../
import PrimerComponente from "../components/PrimerComponente";

const AuthRouter = () => {
    return (
        <>
           <Routes>
               <Route path="/" element= {<Dashboard/>}>
                    <Route path="primercomponente" element= {<PrimerComponente/>}/>
               </Route>
              
               
           </Routes>
        </>
    )
}

export default AuthRouter;
