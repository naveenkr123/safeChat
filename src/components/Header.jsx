import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import AppContext from "../pages/AppContext";

function MyVerticallyCenteredModal(props) {
  const myContext = useContext(AppContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="model_links">
          <Link
            to={"/single-chat"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
            <button>One to One Chat</button>
          </Link>
          <Link
            to={"/chatroom"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
            <button>Chatroom</button>
          </Link>
          <Link
            to={"/nsfw-chat"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
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
  const myContext = useContext(AppContext);

  return (
    <>
      <div className="side_nav">
        <Link to={"/"}>
          <h2>SafeChat</h2>
        </Link>
        <div className="nav_tabs">
          <Link
            to={"/single-chat"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
            <button>One to One Chat</button>
          </Link>
          <Link
            to={"/chatroom"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
            <button>Chatroom</button>
          </Link>
          <Link
            to={"/nsfw-chat"}
            className={`${myContext.valid ? "d-block" : "d-none"}`}
          >
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
