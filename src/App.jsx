import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import TheNavBar from "./components/TheNavBar.jsx";

function App() {
  // const isLogged = false;
  return (
    <Router>
      <div>
        <TheNavBar />
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
