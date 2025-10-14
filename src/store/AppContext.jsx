import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { games as baseGames } from "../data/games";

const AppContext = createContext();
const LS_KEY = "include-reviews-v1";

export function AppProvider({ children }) {
  // INICIALIZA OS REVIEWS DO LOCALSTORAGE OU PADRÃO
  const [query, setQuery] = useState("");
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(LS_KEY);
    return saved
      ? JSON.parse(saved)
      : {
          1: [
            {
              author: "Marina",
              score: 9,
              text: "Mapa incrível e chefes memoráveis!",
              createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
            },
            {
              author: "Leo",
              score: 8,
              text: "Desafiador, mas recompensador.",
              createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
            },
          ],
          3: [
            {
              author: "Júlia",
              score: 10,
              text: "Viciante. A narrativa evolui a cada tentativa.",
              createdAt: Date.now() - 1000 * 60 * 60 * 12,
            },
          ],
          6: [
            {
              author: "Mariana",
              score: 10,
              text: "Muito intenso, pra quem gosta de desafio, super recomendo.",
              createdAt: Date.now() - 1000 * 60 * 60 * 12,
            },
          ],
        };
  });

  // ATUALIZA O LOCALSTORAGE SEMPRE QUE OS REVIEWS MUDAM
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(reviews));
  }, [reviews]);

  // CALCULA MÉDIA E CONTAGEM DE REVIEWS PARA CADA JOGO
  // SÓ REFAZ QUANDO 'reviews' MUDA, EVITA REPROCESSAR TUDO
  const games = useMemo(() => {
    return baseGames.map((g) => {
      const revs = reviews[g.id] ?? [];
      const avg = revs.length
        ? revs.reduce((s, r) => s + Number(r.score), 0) / revs.length
        : 0;
      return { ...g, avgScore: avg, reviewCount: revs.length };
    });
  }, [reviews]);

  // FILTRA OS JOGOS PELO TEXTO DA BUSCA
  // FILTRO MEMOIZADO, SÓ REFAZ QUANDO 'games' OU 'query' MUDA
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;
    return games.filter((g) => g.title.toLowerCase().includes(q));
  }, [games, query]);

  // ADICIONA UM NOVO REVIEW NO JOGO
  // COPIA O ARRAY, ADICIONA NO INÍCIO E ATUALIZA O ESTADO
  const addReview = (gameId, review) => {
    setReviews((prev) => {
      const next = { ...prev };
      const arr = Array.isArray(next[gameId]) ? next[gameId].slice() : [];
      arr.unshift({ ...review, createdAt: Date.now() });
      next[gameId] = arr;
      return next;
    });
  };

  const value = { query, setQuery, games, filtered, reviews, addReview };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
