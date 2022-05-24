import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "My first Node.js project using Docker!" });
});

app.listen(8080, () => {
  console.log("server is running :)");
});
