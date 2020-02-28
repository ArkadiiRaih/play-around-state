import React from "react";

function UnpackAll({ items }) {
  const handleClick = () => {
    items.forEach(item => item.toggle());
  };

  return (
    <button className="button full-width" onClick={handleClick}>
      Mark All As Unpacked
    </button>
  );
}

export default UnpackAll;
