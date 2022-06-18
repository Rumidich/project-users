import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Members = ({ users }) => {
  const [activeCard, setActiveCard] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {users.map(item => (
        <strong
          onClick={() => setActiveCard(item.id)}
          key={item.id}
          style={{
            margin: "10px",
            fontSize: "18px",
            color: activeCard === item.id ? "red" : "purple",
          }}>
          {item.name} {item.lastName}
          {isModalOpen ? (
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          ) : null}
          <button
            style={{
              marginLeft: "5px",
              color: "purple",
              fontSize: "14px",
            }}
            onClick={() => setIsModalOpen(true)}>
            Info
          </button>
        </strong>
      ))}
    </div>
  );
};
export default Members;
