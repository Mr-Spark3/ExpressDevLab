var express = require('express');
var router = express.Router();
const skillsCtrl = require("../controllers/skills");




// GET -> ALL /skills
router.get('/', skillsCtrl.index);

// GET -> skills/new
router.get('/new', skillsCtrl.new);

// GET -> /skills/:id
router.get('/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);




module.exports = router;
