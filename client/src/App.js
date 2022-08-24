import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Ask from "./pages/Ask";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<Ask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
