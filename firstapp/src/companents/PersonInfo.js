import React from "react";

function PersonInfo(props) {
  return (
    <div>
      <center>
        <h1>Infos</h1>
        <p>
          name: {props.name} <br />
          age: {props.age}
        </p>
      </center>
    </div>
  );
}

export default PersonInfo;
