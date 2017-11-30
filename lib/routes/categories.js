const express = require( 'express' );
const router = express.Router();
const bodyParser = require('body-parser').json();

router
.get('/', (req, res, next) => {
    Category.find(req.query).lean()
        .then(categories => res.send(categories))
        .catch(next);
})

.post('/', (req, res, next) => {
    new Category(req.body).save()
        .then(category => res.json(category))
        .catch(next)
})
module.exports = router;