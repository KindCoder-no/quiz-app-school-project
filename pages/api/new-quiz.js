const fs = require("fs");

export default async function Hander(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    var currentTimestamp = Date.now();

    try {
      fs.writeFile(
        `./data/${currentTimestamp}.json`,
        JSON.stringify(req.body.questions),
        {
          encoding: "utf8",
          flag: "w",
          mode: 0o666
        },
        (err) => {}
      );

      res.json({ error: false, fileName: currentTimestamp });
    } catch (err) {
      console.log(err);
      res.json({ error: true });
    }
  }
}
