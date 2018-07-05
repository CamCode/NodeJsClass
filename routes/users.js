var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');//importar librerias de CRUD

/* GET users listing. */
router.get('/:id', function (req, res, next) {//:id (url contiene un parametro)

  object.get('User', req.params.id, 1, null)
    .then(response => {
      res.json({
        status: true,
        content: response
        
      });
    })
    .catch(response => {
      res.json({
        status: false,
        content: response
      });
    });


});

module.exports = router;
