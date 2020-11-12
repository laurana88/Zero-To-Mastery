var database = [
  {
    username: "laura",
    password: "sadie0",
  },
  {
    username: "stormy",
    password: "sadie1",
  },
  {
    username: "spartacus",
    password: "sadie2",
  }
];

var newsFeed = [
  {
    username: "name",
    timeline: "update 1"
  },
  {
    username: "name2",
    timeline: "update 2"
  },
  {
    username: "name3",
    timeline: "update 3"
  }
];



function isUserValid(userNamePrompt, passwordPrompt) {
  for (var i=0; i < database.length; i++) {
    if(database[i].username === userNamePrompt &&
      database [i].password === passwordPrompt) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
      alert("sorry, wrong username.");
  }
}


var userNamePrompt = prompt("Enter Username");
var passwordPrompt = prompt("Enter Password");

signIn(userNamePrompt, passwordPrompt);
