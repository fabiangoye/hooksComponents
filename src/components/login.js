//import { useNavigate } from "react-router"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';


const Login = () => {

    const {handleAuth} = useContext(AuthContext);// accediendo al handleAuth que esta en el contexto
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = () =>{
            handleAuth(user, pass);
    }

    const handleUser = (e) =>{
        setUser(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    {/*}const navigate = useNavigate();

    const handleLogin = () => navigate('/dashboard');//hacía donde se quiere navegar{*/}

    return (
        <div className="App-header">

            <Card>
                <Card.Header>Iniciar Sesión</Card.Header>
                <Card.Body>
                    {/*usuario*/}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Usuario</InputGroup.Text >
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value ={user}
                            onChange = {handleUser}
                        />
                    </InputGroup>

                    {/*contraseña*/}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Contraseña</InputGroup.Text>
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            type="password"
                            value ={pass}
                            onChange = {handlePass}
                        />
                    </InputGroup>

                    <Button variant="primary" onClick = {handleLogin}>Iniciar Sesión </Button>
                </Card.Body>
            </Card>

            {/*<h2>Login</h2>
            <button onClick={handleLogin}>Entrar</button>{/* lista la ruta*/}

        </div>
    )
}

export default Login
