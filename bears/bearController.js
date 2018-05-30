const router = require('express').Router();
const Bear = require('./bearModel');

router
  .route('/')
  .get((req, res) => {
    Bear.find()
      .then(bearObj => {
        res.status(200).json(bearObj);
      })
      .catch(err => {
        res.status(404).json(err);
      })
  })
  .post((req, res) => {
    const bearData = req.body;

    const bear = new Bear(bearData);

    bear.save()
      .then(b => {
        res.status(201).json(b);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;

    Bear.findById(id)
      .then(bearById => {
        res.status(200).json(bearById);
      })
      .catch(err => {
        res.status(404).json(err);
      })
  })
  .delete((req, res) => {
    const { id } = req.params;
    const foundBear = Bear.find(bear => bear.id === id);

      bear = Bear.filter( bear => bear.id !== id);
  })
  .put((req, res) => {
    res.status(200).json({ status: 'please implement PUT functionality' });
  });

module.exports = router;
