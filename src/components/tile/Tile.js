import React from "react";

export const Tile = ({ contact }) => {
  let pSeperator = Object.values(contact).map((el, i) => {
    if (i === 0) {
      return (
        <p key={i} className="tile-title">
          {el}
        </p>
      );
    } else {
      return (
        <p key={i} className="tile">
          {el}
        </p>
      );
    }
  });
  return <div className="tile-container">{pSeperator}</div>;
};
