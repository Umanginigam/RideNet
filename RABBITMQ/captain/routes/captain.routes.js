const express= require('express')
const router= express.Router();
const captainController=require('../controllers/captain.contoller');
const authmiddleware=require('../middleware/authmiddleware');


router.post('/register',captainController.register);
router.post('/login',captainController.login);
router.get('/logout',captainController.logout);
router.get('/profile',authmiddleware.captainAuth,captainController.profile);
router.patch('/toggle-availability', authmiddleware.captainAuth, captainController.toggleAvailability);
router.get('/new-ride',authmiddleware.captainAuth, captainController.waitForNewRide)


module.exports=router;