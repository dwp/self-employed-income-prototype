const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



// ROUTES FOR THE ITERATION 1


// se-income

router.post('/iteration001/se-income', (req, res) => {
  res.redirect('/iteration001/national-insurance')
})
;


// national-insurance

router.post('/iteration001/national-insurance', (req, res) => {
  res.redirect('/iteration001/income-tax')
})
;


// income-tax

router.post('/iteration001/income-tax', (req, res) => {
  res.redirect('/iteration001/pensions')
})
;


// pensions

router.post('/iteration001/pensions', (req, res) => {
  res.redirect('/iteration001/vehicle-expenses')
})
;



module.exports = router
