import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppBar = () => {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      expand="lg"
      className="py-3 mb-4 w-100 fixed-top"
    >
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <LinkContainer to="/">
              <Nav.Link className="fs-4">MAIN</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/archive">
              <Nav.Link className="fs-4">ARCHIVE</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
