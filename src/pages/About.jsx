import React from "react";
import Wrapper from "../components/Wrapper";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Wrapper>
      <section className="about_sec p-2 p-md-4">
        <Container>
          <h2>About Us</h2>
          <p>
            As a passionate web developer, I created SafeChat as a hobby project
            to provide a secure and anonymous communication platform. Motivated
            by a commitment to privacy and free expression, this non-profit
            website aims to foster open conversations without compromising
            users' personal information.
          </p>
          <p>
            Welcome to SafeChat, your go-to destination for safe, anonymous, and
            open communication. Our platform empowers users to engage in
            one-on-one chats or join vibrant group chat rooms without the need
            to share any personal information. We believe in the freedom to
            discuss any topic without the fear of revealing your identity. At
            SafeChat, your anonymity is our priority, ensuring a secure
            environment where you can express yourself freely and connect with
            others who share your interests.
          </p>
          <p>
            Security and privacy are at the heart of SafeChat. All conversations
            are end-to-end encrypted using the RSA method, guaranteeing that
            your chats remain private and inaccessible to anyone other than the
            intended recipients. We are committed to your confidentiality, which
            is why we do not store any chat histories. Whether you’re discussing
            casual topics, seeking advice, or sharing your thoughts on more
            sensitive matters, you can trust SafeChat to provide a secure and
            private platform for your conversations. Join us today and
            experience a new level of anonymous, secure communication.
          </p>
          <p>© 2022 SafeChat, All rights reserved.</p>
        </Container>
      </section>
    </Wrapper>
  );
}

export default About;
