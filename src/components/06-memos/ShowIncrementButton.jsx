import React from "react";

const ShowIncrementButton = React.memo(({ increment }) => {
  console.log("Here we go again :(");
    
  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      +1
    </button>
  );
});

export default ShowIncrementButton;
