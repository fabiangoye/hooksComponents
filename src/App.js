//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// este es el import que se debe poner. Está en el Getting started/ bloque CSS
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRouter from './Routes/AuthRouter';
import UnauthRouter from './Routes/UnauthRouter';


function App() {

  const {auth} = useContext(AuthContext); // ese const {auth} = es una desestructuración

  return (
    <div className="App">
      { auth? <AuthRouter/>: <UnauthRouter/>}
    </div>
  );
}

export default App;
