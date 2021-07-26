const data = require("../app/data.js");
const { users} = data; 
const { schedules } = data; 
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const router = express.Router();
 // listen requests
 app.listen(3000);
 var urlencodedParser = bodyParser.urlencoded({ extended: false }) // application/x-www-form-urlencoded


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// before - task 3a
// app.get("/", function (req,res) {
//     res.send("Welcome to our schedule website");
// });


app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
// app.set('views', 'source');
app.set('views', path.join(__dirname + '/views'));

app.get('/',  (req, res) => {
res.render("index",  { title: 'My Page', text: 'Welcome on schedule'});
    });

// before - 3a
// app.get("/users/:id", function (req,res) {
// const id = Number(req.params.id);
// res.send(data.users[id]);
// })

// get new user
app.get('/users/new', (req, res) => {
  res.render('NewUser', {title: 'Create new user', text: 'New User Form'});
 });

//get single user
app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    if (users[userId] === undefined) {
      res.status(404).render('error', { title: 'Error'});
    }
    res.render('singleUser', { title: 'userId', userId, user: users[userId] });
  });

// before  3a
// app.get('/users', (req, res) => {
//     res.send(data.users)
// })

//get all users
app.get('/users', (req, res) => {
 res.render('users', {title : "All users", text: 'Users List', users})
});

//before 3a
// app.get('/schedules', (req, res) => {
//     res.send(data.schedules);
//     });


// get new schedule
app.get('/schedules/new', (req, res) => {
  res.render('NewSchedule', {title: 'Create new schedule', text: 'New Schedule Form'});
 });


// get all schedules
app.get('/schedules', (req, res) => {
    res.render('schedules', { title: 'Schedules', text: 'Check all schedules', schedules });
        });

// get schedule per user
app.get('/users/:userId/schedules', (req, res) => {
  const userId = req.params.userId;
  const userSchedule = [];
  for (let i = 0; i < schedules.length; i++) {
    if (schedules[i].user_id === Number(userId)) {
      userSchedule.push(schedules[i]);
    }
  }
  res.render('singleSchedulesUser',  {title: 'ScheduleforspecificUser', text: 'Schedule User', users, userId, user: users[userId], schedules, userSchedule});
});

const crypto = require('crypto');
app.post('/users', urlencodedParser, function (req, res) {
  const userNew = req.body;
  // const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
  //  const userNew = { 
  // firstname: firstname.req.body, 
  // lastname: lastname.req.body,
  // email: email.req.body,
  // password: password.req.body,
  // };
  userNew.password = crypto.createHash('sha256').update(req.body.password).digest('base64');
  users.push(userNew);
  res.redirect('users');
});


//before - 3a task
// app.post('/users', urlencodedParser, function (req, res) {
// const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
// response = { 
// firstname:req.body.firstname,
// lastname:req.body.lastname,
// email: req.body.email,
// password: hash,
// };
// console.log(response);
// res.end(JSON.stringify(response));
// })

app.post('/schedules', urlencodedParser, function (req, res) {
  const NewSchedule = req.body;
// response = {
// user_id: req.body.user_id,
// day: req.body.day,
// start_at: req.body.start_at,
// end_at: req.body.end_at,
// };
schedules.push(NewSchedule)
res.redirect('schedules');
})
