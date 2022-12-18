const fs = require("fs").promises;

export default async function Handler(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.json({ error: true });
    }

    const path = "./data/" + id + ".json";

    await fs.access(path, fs.F_OK);
    // If the file does not exist, the cath error function stuff will run

    const data = await fs.readFile(path);
    res.json({ error: false, questions: JSON.parse(data) });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
}
