const fs = require("fs");

export default async function Handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.json({ error: true });
  }

  var exists;

  const path = "./data/" + id + ".json";
  const path2 = "../../data/" + id + ".json";
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      exists = false;
      res.json({ error: true, exists });
    } else {
      console.log("Exist");
      fs.readFile(path, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        exists = true;
        console.log(JSON.parse(data));
        res.json({ monke: "Monke", exists, questions: JSON.parse(data) });
      });
    }

    //file exists
  });

  console.log(exists);
}
