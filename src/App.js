import styles from "./App.module.css";

// importing the components we write in the separate files
import Login from "./login/Login";
import Landing from "./login/Landing";
import SelectAvartar from "./login/SelectAvartar";
import Classroom from "./classroom/Classroom";
import Register from "./login/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="SelectAvartar" element={<SelectAvartar />}></Route>
          <Route path="classroom" element={<Classroom />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
