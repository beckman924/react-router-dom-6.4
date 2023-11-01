import { Outlet, useNavigation } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />

      <Container fluid className="my-4">
        {navigation.state === "loading" && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default LayoutPublic;
