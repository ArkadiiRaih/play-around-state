import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchCharacters } from "../actions";

function FetchCharacters({ fetchCharacters }) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    const newValue = e.target.value;

    setValue(newValue);

    if (fetchCharacters) fetchCharacters(newValue);
  };

  return (
    <input
      onChange={handleChange}
      placeholder="Search here"
      type="search"
      value={value}
    />
  );
}

export default connect(null, { fetchCharacters })(FetchCharacters);
