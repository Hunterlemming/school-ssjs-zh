module.exports = {
    getRobots: callback => all('robots', callback),
    getSpaceships: callback => all('spaceships', callback),
    getRobotById: (id, callback) => byId('robots', id, callback),
    getSpaceshipById: (id, callback) => byId('spaceships', id, callback),
    getPilots:  callback => all('pilots', callback),
}

function all(collection, callback) {
    setImmediate(() => {
        if (data[collection]) {
            callback(null, data[collection]);
        } else {
            callback('Collection not found', null);
        }
    })
}

function byId(collection, id, callback) {
    setImmediate(() => {
        if (data[collection]) {
            const result = data[collection].find(el => +el.id === +id);
            if (result) {
              callback(null, result);
            } else {
               callback('ID not found', null);
            }
        } else {
            callback('Collection not found', null);
        }
    })
}

const data = {  robots : [
  {
    "id": 101,
    "name": "Cabe",
    "flight_hours": 4722
  },
  {
    "id": 102,
    "name": "Roberto",
    "flight_hours": 9361
  },
  {
    "id": 103,
    "name": "Gear",
    "flight_hours": 702
  },
  {
    "id": 104,
    "name": "Erctron",
    "flight_hours": 1330
  },
  {
    "id": 105,
    "name": "Unxroid",
    "flight_hours": 1400
  },
  {
    "id": 106,
    "name": "Qwerty",
    "flight_hours": 4249
  },
  {
    "id": 107,
    "name": "Tracker",
    "flight_hours": 3225
  },
  {
    "id": 108,
    "name": "Sparkle",
    "flight_hours": 6074
  },
  {
    "id": 109,
    "name": "Socket",
    "flight_hours": 466
  },
  {
    "id": 110,
    "name": "Osn",
    "flight_hours": 1922
  },
  {
    "id": 111,
    "name": "Edator",
    "flight_hours": 4764
  },
  {
    "id": 112,
    "name": "Scyther",
    "flight_hours": 3697
  },
  {
    "id": 113,
    "name": "Scrappy",
    "flight_hours": 7489
  },
  {
    "id": 114,
    "name": "Twobit",
    "flight_hours": 7765
  },
  {
    "id": 115,
    "name": "Ifx",
    "flight_hours": 2400
  },
  {
    "id": 116,
    "name": "Ufrroid",
    "flight_hours": 5728
  },
  {
    "id": 117,
    "name": "Shrimp",
    "flight_hours": 8007
  },
  {
    "id": 118,
    "name": "Ratchet",
    "flight_hours": 8278
  },
  {
    "id": 119,
    "name": "Drillbit",
    "flight_hours": 3327
  },
  {
    "id": 120,
    "name": "Corius",
    "flight_hours": 6557
  },
  {
    "id": 121,
    "name": "Ihx",
    "flight_hours": 8725
  },
  {
    "id": 122,
    "name": "Inoid",
    "flight_hours": 4912
  },
  {
    "id": 123,
    "name": "Bit",
    "flight_hours": 6439
  },
  {
    "id": 124,
    "name": "Plier",
    "flight_hours": 9955
  },
  {
    "id": 125,
    "name": "Silver",
    "flight_hours": 9188
  },
  {
    "id": 126,
    "name": "Umeoid",
    "flight_hours": 9229
  },
  {
    "id": 127,
    "name": "Ighator",
    "flight_hours": 7375
  },
  {
    "id": 128,
    "name": "Brainstorm",
    "flight_hours": 1234
  },
  {
    "id": 129,
    "name": "Tracker",
    "flight_hours": 370
  },
  {
    "id": 130,
    "name": "Tech",
    "flight_hours": 6139
  },
  {
    "id": 131,
    "name": "Gearz",
    "flight_hours": 5802
  },
  {
    "id": 132,
    "name": "Owo",
    "flight_hours": 978
  },
  {
    "id": 133,
    "name": "Obakator",
    "flight_hours": 8290
  }
],
spaceships : [
  {
    "id": 1,
    "name": "Patriot"
  },
  {
    "id": 2,
    "name": "Antagonist"
  },
  {
    "id": 3,
    "name": "Baldrin"
  },
  {
    "id": 4,
    "name": "Cataphract"
  },
  {
    "id": 5,
    "name": "Valor"
  },
  {
    "id": 6,
    "name": "Constantine"
  },
  {
    "id": 7,
    "name": "Invincible"
  },
  {
    "id": 8,
    "name": "Dragontooth"
  },
  {
    "id": 9,
    "name": "Renault"
  },
  {
    "id": 10,
    "name": "Rebellion"
  },
  {
    "id": 11,
    "name": "Nightfall"
  },
  {
    "id": 12,
    "name": "Detection"
  },
  {
    "id": 13,
    "name": "Anarchy"
  },
  {
    "id": 14,
    "name": "Ninja"
  }
],
pilots: [
  {
    "robot": 101,
    "spaceship": 10
  },
  {
    "robot": 101,
    "spaceship": 14
  },
  {
    "robot": 101,
    "spaceship": 11
  },
  {
    "robot": 102,
    "spaceship": 8
  },
  {
    "robot": 102,
    "spaceship": 10
  },
  {
    "robot": 103,
    "spaceship": 2
  },
  {
    "robot": 103,
    "spaceship": 11
  },
  {
    "robot": 103,
    "spaceship": 12
  },
  {
    "robot": 103,
    "spaceship": 9
  },
  {
    "robot": 104,
    "spaceship": 12
  },
  {
    "robot": 104,
    "spaceship": 1
  },
  {
    "robot": 105,
    "spaceship": 2
  },
  {
    "robot": 105,
    "spaceship": 1
  },
  {
    "robot": 105,
    "spaceship": 11
  },
  {
    "robot": 105,
    "spaceship": 12
  },
  {
    "robot": 106,
    "spaceship": 10
  },
  {
    "robot": 107,
    "spaceship": 4
  },
  {
    "robot": 107,
    "spaceship": 11
  },
  {
    "robot": 107,
    "spaceship": 10
  },
  {
    "robot": 108,
    "spaceship": 12
  },
  {
    "robot": 108,
    "spaceship": 2
  },
  {
    "robot": 108,
    "spaceship": 1
  },
  {
    "robot": 108,
    "spaceship": 6
  },
  {
    "robot": 109,
    "spaceship": 4
  },
  {
    "robot": 109,
    "spaceship": 12
  },
  {
    "robot": 109,
    "spaceship": 2
  },
  {
    "robot": 109,
    "spaceship": 11
  },
  {
    "robot": 109,
    "spaceship": 3
  },
  {
    "robot": 111,
    "spaceship": 1
  },
  {
    "robot": 111,
    "spaceship": 10
  },
  {
    "robot": 111,
    "spaceship": 9
  },
  {
    "robot": 111,
    "spaceship": 6
  },
  {
    "robot": 112,
    "spaceship": 13
  },
  {
    "robot": 113,
    "spaceship": 7
  },
  {
    "robot": 115,
    "spaceship": 9
  },
  {
    "robot": 115,
    "spaceship": 14
  },
  {
    "robot": 116,
    "spaceship": 10
  },
  {
    "robot": 116,
    "spaceship": 13
  },
  {
    "robot": 116,
    "spaceship": 11
  },
  {
    "robot": 117,
    "spaceship": 5
  },
  {
    "robot": 117,
    "spaceship": 10
  },
  {
    "robot": 117,
    "spaceship": 8
  },
  {
    "robot": 118,
    "spaceship": 13
  },
  {
    "robot": 118,
    "spaceship": 2
  },
  {
    "robot": 120,
    "spaceship": 4
  },
  {
    "robot": 121,
    "spaceship": 6
  },
  {
    "robot": 122,
    "spaceship": 1
  },
  {
    "robot": 122,
    "spaceship": 14
  },
  {
    "robot": 123,
    "spaceship": 5
  },
  {
    "robot": 123,
    "spaceship": 8
  },
  {
    "robot": 123,
    "spaceship": 10
  },
  {
    "robot": 125,
    "spaceship": 6
  },
  {
    "robot": 126,
    "spaceship": 11
  },
  {
    "robot": 126,
    "spaceship": 12
  },
  {
    "robot": 128,
    "spaceship": 8
  },
  {
    "robot": 130,
    "spaceship": 1
  },
  {
    "robot": 130,
    "spaceship": 11
  },
  {
    "robot": 130,
    "spaceship": 13
  },
  {
    "robot": 130,
    "spaceship": 3
  },
  {
    "robot": 131,
    "spaceship": 1
  },
  {
    "robot": 131,
    "spaceship": 11
  },
  {
    "robot": 132,
    "spaceship": 11
  },
  {
    "robot": 132,
    "spaceship": 7
  },
  {
    "robot": 133,
    "spaceship": 14
  }
]
};
