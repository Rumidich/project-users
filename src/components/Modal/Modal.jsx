import React from "react";
import "../Modal/Modal.css";

const Modal = ({ users, isModalOpen, setIsModalOpen }) => {
  return (
    <div id="modal">
      <div id="modal-body">
        {/* {users.map(item => (
          <div key={item.id}>
            <h2>Name: {item.name} </h2>
            <h3>Last Name: {item.lastName} </h3>
            <h4>Age: {item.age} </h4>
            <h5>Occupation: {item.occupation} </h5>
          </div>
        ))} */}
      </div>

      <button
        style={{
          borderRadius: "3px",
          color: "purple",
          fontSize: "20px",
          backgroundColor: "gold",
        }}
        id="modal-close"
        onClick={() => {
          setIsModalOpen(false);
        }}>
        {" "}
        Close{" "}
      </button>
    </div>
  );
};

export default Modal;
