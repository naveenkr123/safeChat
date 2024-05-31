import React from "react";
import Wrapper from "../components/Wrapper";
import hero_img from "../assets/images/secure_laptop.svg";
import { Container } from "react-bootstrap";

function home() {
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
            <button className="mx-auto">Let's go!</button>
          </div>
        </Container>
      </section>
    </Wrapper>
  );
}

export default home;
