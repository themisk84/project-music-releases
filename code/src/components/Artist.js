import React from "react";

const Artist = ({ artist, artistLink }) => {
  return (
    <a href={artistLink} target="_blank">
      <h2>{artist}</h2>
    </a>
  );
};

export default Artist;
