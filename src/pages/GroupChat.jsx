import React from "react";
import Wrapper from "../components/Wrapper";

function GroupChat() {
  return (
    <Wrapper>
      <div className="groupchat_wrapper">
        <div className="chatarea">msg</div>

        <div className="send_wrapper">
          <div className="mb-4">
            <label for="cars" className="me-3">
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

export default GroupChat;
