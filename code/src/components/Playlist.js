import PlaylistCover from "PlaylistCover";
import React from "react";
import PlaylistTracks from "./PlaylistTacks";

const Playlist = ({ image, track, trackUrl }) => {
  return (
    <div  className="playlist-item">
      <PlaylistCover image={image} />
      <PlaylistTracks track={track} trackUrl={trackUrl} />
    </div>
  );
};

export default Playlist;
