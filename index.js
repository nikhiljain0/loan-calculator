const loanjs = require('loanjs')

var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

// var loan = new loanjs.Loan(
//     1000, // amount
//     12,   // installments number
//     5,    // interest rate
//     true  // diminishing
//   )

//   console.log(loan)