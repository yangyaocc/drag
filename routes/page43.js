var express = require('express');
var request = require('request');
var router = express.Router();

	/* GET users listing. */
router.get('/', function(req, res, next) {
	  
   request("http://www.daweiyuan.cn/br-isoc/drag/getcolumns?isocId=1",function(error, response, body){
            if (!error && response.statusCode == 200) {
            	var resjson=JSON.parse(body);
	            res.render('page43',
				  	{
		
					}
				);

         	}

	  });
	 
});

module.exports = router;
