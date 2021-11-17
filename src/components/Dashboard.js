
import { Navigate, Outlet } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./Dashboard.css"




const Dashboard = () => {

    return (

        <div>
            
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            
                                <Link className="letra" to ="primercomponente">Primer Componente</Link>
                            

                            <Nav.Link href="#home">componente</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {/*****mostrar rutas anidadas acá****/}
                <Outlet></Outlet>
               
            
        </div>

    )
}

export default Dashboard;
