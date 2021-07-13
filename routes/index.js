  
var router = require('express').Router();

// router.use('/api', require('/'));

router.get('/', (req,res) => {
    console.log('fadfadsf')
    res.status(200).send('default route')
})

module.exports = router;