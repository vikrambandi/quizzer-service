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
		.then(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
		.then(docs => res.send(docs)).catch(err => res.send(err));
});

router.get('/:id', function (req, res) {
	db.collection('collections')
		.doc(req.query.id)
		.get()
		.then(doc => res.send({ id: doc.id, ...doc.data() }))
		.catch(err => res.send(err));
});

module.exports = router;