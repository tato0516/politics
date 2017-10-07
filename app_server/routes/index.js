var express 		= require('express');
var router 			= express.Router();



var ctrlOther		= require('../controllers/others');
var ctrlPolitics	= require('../controllers/politics');
var ctrlParty		= require('../controllers/party');



/* URLs to support or explain the organization or website */
router.get('/', ctrlOther.index);
router.get('/about', ctrlOther.about);

/* URLs related to politics as a person*/
router.get('/politics', 					ctrlPolitics.listPoliticians);
router.get('/politics/politic', 			ctrlPolitics.politicInfo);
router.get('/politics/timeline', 			ctrlPolitics.timeline);
router.get('/politics/politic/fact/new', 	ctrlPolitics.newFact);

/* URLs related to parties and politicians inside the parties*/
router.get('/party', 			ctrlParty.party);
router.get('/party/members', 	ctrlParty.partyMembers);

module.exports = router;
