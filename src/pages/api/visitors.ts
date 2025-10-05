// /api/visitors.js

let visitors = {};
let lastResetDate = "";

export default function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  // Reseta automaticamente quando virar o dia
  if (lastResetDate !== today) {
    visitors = {};
    lastResetDate = today;
  }

  // Incrementa o contador diário global
  visitors.count = (visitors.count || 0) + 1;

  res.status(200).json({ count: visitors.count });
}
