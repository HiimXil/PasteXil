import React from "react";
type PropsType = {
  code: string;
  language: string;
};
const copyCode = (props: PropsType) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(props.code);
        console.log(props.code);
      }}
      className="text-gray-500 float-right"
    >
      {props.language}
    </button>
  );
};

export default copyCode;
