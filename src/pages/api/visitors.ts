import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'visitorData.json');

interface VisitorData {
  date: string;
  count: number;
}

// Função para ler arquivo JSON
const readData = (): VisitorData => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return { date: '', count: 0 };
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return { date: '', count: 0 };
  }
};

// Função para salvar arquivo JSON
const saveData = (data: VisitorData) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
};

export default function handler(req: VercelRequest, res: VercelResponse) {
  const today = new Date().toISOString().split('T')[0];
  const data = readData();

  if (data.date === today) {
    data.count += 1;
  } else {
    data.date = today;
    data.count = 1;
  }

  saveData(data);

  res.status(200).json({ count: data.count });
}
