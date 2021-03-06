var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');

/* GET users listing. */
router.get('/:id', (req, res, next) => {
  object.get('User', req.params.id, 1, null)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.post('/save', (req, res, next) => {
  object.save([
    'nombres',
    'apellidos',
    'email',
    'password',
    { birthday: 'Date' }
  ], req.body, 'User')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.put('/save/:id', (req, res, next) => {
  req.body.id = req.params.id;
  object.update([
    'nombres',
    'apellidos',
    'email',
    'password',
    { birthday: 'Date' }
  ], req.body, 'User')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.delete('/delete/:id', (req, res, next) => {
  object.delete('User', req.params.id)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

module.exports = router;