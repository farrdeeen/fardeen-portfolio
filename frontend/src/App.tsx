import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Admin from "./components/admin";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedroute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <h1 className="text-center text-white p-20">404 Page Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
