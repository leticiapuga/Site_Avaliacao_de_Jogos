import { useApp } from "../store/AppContext";
import GameCard from "../components/GameCard";

export default function Home() {
  const { filtered } = useApp();

  return (
    <section>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: 14,
          marginBottom: 16,
        }}
      >
        <div>
          <h2 style={{ margin: "6px 0" }}>
            Descubra, avalie e acompanhe tendências
          </h2>
          <p className="helper">
            Use a busca no topo para encontrar um jogo. Clique no card para ver
            detalhes e reviews.
          </p>
        </div>
      </header>
      {/* EXIBE OS CARDS DOS JOGOS FILTRADOS */}
      <div className="grid">
        {filtered.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
      {/* MENSAGEM QUANDO NENHUM JOGO É ENCONTRADO */}
      {!filtered.length && (
        <div className="empty">Nenhum jogo encontrado para sua busca.</div>
      )}
    </section>
  );
}
