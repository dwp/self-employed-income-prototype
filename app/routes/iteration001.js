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


// vehicle-expenses

router.post('/iteration001/vehicle-expenses', function(req, res) {
  if (req.body['vehicle-expenses'] === 'yes') {
    res.redirect('vehicle-type');
  } if (req.body['vehicle-expenses'] === 'no') {
    res.redirect('other-expenses');
  }
});


// vehicle-type

router.post('/iteration001/vehicle-type', function(req, res) {
  if (req.body['vehicle-type'] === 'business-vehicle') {
    res.redirect('vehicle-expenses-type');
  } if (req.body['vehicle-type'] === 'taxi') {
    res.redirect('vehicle-flat-rate');
  } if (req.body['vehicle-type'] === 'car') {
    res.redirect('vehicle-flat-rate');
  } if (req.body['vehicle-type'] === 'motorbike') {
    res.redirect('vehicle-expenses-type');
  }
});


// vehicle-expenses-type

router.post('/iteration001/vehicle-expenses-type', function(req, res) {
  if (req.body['vehicle-expenses-type'] === 'flat-rate') {
    res.redirect('vehicle-flat-rate');
  } if (req.body['vehicle-expenses-type'] === 'actual-costs') {
    res.redirect('vehicle-actual-costs');
  }
});


// vehicle-flat-rate

router.post('/iteration001/vehicle-flat-rate', (req, res) => {
  res.redirect('/iteration001/other-expenses')
})
;


// pensions

router.post('/iteration001/vehicle-actual-costs', (req, res) => {
  res.redirect('/iteration001/other-expenses')
})
;



module.exports = router
