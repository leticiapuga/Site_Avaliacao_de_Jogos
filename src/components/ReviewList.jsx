import { useApp } from "../store/AppContext";

// FORMATA O TEMPO (EX: "2h atrás")
function timeAgo(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60) return "agora";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m atrás`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h atrás`;
  const d = Math.floor(h / 24);
  return `${d}d atrás`;
}

export default function ReviewList({ gameId }) {
  const { reviews } = useApp();
  const list = reviews[gameId] ?? [];
  if (!list.length)
    return (
      <div className="helper">
        Ainda não há avaliações para este jogo. Seja o(a) primeiro(a) a opinar!
        🙌
      </div>
    );

  return (
    <div className="review-list">
      {/* EXIBE CADA REVIEW COM AVATAR, AUTOR, TEMPO E NOTA */}
      {list.map((r, i) => (
        <article key={i} className="review">
          <div className="avatar" aria-hidden>
            {(r.author || "A").slice(0, 1).toUpperCase()}
          </div>
          <div>
            <div className="who">{r.author || "Anônimo(a)"}</div>
            <div className="helper">{timeAgo(r.createdAt)}</div>
            <p style={{ marginTop: 6, lineHeight: 1.5 }}>{r.text}</p>
          </div>
          <div className="note">{r.score}/10</div>
        </article>
      ))}
    </div>
  );
}
