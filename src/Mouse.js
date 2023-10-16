import { useState, useEffect } from "react";
export default function Mouse() {
  const [mouseCoords, setMouseCoords] = useState([]);

  useEffect(() => {
    window.addEventListener("click", (e) =>
      setMouseCoords([
        ...mouseCoords,
        {
          x: e.clientX,
          y: e.clientY,
        },
      ])
    );
  }, [mouseCoords]);

  return (
    <div>
      {mouseCoords.map((c) => (
        <div
          key={JSON.stringify(c.x, c.y)}
          style={{
            position: "absolute",
            top: c.y,
            left: c.x,
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            backgroundColor: "purple",
          }}
        ></div>
      ))}
    </div>
  );
}
