import React from "react";
import { Container } from "react-bootstrap";
import error from "../assets/images/404.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container>
      <div className="error404">
        <img src={error} alt="img" />
        <h5>Page not found!</h5>
        <div className="d-flex">
          <Link to={"/"}>
            <button>BACK TO HOME</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Error;
