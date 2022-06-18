import { Rating } from "@mui/material";
import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, activeCard, setActiveCard }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "1px solid gold" : "none",
        padding: "40px",
        backgroundColor: "rgba(130, 3, 249, 0.273)",
        marginBottom: "15px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2
        style={{
          marginBottom: "20px",
        }}>
        {item.name} {item.lastName}
      </h2>
      <h4
        style={{
          margin: "15px",
        }}>
        {item.occupation}
      </h4>
      <img
        className="user-image"
        style={{
          marginBottom: "20px",
        }}
        src={item.image}
        alt=""
      />
      <br />
      <Rating name="simple-controlled" defaultValue={5} />
      <br />

      <div
        style={{
          marginTop: "15px",
        }}>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://www.pinclipart.com/picdir/middle/383-3835891_png-file-svg-white-interest-icon-png-clipart.png"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://i.pinimg.com/474x/a3/6b/be/a36bbeb6573ccb3396ad3c225b5157f9.jpg"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
