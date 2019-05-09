var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.status(200).json({ message:'Connected!111111111'});

});

module.exports = router;