import styles from "../../styles/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function nav() {
  return (
    <Navbar className={styles.Nav} fixed="top" variant="lg" bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/ws.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#Sobre">Sobre</Nav.Link>
          <Nav.Link href="#Galeria">Projetos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default nav;
