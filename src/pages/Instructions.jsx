import React from "react";
import Wrapper from "../components/Wrapper";
import { Container } from "react-bootstrap";

function Instructions() {
  return (
    <Wrapper>
      <section className="rules_sec p-2 p-md-4">
        <Container>
          <h2>Instructions</h2>
          <ul>
            <li>
              <strong>No Abusive Language:</strong> Respect all users by
              refraining from using offensive or abusive language.
            </li>
            <li>
              <strong>No Personal Information:</strong> Do not share personal
              information, either your own or others'.
            </li>
            <li>
              <strong>Respect Privacy:</strong> Respect the anonymity of other
              users; do not attempt to reveal anyone's identity.
            </li>
            <li>
              <strong>No Spamming:</strong> Avoid sending repetitive messages or
              unsolicited advertisements.
            </li>
            <li>
              <strong>No Illegal Activities:</strong> Discussions involving
              illegal activities are strictly prohibited.
            </li>
            <li>
              <strong>Use Appropriate Language:</strong> Avoid offensive or
              vulgar language to maintain a welcoming environment.
            </li>
            <li>
              <strong>No Hate Speech:</strong> Discrimination or hate speech
              based on race, gender, sexuality, or any other characteristic is
              not tolerated.
            </li>
          </ul>
        </Container>
      </section>
    </Wrapper>
  );
}

export default Instructions;
