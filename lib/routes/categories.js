const express = require( 'express' );
const router = express.Router();
const Category = require('../models/category');

router
.get('/', (req, res, next) => {
    Category.find(req.query).lean()
        .then(categories => res.send(categories))
        .catch(next);
})

.get('/:id', (req, res, body) => {
    Category.findById(req.params.id).lean()
        .then(category => {
            if(!category) {
                throw { code: 404, error: `id $(params.id) does not exist`};
            }
            else res.json(category);
        })
        .catch(next);
})

.post('/', (req, res, next) => {
    new Category(req.body).save()
        .then(category => res.json(category))
        .catch(next)
})

.delete('/:id', (req, res, next) => {
    Category.findByIdAndRemove(req.params.id)
        .then(result => {
            const exists = result !=null;
            res.json({ removed: exists });
        })
        .catch(next);
});

module.exports = router;