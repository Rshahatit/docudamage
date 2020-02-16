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
    const address = req.body.description;
    const zipcode = Number(req.body.duration);
    const description = req.body.description;
    const cost = Number(req.body.duration);
    const dateofaccident = Date.parse(req.body.date);

    const newDocu = new Docu({
        name,
        claim,
        address,
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
        .then(Docu => {
            docu.name = req.body.name;
            docu.claim = req.body.description;
            docu.address = req.body.description;
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