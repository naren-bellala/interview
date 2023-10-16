import { useState } from "react";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, searchResult] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://api.datamuse.com/words?rel_syn=" + e.target[0].value)
      .then((res) => res.json())
      .then(searchResult);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchId">Search term:</label>
        <input
          type="text"
          id="searchId"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button>Search</button>
      </form>
      <ul>{result && result.map((i) => <li>{i.word}</li>)}</ul>
    </>
  );
}
