import { useState } from "react";

//rafce + tab to create a react functional component
const AddForm = () => {
  const [count, setCount] = useState(0); //useState return table with 2 values(variables, function to update the variable)
  const tab = ["yo", "la", "cite"];
  return (
    <div>
      {/*Fonction anonyme () => fonction*/}
      <button
        onClick={() => {
          setCount((count) => count + 1); //agit a la fin de la fonction
        }}
      >
        add
      </button>
      <p>count:{count}</p>
      <div>
        {tab.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default AddForm;
