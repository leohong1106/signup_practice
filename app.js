const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
var member_router=require('./routes/member_router');
app.use('/member', member_router);
app.listen(3000, function() {
    console.log("3000 server is ready");
})