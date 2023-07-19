const players = [
  {
    name: "Robert",
    lastName: "Lewandowski",
    position: "napastnik",
    age: {
      year: 18,
      days: 126,
    },
    dateOfBirth: {
      year: 1984,
      month: 2,
      day: 13,
    },
    rating: {
      defending: 4.38,
      crossing: 9.92,
      playmaking: 7.12,
      passing: 8.12,
      efficiency: 6.54,
      freekick: 8.87,
    },
  },

  {
    name: "Grzegorz",
    lastName: "Krychowiak",
    position: "pomocnik",
    age: {
      year: 22,
      days: 12,
    },
    dateOfBirth: {
      year: 1988,
      month: 4,
      day: 11,
    },
    rating: {
      defending: 6.22,
      crossing: 8.11,
      playmaking: 5.18,
      passing: 6.11,
      efficiency: 7.15,
      freekick: 3.12,
    },
  },

  {
    name: "Wojciech",
    lastName: "Szczęsny",
    position: "bramkarz",
    age: {
      year: 26,
      days: 33,
    },
    dateOfBirth: {
      year: 1986,
      month: 8,
      day: 22,
    },
    rating: {
      defending: 9.99,
      crossing: 3.12,
      playmaking: 1.22,
      passing: 4.32,
      efficiency: 3.34,
      freekick: 1.21,
    },
  },

  {
    name: "Arkadiusz",
    lastName: "Milik",
    position: "napastnik",
    age: {
      year: 24,
      days: 11,
    },
    dateOfBirth: {
      year: 1982,
      month: 11,
      day: 9,
    },
    rating: {
      defending: 4.23,
      crossing: 7.54,
      playmaking: 5.89,
      passing: 6.54,
      efficiency: 2.45,
      freekick: 4.44,
    },
  },

  {
    name: "Jan",
    lastName: "Bednarek",
    position: "obrońca",
    age: {
      year: 22,
      days: 212,
    },
    dateOfBirth: {
      year: 1985,
      month: 11,
      day: 22,
    },
    rating: {
      defending: 9.43,
      crossing: 8.55,
      playmaking: 3.32,
      passing: 4.78,
      efficiency: 1.23,
      freekick: 6.43,
    },
  },

  {
    name: "Jakub",
    lastName: "Błaszczykowski",
    position: "pomocnik",
    age: {
      year: 22,
      days: 234,
    },
    dateOfBirth: {
      year: 1982,
      month: 5,
      day: 98,
    },
    rating: {
      defending: 6.87,
      crossing: 5.45,
      playmaking: 4.57,
      passing: 6.29,
      efficiency: 6.82,
      freekick: 7.87,
    },
  },
];

// for (const player of players) {
//   console.log(player.name);
// }

// for (const player of players) {
//   console.log(player.lastName);
// }

// for (const player of players) {
//   console.log(player.position);
// }

const names = players.map((player) => player.name);

const article = document.querySelector(".article");
const htmlString = `
<ul>
  <li>zawodnik test3  ${names}</li>
</ul>
`;

article.innerHTML += htmlString;
