const loanjs = require('loanjs')

var loan = new loanjs.Loan(
    1000, // amount
    12,   // installments number
    5,    // interest rate
    true  // diminishing
  )

  console.log(loan)