import { Route, Routes } from "react-router"
import Login from "../components/Login";// en el mismo nivel un punto ./ una carpeta atrás dos punto ../

const UnauthRouter = () => {
    return (
        <>
           <Routes>
               <Route path="/" element= {<Login/>}></Route>
           </Routes>
        </>
    )
}

export default UnauthRouter