import { useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../store/AppContext";
import logo from "../assets/logo.png";

export default function Header() {
  const { query, setQuery } = useApp();
  const nav = useNavigate();
  const loc = useLocation();

  // SEMPRE REDIRECIONA PARA HOME ANTES DE FILTRAR
  function onSubmit(e) {
    e.preventDefault();
    if (loc.pathname !== "/") nav("/");
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand" onClick={() => nav("/")}>
          {/* MOSTRA A LOGO AO LADO DO NOME DO SITE */}
          <img src={logo} alt="Logo" className="brand-badge" />
          <div>
            Include{" "}
            <span style={{ opacity: 0.7, fontWeight: 500 }}>Reviews</span>
          </div>
        </div>
        <form
          className="searchbar"
          onSubmit={onSubmit}
          role="search"
          aria-label="Buscar jogos"
        >
          {/* ÍCONE DE BUSCA SVG */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 21l-3.9-3.9"
              stroke="white"
              strokeOpacity=".7"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="white"
              strokeOpacity=".7"
              strokeWidth="2"
            />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome do jogo..."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
}
