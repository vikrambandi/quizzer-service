import express from 'express';
import db from '../db';

const router = express.Router();

// define the about route
router.post('/', (req, res) => {
    console.log(req.body);
    const docRef = db.collection('games').doc('game');

    docRef.set({
        ...req.body
    }).then(data => res.send('/games api post request')).catch(err => res.send(err))

})

router.get('/:id', function (req, res) {
    console.log(req.body);
    res.send('/games api get request');
})

module.exports = router