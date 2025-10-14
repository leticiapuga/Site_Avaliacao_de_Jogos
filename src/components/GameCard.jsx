import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function GameCard({ game }) {
  return (
    <article className="card">
      {/* EXIBE A IMAGEM DO JOGO, GARANTE QUE O CARD SEMPRE MOSTRE UMA FOTO */}
      <img src={game.cover} alt={game.title} className="game-card-img" />
      <div className="card-body">
        <h3 className="card-title">{game.title}</h3>
        <div className="badges">
          {/* GERA OS BADGES DE GÊNERO DINAMICAMENTE */}
          {game.genres.map((g) => (
            <span key={g} className="badge">
              {g}
            </span>
          ))}
        </div>
        <div className="card-meta">
          {/* MOSTRA A NOTA MÉDIA E QUANTIDADE DE REVIEWS */}
          <Rating value={game.avgScore} />
          <span>{game.reviewCount} review(s)</span>
        </div>
        {/* LINK PARA DETALHES DO JOGO */}
        <Link
          className="more"
          to={`/game/${game.id}`}
          aria-label={`Abrir detalhes de ${game.title}`}
        >
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}
