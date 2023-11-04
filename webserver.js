let express = require("express");
let app = express();
const port = 8000;

var motoGP = [
    {
      circuits: "Losail",
      location: "Qatar",
      winner: {
        firstname: "Andrea",
        lastname: "Dovizioso",
        country: "Italy",
      },
    },
    {
      circuits: "Autodromo",
      location: "Argentine",
      winner: {
        firstname: "Cal",
        lastname: "Crutchlow",
        country: "UK",
      },
    },
    {
      circuits: "De Jerez",
      location: "Spain",
      winner: {
        firstname: "Valentino",
        lastname: "Rossi",
        country: "Italy",
      },
    },
    {
      circuits: "Mugello",
      location: "Italy",
      winner: {
        firstname: "Andrea",
        lastname: "Dovizioso",
        country: "Italy",
      },
    },
  ];

app.get('/', (req, res) => {
  res.json(motoGP);
});

app.get('/country', (req, res) => {
  const bycountry = {};
  for (let i = 0; i < motoGP.length; i++) {
      const race = motoGP[i];
      const country = race.winner.country;
      if (!bycountry[country]) {
          bycountry[country] = [];
      }
      bycountry[country].push(race);
  }
  res.json(bycountry);
});

app.get('/name', (req, res) => {
  const byname = {};
  for (let i = 0; i < motoGP.length; i++) {
      const race = motoGP[i];
      const name = `${race.winner.firstname} ${race.winner.lastname}`;
      if (!byname[name]) {
          byname[name] = [];
      }
      byname[name].push(race);
  }
  res.json(byname);
});

app.use((req, res) => {
  res.status(400).send("Bad Request");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});