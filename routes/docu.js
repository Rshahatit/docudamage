const router = require('express').Router();
let Docu = require('../models/docu.model');

router.route('/').get((req, res) => {
    Docu.find()
        .then(docu => res.json(docu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const cost = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newDocu = new Docu({
        username,
        description,
        cost,
        date,
    });

    newEDocu.save()
        .then(() => res.json('Document created'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Docu.findById(req.params.id)
        .then(docu => res.json(docu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Docu.findByIdAndDelete(req.params.id)
        .then(() => res.json('Document deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Docu.findById(req.params.id)
        .then(Docu => {
            docu.username = req.body.username;
            docu.description = req.body.description;
            docu.cost = Number(req.body.duration);
            docu.date = Date.parse(req.body.date);

            docu.save()
                .then(() => res.json('Document updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;