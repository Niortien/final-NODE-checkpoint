//console.log("HELLO WORLD");
var http = require("http");
var fs=require("fs")
var generator = require('generate-password');



// TACHE 1
console.log("HELLO WORLD"); 



// TACHE 2
const serveur1= http.createServer((requete,reponse)=>{
    
  reponse.setHeader("content-type", "text/plain"); 
  reponse.write( '<h1>Hello Node!!!!</h1>\n')
  reponse.end()
   
   
})
serveur1.listen(3000,"localhost",()=>{
   console.log("le serveur 2 est prêt et attend vos instructions ");
})




// TACHE 3
var data = fs.readFileSync('welcome.txt');
console.log( data.toString());



// TACHE 4

var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);




// TACHE 5

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});




