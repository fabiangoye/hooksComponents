import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// este es el import que se debe poner. Está en el Getting started/ bloque CSS
import PrimerComponente from './components/PrimerComponente';
import { RecibirProps } from './components/RecibirProps';

function App() {

  const [result, setResult] = useState("");
  
  const handleResult= (newResult) => {
    setResult(newResult);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*}<RecibirProps mensaje="Hola mundo desde App.js" numero="10"/>{*/}
        <PrimerComponente handleResult = {handleResult}/>
        <RecibirProps Resultado desde App ={result}/>{/*} si se llama result, que tiene origen en otro componente hay que creale un estado: const [result, setResult] = useState("");{*/}
      </header>
    </div>
  );
}

export default App;
