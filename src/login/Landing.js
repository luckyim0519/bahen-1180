import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div>This is a landing page!!!</div>
      <div>Here are some links</div>
      <Link to="/classroom">Classroom Link!!</Link>
      <Link to="/login">Login Link!!</Link>
    </div>
  );
}

export default Landing;
