import React, { useState, useContext } from "react";
import { GrudgeContext } from "./GrudgeContext";

function NewGrudge() {
  const { onAdd } = useContext(GrudgeContext);

  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    onAdd(name, reason);
    setName("");
    setReason("");
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        name="grudge"
        placeholder="grudge"
        value={reason}
        onChange={e => setReason(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default NewGrudge;
