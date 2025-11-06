export function letterSvgDataUrl(letter: string) {
  const L = (letter || "A").toUpperCase().charCodeAt(0) - 65;
  const colors = [
    ["#fbbf24", "#f59e0b"], // A
    ["#fde68a", "#fbbf24"], // B
    ["#93c5fd", "#60a5fa"], // C
    ["#86efac", "#34d399"], // D
    ["#fca5a5", "#f87171"], // E
    ["#ddd6fe", "#c4b5fd"], // F
    ["#bae6fd", "#7dd3fc"], // G
    ["#fecaca", "#fca5a5"], // H
    ["#fde68a", "#fbbf24"], // I
    ["#a5b4fc", "#818cf8"], // J
    ["#fcd34d", "#f59e0b"], // K
    ["#bfdbfe", "#93c5fd"], // L
    ["#fecaca", "#fda4af"], // M
    ["#bbf7d0", "#86efac"], // N
    ["#e0f2fe", "#bae6fd"], // O
    ["#dcfce7", "#bbf7d0"], // P
    ["#fee2e2", "#fecaca"], // Q
    ["#fef9c3", "#fde68a"], // R
    ["#e2e8f0", "#cbd5e1"], // S
    ["#d1fae5", "#a7f3d0"], // T
    ["#fee2e2", "#fecaca"], // U
    ["#dbeafe", "#bfdbfe"], // V
    ["#ede9fe", "#ddd6fe"], // W
    ["#cffafe", "#a5f3fc"], // X
    ["#ffe4e6", "#fecdd3"], // Y
    ["#f1f5f9", "#e2e8f0"], // Z
  ];
  const idx = Math.max(0, Math.min(25, isFinite(L) ? L : 0));
  const [c1, c2] = colors[idx];
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
  <defs>
    <linearGradient id='bg' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='${c1}'/>
      <stop offset='100%' stop-color='${c2}'/>
    </linearGradient>
  </defs>
  <rect width='800' height='600' fill='url(#bg)'/>
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='320' font-weight='700' fill='#0f172a' opacity='0.9'>${letter.toUpperCase()}</text>
  <text x='50%' y='85%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='28' fill='#0f172a' opacity='0.75'>Gesture ${letter.toUpperCase()}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
