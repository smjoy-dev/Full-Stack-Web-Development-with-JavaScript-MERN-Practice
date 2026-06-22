/* only js sudu website er ui change korte help kore 
but nodejs backend server e help kore - created from chrome v8 engine
try nodejsdocumentation.com  and npm.com for study
*/


/*
Python → Multi-thread support kore

Node.js → Single-thread + Async + Event Loop

Async er jonno Node.js wait na kore
multiple task handle korte pare.
*/

// _______________________________________________________
//Modules in Node.js
/*
module - organization of code, different file e code likhte help kore

const math = require('./math'); // math.js file theke code import kore
const result1 = math.add(5, 3);
const result2 = math.multiply(5, 3);


const { add, multiply } = require('./math'); 

const result1 = add(5, 3);
const result2 = multiply(5, 3);

console.log('Addition:', result1); // Output: Addition: 8
console.log('Multiplication:', result2); // Output: Multiplication: 15
*/


//_______________________________________________________
//npm diye kono package krte suru te npm init --y diye package.json file create korte hoy
// packege jemon: datejs or expressjs

/*
const dayjs = require('dayjs');
const now = dayjs();
console.log('Current Date and Time:', now.format('YYYY-MM-DD HH:mm:ss'));

//output command : node src/app.js  - karon 18 folder er vitore src+nodeModule tree ache

_______________________________________________________
//npm(node package module) diye other deviloper er code use krte pari


project korar somoy onek boro nodeModule folder create hoye jay,
tai github e push karar somoy nodeModule folder ta .gitignore file e add kore dite hoy, 
pore project clone korar somoy (npm install) command diye nodeModule folder ta abar create kore nite hoy,
karon package.json file e je package gulo use kora hoyeche tar list thake 


package.json file e :
name → Project/package name
version → Project version
dependencies → Installed packages list

and custom command er jonne scripts section thake,
jemon start command diye node app.js run kora jay ("start": "node app.js",)
amake case - "start": "node src/app.js", eta dea 
*/

//_______________________________________________________
//Url Module - Node.js er built-in module, URL parse korte help kore
//kono website e jodi search filter kori - link aste aste boro hoy specific data filter korte help kore

/*
const url = require('url');
const myUrl = 'https://localhost:3000/products?category=phone&price=20000';
//use this: https://ostad.app/dashboard/my-courses/69350ddfb8692f8bb9a057c9/recordings?play=69ef9aee5083ff7aeab120f6

const parsedUrl = url.parse(myUrl, true); // true dile query parameters ke object akare parse kore
console.log('Host:', parsedUrl.host);
// Output: Host: localhost:3000

console.log('Pathname:', parsedUrl.pathname);
//link er specific part ke pathname bole, jemon /products
// Output: Pathname: /products

console.log('Query Parameters:', parsedUrl.query);
// Output: Query Parameters: { category: 'phone', price: '20000' }
// ? er porer part ke query bole, jemon category=phone&price=20000
*/


 //_______________________________________________________
//HTTP Module - Node.js er built-in module, HTTP web server create korte help kore
//http er update version er jonno expressjs use kora hoy, karon expressjs diye beshi easy and fast server create kora jay

/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World! This is a simple Node.js server.');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// default localhost bad diye, amra server ke specific url/port e run korte pari

-----------------------------------------------------
localhost → Nijer computer er server address
PORT → Server access korar entry point
server.listen() → Server start kore request accept kore

Development:
http://localhost:3000
(localhost = address, 3000 = port)

Production:
localhost er bodole real domain/IP use hoy
Example: https://example.com
--------------------------------------------------------
*/


//_______________________________________________________

/*
// Node.js er built-in HTTP module import kora
const http = require('http');


// HTTP server create kora
// req = client/browser theke asa request
// res = server theke pathano response
const server = http.createServer((req, res) => {

    // jodi user home route e jay
    // Example: localhost:3000/
    if (req.url === '/') {

        // Status code 200 = request successful
        // Browser ke bolchi response HTML format
        res.writeHead(200, { 
            'Content-Type': 'text/html' 
        });


        // Browser e HTML content send kora
        res.write('<h1>Welcome to the Home Page</h1>');


        // Response finish kora
        res.end();
    }


    // about route
    // Example: localhost:3000/about
    else if (req.url === '/about') {
        res.writeHead(200, { 
            'Content-Type': 'text/html' 
        });
        res.write('<h1>About Us</h1>');
        res.end();
    }


    // kono route match na korle
    else {


        // 404 = page not found
        res.writeHead(404, { 
            'Content-Type': 'text/html' 
        });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});


// server port define kora
const PORT = 3000;


// server start kora
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


Output: Server running at http://localhost:3000

*/