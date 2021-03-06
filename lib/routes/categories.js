const express = require( 'express' );
const router = express.Router();
const Category = require('../models/category');

router
.get('/', (req, res, next) => {
    Category.find(req.query).lean()
        .then(categories => setTimeout(() => res.send(categories),1000))
        .catch(next);
})

.get('/:id', (req, res, next) => {
    Category.findById(req.params.id).lean()
        .then(category => {
            if(!category) {
                throw { code: 404, error: `id ${params.id} does not exist`};
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

.put('/:id', (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, { new: true , runValidators: true })
    .then(category => {
        console.log('in server routes', category);
        res.send(category)
    })
    .catch(next);
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