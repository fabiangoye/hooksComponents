import { useNavigate } from "react-router"


const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => navigate('/dashboard');//hacía donde se quiere navegar

    return (
        <div>
            <h2>Login</h2>
            <p>prueba para git</p>
            <button onClick={handleLogin}>Entrar</button>{/* lista la ruta*/}
        </div>
    )
}

export default Login
