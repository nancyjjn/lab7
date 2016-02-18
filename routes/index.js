var projects = require('../projects.json');

/*
 * GET home page.
 */
 
exports.view = function(req, res){
	var random = Math.random();
	console.log(random);
	if (random >= 0.0) {
		projects["grid"] = false;
		res.render('index', projects);
	}
	else {
		res.redirect('/grid');
	}
  
};

exports.viewGrid = function(req, res){
	projects["grid"] = true;
  	res.render('index', projects);
};