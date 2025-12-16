const express = require("express");
const app = express();

let uptime = 0;

app.get("/", (req, res) => {
  res.send(`
    <h2>RozCloud Aktif</h2>
    <p>Status: ONLINE</p>
    <p>Uptime: ${uptime} detik</p>
  `);
});

setInterval(() => {
  uptime++;
  console.log("Alive:", uptime);
}, 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on", PORT));
