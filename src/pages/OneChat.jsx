import React from "react";
import Wrapper from "../components/Wrapper";
import { Container } from "react-bootstrap";
import chatroomData from "../Data/chatroom.json";
import MsgBox from "../components/MsgBox";

function OneChat() {
  return (
    <Wrapper>
      <div className="OneChat_wrapper">
        <div className="chatarea">
          <Container>
            {chatroomData.map((item, index) => (
              <MsgBox
                index={index}
                username={item.username}
                timestamp={item.timestamp}
                message={item.message}
              />
            ))}
          </Container>
        </div>

        <div className="send_wrapper">
          <div className="mb-3">
            <label for="user" className="me-3">
              Send to:
            </label>
            <select name="users" id="user">
              <option value="All">All</option>
              <option value="User1">User1</option>
              <option value="User2">User2</option>
              <option value="User3">User3</option>
              <option value="User4">User4</option>
            </select>
          </div>
          <div className="d-flex">
            <input type="text" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default OneChat;
