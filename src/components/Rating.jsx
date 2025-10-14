export default function Rating({ value = 0 }) {
  const outOf10 = Math.round(value * 10) / 10;
  // CONVERTE NOTA DE 0-10 PARA 0-5 EM PASSOS DE 0.5 (PARA MEIA ESTRELA)
  const outOf5 = Math.round((value / 2) * 2) / 2;
  // GERA AS ESTRELAS DE ACORDO COM A NOTA
  const stars = [1, 2, 3, 4, 5].map((i) => {
    // PARA CADA ESTRELA, VERIFICA QUANTO FALTA PARA COMPLETAR
    const diff = outOf5 - (i - 1);
    let fill = 0;
    if (diff >= 1) fill = 1;
    else if (diff >= 0.5) fill = 0.5;
    return <Star key={i} fill={fill} />;
  });

  return (
    <div className="rating" aria-label={`Nota média ${outOf10} de 10`}>
      {stars}
      <span style={{ opacity: 0.8 }}>{outOf10.toFixed(1)}/10</span>
    </div>
  );
}

function Star({ fill }) {
  // DESENHA ESTRELA CHEIA, MEIA OU VAZIA
  if (fill === 1) {
    return (
      <svg
        className="star"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.9L18.18 22 12 18.77 5.82 22 7 14.17l-5-4.9 6.91-1.01L12 2z" />
      </svg>
    );
  }
  if (fill === 0.5) {
    return (
      <svg className="star" width="18" height="18" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor"></stop>
            <stop offset="50%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.9L18.18 22 12 18.77 5.82 22 7 14.17l-5-4.9 6.91-1.01L12 2z"
          fill="url(#half)"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }
  return (
    <svg
      className="star"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.9L18.18 22 12 18.77 5.82 22 7 14.17l-5-4.9 6.91-1.01L12 2z" />
    </svg>
  );
}
