const fs = require("fs");

export default function Hander(req, res) {
  if (req.method == "POST") {
    console.log(req.body);

    let fileName = Date.now();

    fs.writeFile(
      "./data/" + fileName + ".json",
      JSON.stringify(req.body.questions),
      {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
      },
      (err) => {
        if (err) console.log(err);
      }
    );

    res.json({ fileName: fileName });
  }
}
