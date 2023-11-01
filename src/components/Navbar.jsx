import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar className="navbar-dark bg-dark">
      <Container>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="/about" className="navbar-brand">
          About
        </Link>
        <Link to="/blog" className="navbar-brand">
          Blog
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
