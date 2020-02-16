const router = require('express').Router();
let Docu = require('../models/docu.model');

router.route('/').get((req, res) => {
    Docu.find()
        .then(docu => res.json(docu))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const claim = req.body.description;
    const streetaddress = req.body.description;
    const city = req.body.description;
    const state = req.body.description;
    const country = req.body.description;
    const zipcode = Number(req.body.duration);
    const cost = Number(req.body.duration);
    const dateofaccident = Date.parse(req.body.date);

    const newDocu = new Docu({
        name,
        claim,
        streetaddress,
        city,
        state,
        country,
        zipcode,
        description,
        cost,
        dateofaccident,
    });

    newDocu.save()
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
        .then(docu => {
            docu.name = req.body.name;
            docu.claim = req.body.description;
            docu.streetaddress = req.body.description;
            docu.city = req.body.description;
            docu.state = req.body.description;
            docu.country = req.body.description;
            docu.zipcode = Number(req.body.duration);
            docu.description = req.body.description;
            docu.cost = Number(req.body.duration);
            docu.dateofaccident = Date.parse(req.body.date);

            docu.save()
                .then(() => res.json('Document updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;