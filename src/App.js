import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';// este es el import que se debe poner. Está en el Getting started/ bloque CSS
import PrimerComponente from './components/PrimerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PrimerComponente/>
      </header>
    </div>
  );
}

export default App;
