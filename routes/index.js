  
var router = require('express').Router();

// router.use('/api', require('/'));

router.get('/contact', (req,res) => {
    console.log('fadfadsf')
    res.status(200).send('contacts displayed')
})

module.exports = router;