const express = require('express');
const router = express.Router();

router.post('/register', function(req, res, next){
    console.log("잘도착");
    res.json({"msg":"ok"});
});

module.exports = router;