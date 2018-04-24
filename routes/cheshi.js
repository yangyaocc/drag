var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cheshi',{
		"employees": [
		{ "firstName":"装饰中心" , "lastName":"Gates" },
		{ "firstName":"George" , "lastName":"Bush" },
		{ "firstName":"Thomas" , "lastName":"Carter" }
		]
	}
);
});

module.exports = router;
