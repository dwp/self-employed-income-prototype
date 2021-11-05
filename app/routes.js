const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// copy the const name and the file path to new version

const iteration001 = require('./routes/iteration001');;


//copy the router use and update the sprint version

router.use(iteration001);

module.exports = router
