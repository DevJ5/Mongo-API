const express = require('express');
const router = express.Router();
const Programmer = require('../models/Programmer');

router.get('/programmers', (req, res, next) => {
	Programmer.find()
		.then(programmers => res.send(programmers))
		.catch(next);
});

router.post('/programmers', (req, res, next) => {
	Programmer.create(req.body)
		.then(programmer => res.send(programmer))
		.catch(next);
});

router.put('/programmers/:id', (req, res, next) => {
	Programmer.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(() => {
			Programmer.findById(req.params.id)
				.then(programmer => res.send(programmer))
				.catch(e => console.log(e));
		})
		.catch(next);
});

router.delete('/programmers/:id', (req, res, next) => {
	Programmer.findOneAndDelete({ _id: req.params.id })
		.then(programmer => res.send(programmer))
		.catch(next);
});

module.exports = router;
