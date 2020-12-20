import { React, createRef } from 'react';

const Track = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "0.625rem",
        backgroundColor: "#ecf0f1",
        borderRadius: "0.25rem"
      }}
    />
  )
}

const Progress = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "0.625rem",
        backgroundColor: "#18bc9c",
        borderRadius: "0.25rem",
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 33ms ease-in-out",
        willChange: "transform"
      }}
    />
  )
}


const ActivityBar = () => {
  const ref = createRef();
  return (
    <Track>
      <Progress ref={ref} />
    </Track>
  );
}

export default ActivityBar;
