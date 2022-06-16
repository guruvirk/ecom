import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

function App() {
  document.title = "Ecom"
  return (
    <>
      <Router>
        <Navbar title="Ecom"></Navbar>
        <div>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
