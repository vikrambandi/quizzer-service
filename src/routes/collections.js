import express from 'express';
import db from '../db';

const router = express.Router();

router.post('/', (req, res) => {
	console.log(req.body);
	const docRef = db.collection('collections').doc();

	docRef.set({
		...req.body
	}).then(data => res.send(data)).catch(err => res.send(err));

});

router.get('/', (req, res) => {
	db.collection('collections')
		.get()
		.then(snapshot => { console.log(snapshot); return snapshot.docs.map(doc => doc.data()); })
		.then(docs => res.send(docs)).catch(err => res.send(err));
});

router.get('/:id', function (req, res) {
	console.log(req.body);
	res.send('/games api get request');
});

module.exports = router;