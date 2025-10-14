import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import GameDetails from "./pages/GameDetails.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="container">
        {/* ROTAS PRINCIPAIS DA APLICAÇÃO */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route
            path="*"
            element={<div className="empty">Página não encontrada.</div>}
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>Letícia Puga - Para fins acadêmicos - © Include Jr. 2025</p>
      </footer>
    </div>
  );
}
