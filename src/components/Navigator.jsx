import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <>
   

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto ">
            <Link to="/add" className='p-3'>Addproduct</Link>
            <Link to="/" className='p-3'>home</Link>
    
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}


export default Navigator;