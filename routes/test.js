var express = require('express');
var request = require('request');
var router = express.Router();

	/* GET users listing. */
router.get('/', function(req, res, next) {
	  
   request("http://www.daweiyuan.cn/br-isoc/drag/getjson?isocId=1",function(error, response, body){
            if (!error && response.statusCode == 200) {

            	var resjson=JSON.parse(body);
            	 //console.log(resjson.data.topjson.width);

	            res.render('test',
				  	{
						"topjson":resjson.data.topjson,
						"bannerjson":resjson.data.bannerjson,
						"footjson":resjson.data.footjson,
						"navjson":resjson.data.navjson,
						"logojson":resjson.data.logojson,
						"contentjson":resjson.data.contentjson,
						"titlejson":resjson.data.titlejson,
						"commonjson":resjson.data.commonjson,
						"slidejson":resjson.data.slidejson
					}
				);

          }

	  });
	 
});

module.exports = router;
