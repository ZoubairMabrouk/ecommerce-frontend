import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = ({filtre, handleFiltreChange}) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Gestion Commerciale</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categories">
            Catégories
          </Nav.Link>
          <Nav.Link as={Link} to="/scategories">
            Sous Catégories
          </Nav.Link>
          <Nav.Link as={Link} to="/articles">
            Liste des Articles
          </Nav.Link>
         < Nav.Link as={Link} to="/articlescard">article Card</Nav.Link>
        </Nav>
      </Container>
      <Form className="search-bar">
        <FormControl
          type="text"
          placeholder="Search"
          value={filtre}
          aria-label="Search"
          onChange={handleFiltreChange}
        />
        <Button className="btn-search">Chercher</Button>
      </Form>
    </Navbar>
  );
};
export default Menu;
