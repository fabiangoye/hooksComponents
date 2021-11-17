//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// este es el import que se debe poner. Está en el Getting started/ bloque CSS

import Login from './components/login';
import { Route, Routes } from 'react-router';
import Dashboard from './components/Dashboard';

function App() {

 

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path="/" element = {<Login/>}></Route>
          <Route path="/dashboard" element = {<Dashboard autorizado={false}/>}></Route>
        </Routes>
        
        {/*}<RecibirProps mensaje="Hola mundo desde App.js" numero="10"/>{*/}
       
      </header>
    </div>
  );
}

export default App;
