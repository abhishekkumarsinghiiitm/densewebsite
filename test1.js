const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html>
  <head>
  <title></title>
  <link rel="stylesheet" href="text1.css">
  <style>
  body{
  background-image:url('2.jpg');
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size:cover;
  }
  ul{
  list-style-type: none;
  margin: 0;
  padding: 0px 0px 0px 2px;
  position:fixed;
  width:100%;
  height:5%;
  overflow:hidden;
  background-color:rgba(189,195,199,1);
  
  }
  li{
  float:left;
  }
  li a{
  display: block;
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  }
  li a:hover{
  background-color: transparent;
  color: green;
  }
  div.form{
  
  padding:5px;
  margin:2px;
  text-align:center;
  }
  div.center{
  margin:auto;
  width:25%;
  border:3px solid whhite;
  padding:10px;
  background-color:gray;
  }
  div.c1{
  text-align:center;
  }
  </style>
  </head>
  
  
  <body>
  <div id="home" class="c1">
  <div ><ul>
  <li><a href="#home"><b>HOME</b></a></li>
  <li><a href="#inspect"><b>INSPECT</b></a></li>
  <li><a href="#about"><b>ABOUT</b></a></li>
  <li style="float:right;"><a href="#contact"><b>CONTACT</b></a></li>
  <li style="float:right;"><a href="#signup"><b>SIGN-UP</b></a></li>
  <li style="float:right;"><a href="#login"><b>LOGIN</b></a></li>
  </ul></div><br>
  <h1 style="font-size:50px; color:white;" >WELCOME TO THE WORLD OF TRICS</h1>
  <p style="font-size:40px; color:white;">Marketing is the process of getting potential clients or customers interested in your
  product and services. Same thing is apply on digital marketing but the problem arise
  when the customer/audience did not reach to your online platform i.e. your websites.
  so there are some techniques which helps to do this and by using these techniques we
  increase our SERP ranking in the search engine. Since there was so many new startups which doesn’t reach their idea to the audience which they deserve so Dicorn Digital
  llp help these startups by digital marketing tools and practices. these are SEO(search
  engine optimization), internal links, keyword research, social media marketing, search
  engine marketing. Dicorn Digital llp make their content SEO-friendly, do a keyword
  research on their content, use interlink in the content so that their SERP ranking will
  increase in the search engine and these startups grow and reach to the maximum people.</p>
  </div>
  <div id="inspect" style="background-color:rgba(189,195,199,0.7);" class="c1">
  <div><br></div>
  <h1 style="font-size:50px;">INSPECT SEO</h1>
  <p style="font-size:40px;">Marketing is the process of getting potential clients or customers interested in your
  product and services. Same thing is apply on digital marketing but the problem arise
  when the customer/audience did not reach to your online platform i.e. your websites.
  so there are some techniques which helps to do this and by using these techniques we
  increase our SERP ranking in the search engine. Since there was so many new startups which doesn’t reach their idea to the audience which they deserve so Dicorn Digital
  llp help these startups by digital marketing tools and practices. these are SEO(search
  engine optimization), internal links, keyword research, social media marketing, search
  engine marketing. Dicorn Digital llp make their content SEO-friendly, do a keyword
  research on their content, use interlink in the content so that their SERP ranking will
  increase in the search engine and these startups grow and reach to the maximum people.</p>
  </div>
  <div id="about" class="c1" style="color:white;">
  <div><br></div>
  <h1 style="font-size:50px;">ABOUT</h1>
  <p id="01" style="font-size:40px; color:white;">The main objective was to attain the highest possible ranking of our content page in the
  search engine. That means to increase SERP ranking. So to attain this I firstly learn
  how the SEO works because SEO play the most important role to achieve the objective.
  I learn how to make content SEO-Friendly by modifying some formatting, images by
  changing size and resolution, also by adding internals.<br>
  Keyword research is also play a big role to achieve the objective . So i also learn
  how to research keyword which cover most of the audience. I use some websites for
  this after learning keyword research I apply these learning on the content.
  My most challenging part of my internship is when i make my first content SEOfriendly because at that time all the stuff is new for me but with help of my seniors in
  company i complete it and learn about digital marketing and company very well.
  </p>
  </div>
  <div id="contact" class="c1" style="background-color:rgba(189,195,199,0.7);">
  <div><br></div>
  <h1 style="font-size:50px;">Hurry-up! Contact Us</h1>
  <p style="font-size:40px;"> <b>E-mail:</b>Abhi4321c2gmail.com</p>
  <p style="font-size:40px;"> <b>phone:</b>7058458596</p><br><br><br>
  </div>
  
  <div class="form" id="login" style="color:white;">
  <div><br></div>
  <div class="center">
  <h1>LOGIN</h1>
  <form name="lgn" action="123.php" onsubmit="return validate()" method="get">
  <label for="email">E-mail</label><br>
  <input type="text" id="email" name="email" placeholder="E-MAIL"><br>
  <label for="password">Password</label><br>
  <input type="password" id="password" name="password" placeholder="PASSWORD"><br><br>
  <input type="submit" value="Login" class="button">
  <button type="button" onclick="#signup" class="button">Sign-up</button>
  </form></div>
  </div>
  
  <div class="form" id="signup" style="color:white;">
  <div><br></div>
  <div class="center">
  <h1>SIGN-UP</h1>
  <form name="sgn" action="123.php" onsubmit="return validates()" method="post">
  <label for="name">Name</label><br>
  <input type="text" id="name" name="name" placeholder="NAME"><br>
  <label for="email">E-mail</label><br>
  <input type="text" id="email" name="email" placeholder="E-MAIL"><br>
  <label for="pnumber">Phone Number</label><br>
  <input type="number" id="pnumber" name="pnumber" placeholder="PHONE NUMBER"><br>
  <label for="password">Password</label><br>
  <input type="password" id="password" name="password" placeholder="PASSWORD"><br><br>
  <input type="submit" value="Sign-up" class="button">
  </form></div>
  </div>
  <script src="test1.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
