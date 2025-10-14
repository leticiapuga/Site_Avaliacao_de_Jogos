import { useState } from "react";
import { useApp } from "../store/AppContext";

export default function ReviewForm({ gameId }) {
  const { addReview } = useApp();
  const [author, setAuthor] = useState("");
  const [score, setScore] = useState(8);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  // VALIDA OS CAMPOS DO FORMULÁRIO ANTES DE ENVIAR
  function onSubmit(e) {
    e.preventDefault();
    setError("");
    if (score < 1 || score > 10)
      return setError("A nota deve estar entre 1 e 10.");
    if (!text.trim())
      return setError("Escreva um comentário para sua avaliação.");
    addReview(gameId, {
      author: author?.trim() || "Anônimo(a)",
      score: Number(score),
      text: text.trim(),
    });
    setAuthor("");
    setScore(8);
    setText("");
    setSent(true);
    // MOSTRA MENSAGEM TEMPORÁRIA DE SUCESSO
    setTimeout(() => setSent(false), 1800);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        <div className="helper">Seu nome (opcional)</div>
        <input
          className="input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Ex.: Maria Gamer"
        />
      </label>
      <label>
        <div className="helper">Nota (1 a 10)</div>
        <select
          className="select"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <label>
        <div className="helper">Comentário</div>
        <textarea
          className="textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="O que você achou do jogo?"
        ></textarea>
      </label>
      {error && <div className="error">{error}</div>}
      <div style={{ display: "flex", gap: 10 }}>
        <button className="btn" type="submit">
          Publicar review
        </button>
        <button
          className="btn secondary"
          type="button"
          onClick={() => {
            setAuthor("");
            setScore(8);
            setText("");
          }}
        >
          Limpar
        </button>
      </div>
      {sent && <div className="helper">✅ Avaliação publicada!</div>}
    </form>
  );
}
