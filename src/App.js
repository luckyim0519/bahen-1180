import styles from "./App.module.css";

// importing the components we write in the separate files
import Login from "./login/Login";
import Landing from "./login/Landing";
import Classroom from "./classroom/Classroom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="classroom" element={<Classroom />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
