import React from "react";

function Button({ title, color }) {
  return <button style={{ background: color }}>{title}</button>;
}

export default Button;
