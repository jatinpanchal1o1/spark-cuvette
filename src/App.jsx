import MainLayout from './pages/mainlayout';
import Home from "./pages/desktop";
import Login from "./pages/login";
import NotFound from './pages/notfound';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>  
    </>
  )
}

export default App
