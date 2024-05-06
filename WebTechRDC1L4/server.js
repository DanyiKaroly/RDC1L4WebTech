const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'index.html'));
});

// 404 hibakezelés
app.use((req, res, next) => {
  res.status(404).send("A keresett oldal nem található.");
});

// Általános hibakezelés
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Valami hiba történt a szerveren.');
});

app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen.`);
});
