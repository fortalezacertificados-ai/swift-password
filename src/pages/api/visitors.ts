import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "visitors.json");

export default function handler(req, res) {
  let data = { date: "", count: 0 };

  // lê arquivo se existir
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileData);
  }

  const today = new Date().toISOString().split("T")[0];

  if (data.date !== today) {
    data.date = today;
    data.count = 1;
  } else {
    data.count += 1;
  }

  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(200).json({ count: data.count });
}
