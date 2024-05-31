import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="model_links">
          <Link to={"/single-chat"}>
            <button>One to One Chat</button>
          </Link>
          <Link to={"/group-chat"}>
            <button>Chatroom</button>
          </Link>
          <Link to={"/group-chat"}>
            <button>Chatroom [NSFW]</button>
          </Link>
          <Link to={"/instructions"}>
            <button>Instructions</button>
          </Link>
          <Link to={"/about-us"}>
            <button>About Us</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="side_nav">
        <Link to={"/"}>
          <h2>SafeChat</h2>
        </Link>
        <div className="nav_tabs">
          <Link to={"/single-chat"}>
            <button>One to One Chat</button>
          </Link>
          <Link to={"/group-chat"}>
            <button>Chatroom</button>
          </Link>
          <Link to={"/group-chat"}>
            <button>Chatroom [NSFW]</button>
          </Link>
          <Link to={"/instructions"}>
            <button>Instructions</button>
          </Link>
          <Link to={"/about-us"}>
            <button>About Us</button>
          </Link>
        </div>
      </div>
      <div className="mobile_nav">
        <h2>SafeChat</h2>
        <div>
          <button onClick={() => setModalShow(true)}>Menu</button>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Header;
