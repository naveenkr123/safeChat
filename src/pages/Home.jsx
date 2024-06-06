import React, { useContext, useState } from "react";
import Wrapper from "../components/Wrapper";
import hero_img from "../assets/images/secure_laptop.svg";
import { Container, Modal } from "react-bootstrap";
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  function MyVerticallyCenteredModal(props) {
    const myContext = useContext(AppContext);
    const [user, setUser] = useState("");

    function validUser(event) {
      event.preventDefault();

      if (user !== "") {
        myContext.setUsername(user);
        myContext.setValid(true);
        setModalShow(false);
        navigate("/chatroom");
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="join_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>SafeChat</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={validUser}>
            <p>Enter a username:</p>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button type="submit">Join</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Wrapper>
      <section className="hero_sec">
        <Container>
          <h1>Welcome to SafeChat</h1>
          <p>"Secure Your Conversations with End-to-End Encryption"</p>
          <div className="d-flex">
            <img src={hero_img} alt="img" />
          </div>
          <div className="d-flex">
            <button onClick={() => setModalShow(true)} className="mx-auto">
              Let's go!
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Home;
