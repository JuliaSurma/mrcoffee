const data = require("../app/data.js");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

app.get("/", function (req,res) {
    res.send("Welcome to our schedule website");
});

app.get("/users/:id", function (req,res) {
const id = Number(req.params.id);
res.send(data.users[id]);
})

app.get('/users', (req, res) => {
    res.send(data.users)
})

// app.get('/users/:id', function (req,res) {
//     const user = req.params.user;
//     res.send("users", {user: data.users[0] });
// });

app.get('/schedules', (req, res) => {
 
    res.send(data.schedules);
    });

// app.get("users/:id/schedules", (req,res) => {
// const schedule = Number(req.params.schedule);
// res.send(data.schedules[schedule]);
// //             // res.send("schedules", {schedule: data.schedules[id]});
// //             // res.send("schedules", {schedule: data.schedules[user_id]});
// //             // res.send("schedules", {schedule: data.schedules[user_id]});
// //             //  res.send("schedules", {schedule: data.schedules[0]});
// //              res.send("schedules", {schedule: data.users.schedules[0]});

//  });

// app.get("/schedules/:schedule", function (req,res) {
//   const schedule = req.params.schedule;
//   res.send({schedule: data.schedules[schedule]});
// });
app.get('/users/:id/:schedules', (req, res) => {
const id = Number(req.params.id);
const schedules = data.schedules;
const userSchedule = [];
schedules.forEach((item) => { 
if (item.user_id === id) {
 userSchedule.push(item);
  }
 });
  res.send(userSchedule);
 });

app.listen(3000);

var urlencodedParser = bodyParser.urlencoded({ extended: false }) // application/x-www-form-urlencoded

app.use(express.static('public'));

// const {createHash} = require('crypto');

// // lines: array of strings
// function computeSHA256(lines) {
//   const hash = createHash('sha256');
//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i].trim(); // remove leading/trailing whitespace
//     if (line === '') continue; // skip empty lines
//     hash.write(line); // write a single line to the buffer
//   }

//   return hash.digest('base64'); // returns hash as string
// }

const crypto = require('crypto');

app.post('/users', urlencodedParser, function (req, res) {
const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
response = { 
firstname:req.body.firstname,
lastname:req.body.lastname,
email: req.body.email,
password: hash,
};
console.log(response);
res.end(JSON.stringify(response));
})

app.post('/schedules', urlencodedParser, function (req, res) {
response = {
user_id: req.body.user_id,
day: req.body.day,
start_at: req.body.start_at,
end_at: req.body.end_at,
};
console.log(response);
res.end(JSON.stringify(response));
})




// // create application/json parser
// var jsonParser = bodyParser.json()
 
// // // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// // // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
// res.send('welcome, ' + req.body.username)
//  })
 
// // // POST  gets JSON bodies
// app.post('/schedules', jsonParser, function (req, res) {
//  // create newschedules in req.body
//  })



// alert(ary[0]);
// const module.exports.users  = [];
// const firstname = data.users[0];
// app.get('/users', (req, res) => {
//  res.send(data.users);
// });

 


// app.use(require('body-parser').urlencoded({ extended: false}));
// app.post('/users', (req,res) => { 
//     res.json({message: req.body})
// })

    // const articleId = req.params.articleId;
    // const post = posts[articleId];
    // if(post === undefined) {
    //     res.status(404).send(`Incorrect article id: ${articleId}`);
    //     return;
    // }
    // res.render('singlePost', post)
    // res.json({article: posts[articleId]})

