import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search for songs here"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
