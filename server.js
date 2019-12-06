var express = require('express');
var app = express();  

var mongoose = require('mongoose');
var db = mongoose.connection;
// var MusicReviewSite = require('./data');
var UsersData = require('./usersdata');
var SongsData = require('./songsdata');
var ReviewsData = require('./reviewsdata');
var bodyParser = require('body-parser');

app.use('/', express.static('static'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
mongoose.connect('mongodb://localhost:27017/MongoDBForProject')

// Function to add new user
app.post('/adduser', function (req, res) {
   var addUser = new UsersData();
   
   addUser.userid = req.body.userid;
   addUser.firstname = req.body.firstname;
   addUser.lastname = req.body.lastname;
   addUser.email = req.body.email;
   addUser.password = req.body.password;
   addUser.status = req.body.status;
   addUser.usertype = req.body.usertype;
   addUser.playlists = req.body.playlists;

   addUser.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send('User added successfully!')
   })
});

// Function to add new song
app.post('/addsong', function (req, res) {
   var addSong = new SongsData();
   
   addSong.songid = req.body.songid;
   addSong.songtitle = req.body.songtitle;
   addSong.artist = req.body.artist;
   addSong.album = req.body.album;
   addSong.year = req.body.year;
   addSong.comment = req.body.comment;
   addSong.genre = req.body.genre;
   addSong.submittedon = req.body.submittedon;
   addSong.submittedby = req.body.submittedby;
   addSong.totalratings = req.body.totalratings;
   addSong.averagerating = req.body.averagerating;

   addSong.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send('Song added successfully!')
   })
});

// Function to add new review
app.post('/addreview', function (req, res) {
   var addReview = new ReviewsData();
   
   addReview.reviewid = req.body.reviewid;
   addReview.songid = req.body.songid;
   addReview.submittedon = req.body.submittedon;
   addReview.submitedby = req.body.submitedby;
   addReview.reviewdesc = req.body.reviewdesc;
   addReview.rating = req.body.rating;
   addReview.visibility = req.body.visibility;

   addReview.save(function (err) {
       if (err) {
           res.send(err);
       }
       res.send('Review added successfully!')
   })
});

var port = 8081;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});