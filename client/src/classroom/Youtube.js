import React from "react";
import styles from "./assets/youtube.css";

// code taken from https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

const Youtube = ({ embedId }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width={window.innerWidth * 0.3}
      height={window.innerWidth * 0.17}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Lecture Video"
    />
  </div>
);

export default Youtube;
