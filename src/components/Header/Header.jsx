import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="white"color='black' fixed="top" className='mynav'>
        <Container>
          <Navbar.Brand className='Brand'>Library Management System</Navbar.Brand>
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="./Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;