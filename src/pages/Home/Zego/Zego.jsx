import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Zego = () => {
  const [input, setInput] = useState("");
  const navigate=useNavigate();
  const submitHandler=()=>{
    navigate(`/room/${input}`)
  }
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter ypur name"
        />
        <button onClick={submitHandler}>Join</button>
      </div>
    </div>
  );
};

export default Zego;