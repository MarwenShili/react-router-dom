import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card(props) {
  const { title, description } = props;
  const [name, setName] = useState("marwen");
  //   console.log("before", name);

  const changeName = () => {
    setName("shili");
    console.log("after", name);
  };

  return (
    <div className="card">
      <img
        src="https://communitynewspapers.com/wp-content/uploads/2019/05/Topless-Convertible-of-the-yr-2019-featured.jpg"
        alt=""
      />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="action_card">
        <Button color="red" title="Cancel" />
        <Button color="green" title="Submit" />
      </div>
      {/* {name}
      <button onClick={changeName}>Change name</button> */}
    </div>
  );
}

export default Card;
