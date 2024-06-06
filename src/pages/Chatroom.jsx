import React, { useContext, useEffect, useState, useCallback } from "react";
import AppContext from "./AppContext";
import Wrapper from "../components/Wrapper";
import { Container } from "react-bootstrap";
import MsgBox from "../components/MsgBox";
import { useNavigate } from "react-router-dom";

function Chatroom() {
  const myContext = useContext(AppContext);
  const navigate = useNavigate();
  const [userMsg, setUserMsg] = useState("");
  const [chatroomData, setChatroomData] = useState([]);

  useEffect(() => {
    if (!myContext.valid) {
      navigate("/");
    }
  }, [myContext.valid, navigate]);

  // Function to get current time in hh:mm format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Function to fetch chatroom data
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://${myContext.serverIP}:8000/chatroom`
      );
      const data = await response.json();
      setChatroomData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [myContext.serverIP]);

  // Function to send a new message
  async function sendMsg(e) {
    e.preventDefault();
    if (userMsg !== "") {
      try {
        await fetch(`http://${myContext.serverIP}:8000/chatroom`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: myContext.username,
            timestamp: getCurrentTime(),
            message: userMsg,
          }),
        });
        setUserMsg("");
        fetchData();
      } catch (error) {
        alert(error.message);
      }
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch data every second
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [fetchData]);

  return (
    <Wrapper>
      <div className="Chatroom_wrapper">
        <div className="chatarea">
          <Container>
            {chatroomData.map((item, index) => (
              <MsgBox
                key={index}
                username={item.username}
                timestamp={item.timestamp}
                message={item.message}
              />
            ))}
          </Container>
        </div>

        <div className="send_wrapper">
          <div className="mb-3">
            <label htmlFor="user" className="me-3">
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
          <form onSubmit={sendMsg}>
            <div className="d-flex">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
              />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Chatroom;
