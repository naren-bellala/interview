import { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

function StarRating({ max }) {
  const [selected, setSelected] = useState(0);
  function getStars() {
    const stars = [];
    for (let i = 0; i < max; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < selected ? "selected" : ""}
          onClick={() => setSelected(i + 1)}
        />
      );
    }
    return stars;
  }

  return <>{getStars()}</>;
}

export default function App() {
  return (
    <div className="App">
      <StarRating max={10} />
    </div>
  );
}
