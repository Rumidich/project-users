import React, { useState } from "react";
import Card from "../Card/Card";

const List = ({ users }) => {
  const [activeCard, setActiveCard] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        textAlign: "center",
        color: "purple",
      }}>
      {users.map(item => (
        <Card
          key={item.id}
          item={item}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
};
export default List;
