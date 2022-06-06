const loanjs = require('loanjs')

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)

// var loan = new loanjs.Loan(
//     1000, // amount
//     12,   // installments number
//     5,    // interest rate
//     true  // diminishing
//   )

//   console.log(loan)