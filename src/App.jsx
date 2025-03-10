import MainLayout from './pages/mainlayout';
import Home from "./pages/desktop";
import Login from "./pages/login";
import NotFound from './pages/notfound';
import SignUp from './pages/signup';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      {/* <MainLayout> */}
        <Routes>
          <Route path="/spark-cuvette" element={<Home />} />
          <Route path="/spark-cuvette/login" element={<Login />} />
          <Route path="/spark-cuvette/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </MainLayout> */}
    </Router>  
    </>
  )
}

export default App
