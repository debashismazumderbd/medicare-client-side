import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../LoginHooks/useAuth';
import './Header.css';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <>
<Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg" >
 <Container>
 <Navbar.Brand href="#home">DM MEDI-CARE</Navbar.Brand>
<Navbar.Toggle />
 <Navbar.Collapse className="justify-content-end">

        <Nav.Link as={ HashLink } to="/home#home">Home</Nav.Link>
        <Nav.Link as={ HashLink } to="/Services">Service</Nav.Link>
        <Nav.Link as={ HashLink } to="/home#About">About Us</Nav.Link>
         <Nav.Link as={ HashLink } to="/Blog">Blog</Nav.Link>
         <Nav.Link as={ HashLink } to="/registration">Registration</Nav.Link>
         {user?.email ? 
           <Button onClick={logOut} variant="dark">Logout</Button>:
          <Nav.Link as={ HashLink } to="/login">Login</Nav.Link>}
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
       
      </Navbar.Text>
    </Navbar.Collapse>
 </Container>
</Navbar>
        </>
    );
};

export default Header;