module.exports.listPoliticians = function( req, res){
	res.render("index", {title: 'EXpress'})


};

module.exports.politicInfo = function( req, res){
	res.render("politicInfo", {title: 'Vean la belleza esta...'})


};

module.exports.timeline = function( req, res){
	res.render("timelines", {title: 'Campaigns, Bills, investigations...'})


};

module.exports.newFact = function( req, res){
	res.render("index", {title: 'EXpress'})


};