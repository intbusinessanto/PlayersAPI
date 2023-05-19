import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { PlayersFormPage } from "./pages/PlayersFormPage";
import { PlayersPage } from "./pages/PlayersPage";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={< Navigate to="/players" />} />
          <Route path="/players" element={< PlayersPage />} />
          <Route path="/players-create" element={< PlayersFormPage />} />
          <Route path="/players/:id" element={< PlayersFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App