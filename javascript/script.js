var database = [
  {
    username: "riley",
    password: "supersecret"
  },
  {
    username: "john",
    password: "thisIsAwesome"
  },
  {
    username: "bob",
    password: "Im$oCool!"
  },
  {
    username: "sam",
    password: "WrongPassword"
  }
];

var newsfeed = [
  {
    username: "bob",
    timeline: "You rock dude!"
  },
  {
    username: "john",
    timeline: "JavaScript rules man!"
  },
  {
    username: "sam",
    timeline: "Don't be lame, learn JavaScript!"
  }
];

function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);