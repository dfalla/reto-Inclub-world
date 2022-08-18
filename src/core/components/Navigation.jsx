import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'; 


 
export const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                
                <Navbar.Brand as={NavLink} to="/">Inclub World</Navbar.Brand>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='me-auto'>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Servicios</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/servicios/crear-servicio">
                                Crear Servicios
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

