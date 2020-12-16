const express = require('express');
const router = express.Router();
const pilotDataService = require('../services/pilot-data.service');


function toPromise(fn, ...params) {
  return new Promise((res, reject) => {
    fn(...params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        res(data);
      }
    });
  });
}


router.route('/pilots').get((req, resp) => {
  const level = req.query.level;

  pilotDataService.getRobots((err, data) => {
    if (err) {
      resp.status(404).send();
      return;
    }
    let pilots = data;
    if (level) {
      pilots = data.filter(robot =>
        (level === 'junior' ? robot.flight_hours < 1000 :
          level === 'medior' ? robot.flight_hours >= 1000 && robot.flight_hours <= 4999 :
            level === 'senior' ? robot.flight_hours >= 5000 : false))
    }
    if (pilots) {
      resp.render('pilots', {pilots, level});
    } else {
      resp.status(404).send();
    }
  })
});

// 7.
router.route('/pilots/:id').get((req, resp) => {
  const id = req.params.id;
  const allPromise = [
    toPromise(pilotDataService.getRobotById, id),
    toPromise(pilotDataService.getSpaceships),
    toPromise(pilotDataService.getPilots)
  ];

  Promise.all(allPromise)
    .then(([robot, ships, pilots]) => {
      const filteredPilots = pilots.filter((p) => p.robot === robot.id)

      if (filteredPilots) {
        const spaceShips = ships.filter(ss => filteredPilots.indexOf(ss.id) > -1);

        if (spaceShips)
          resp.render('pilot', {robot, spaceShips});
        else
          resp.status(500).send();
      } else {
        resp.status(404).send();
      }
    })
    .catch((err) => resp.status(404).send())
});

// 8.
router.route('/pilot/:id').get((req, resp) => {
  const id = req.params.id;
  pilotDataService.getSpaceships((err, data) => {
    if (err) {
      resp.status(404).send();
      return;
    }
    if (data) {
        resp.send(data.filter((d) => d.robot === id))
    }
  })
});

module.exports = router;

