const express = require('express');
const router = express.Router();
const Programmer = require('../models/Programmer');

router.get('/programmers', async (req, res) => {
	const programmers = await Programmer.find();
	res.send({ programmers });
});

router.post('/programmers', (req, res, next) => {
	Programmer.create(req.body)
		.then(programmer => res.send(programmer))
		//.catch(e => console.log(e));
		.catch(next);

	// Try catch needs the err paramater to work OR change mongoose promise to global promise
	// try {
	// 	const programmer = await Programmer.create(req.body);
	// 	res.send(programmer);
	// } catch (err) {
	// 	console.log(err);
	// 	res.send('Something went wrong');
	// }

	// const { name, price, languages, available } = req.body;
	// const programmer = new Programmer({
	// 	name,
	// 	price,
	// 	languages,
	// 	available
	// });
	// await programmer.save();
});

router.put('/programmers/:id', (req, res) => {
	res.send({ message: req.params.id });
});

router.delete('/programmers/:id', (req, res) => {
	res.send({ message: 'DELETE' });
});

module.exports = router;
