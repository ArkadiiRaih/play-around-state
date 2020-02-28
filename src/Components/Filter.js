import React, { useCallback } from "react";
import styled from "@emotion/styled";

const ItemsSearchTerm = styled.input`
  background-color: white;
  margin-bottom: 0.5em;
  width: 100%;
`;

function Filter({ searchTerm, onChange }) {
  const handleChange = useCallback(
    e => {
      const value = e.target.value;
      onChange(value);
    },
    [onChange]
  );

  return (
    <ItemsSearchTerm
      value={searchTerm}
      onChange={handleChange}
      placeholder="Seacrch..."
    />
  );
}

export default Filter;
