var express=require("express");
var router=express.Router({mergeParms: true});

var User=require('../models/user');
var Review=require('../models/review');
var Song=require('../models/song');
var RequestSong=require('../models/requestSong');
var Playlist=require('../models/playlist');

router.get("/",function(req,res){
    res.send("hi there it really works!");
})
module.exports=router;