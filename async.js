fetch("url")
	.then(resp => resp.json())
	.then(console.log)

// ASYNC Version below

async function fetchUsers() {
	let resp = await fetch("url")
	let data = await resp.json();
	console.log(data);
}

fetchUsers();

// Example 2

const urls = [
	'https://jsonplaceholder.typicode.com/users',
  	'https://jsonplaceholder.typicode.com/posts',
  	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url =>
			fetch(url).then(response => response.json())
		))
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch (err) {
		console.log('OOOPS', err);
	}
}

getData();

////// Exercises

// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchTutorial() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users/");
  let data = await users.json();
  console.log(data);
}

fetchTutorial();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url){
      const response = await fetch(url);
      return response.json();
    }), 
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. 
// Now, use the given array containing an invalid url, so you console.log  
//your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
      const [users, posts, albums] = await Promise.all(
        urls.map(async function (url){
          const response = await fetch(url);
          return response.json();
        }), 
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
  } catch (err) {
    console.log("Error Will Robinson", err);
  }
};
