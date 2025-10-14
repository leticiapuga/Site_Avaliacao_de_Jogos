import { useParams, Link, useNavigate } from "react-router-dom";
import { useApp } from "../store/AppContext";
import Rating from "../components/Rating";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

export default function GameDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const { games } = useApp();
  const game = games.find((g) => g.id === id);

  // SE NÃO ENCONTRAR O JOGO, MOSTRA MENSAGEM DE ERRO
  if (!game) {
    return (
      <div className="empty">
        Jogo não encontrado.{" "}
        <button className="btn secondary" onClick={() => nav("/")}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <section className="details">
      <article className="hero">
        {/* MOSTRA IMAGEM, TÍTULO, NOTA E GÊNEROS */}
        <img src={game.cover} alt={`Arte de ${game.title}`} />
        <div className="hero-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <h1>{game.title}</h1>
            <Rating value={game.avgScore} />
            <span className="helper">({game.reviewCount} review(s))</span>
          </div>
          <div className="badges">
            {game.genres.map((g) => (
              <span key={g} className="badge">
                {g}
              </span>
            ))}
          </div>
          <p>{game.description}</p>
          <Link className="more" to="/">
            ← Voltar para a lista
          </Link>
        </div>
      </article>

      {/* FORMULÁRIO PARA NOVA REVIEW */}
      <aside className="panel">
        <h3>Escreva sua avaliação</h3>
        <ReviewForm gameId={game.id} />
      </aside>

      {/* LISTA DE REVIEWS DA COMUNIDADE */}
      <div className="panel" style={{ gridColumn: "1 / -1" }}>
        <h3>Reviews da comunidade</h3>
        <ReviewList gameId={game.id} />
      </div>
    </section>
  );
}
