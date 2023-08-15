import React from "react";

function PersonInfo({data : {name,age}}) {
  return (
    <div>
      <center>
        <h1>Infos</h1>
        <p>
          name: {name} <br />
          age: {age}
        </p>
      </center>
    </div>
  );
}

export default PersonInfo;
