import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default LayoutPublic;
