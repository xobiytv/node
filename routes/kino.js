const express = require('express');
const Kino = require('../model/Kino');
const router = express.Router();

/* GET home page. */
router.get('/kino', function(req, res, next) {
  res.render('kino', { title: 'Express' });
});

router.post('/kino', function(req, res, next) {
    const kino = new Kino({
        title: 'cab',
        author: 'abcdwqwef',
        published: true,
        comment : [
            {message: 'zo`r5'}
        ],
        meta: {
            votes: 400,
            listen: 4
        }
    });

    kino.save((err, data) => {
        if(err) 
            console.log(err);
        res.json(data)
    })
});

// update 1
// router.put('/update', (req, res) => {
//     Kino.update({ published: true},  {published: false}, (err, data) => {
//         res.json(data)
//     })
// })
// // titlni ham o`zgartirish
// router.put('/update1', (req, res) => {
//     Kino.update({ published: false},  {published: true, title: 'Alan' }, (err, data) => {
//         res.json(data)
//     })
// })

// router.put('/update2', (req, res) => {
//     Kino.update({ published: false},  {published: true }, {multi: true}, (err, data) => {
//         res.json(data)
//     })
// })

// router.put('/update2', (req, res) => {

//     Kino.findByIdAndUpdate("6120e377d0005c13a8859fff", {title: 'Aziz', author: 'Fazliddin'}, (err, data) => {
//         res.json(data)
//     })
// })

// Remove :

// findOne()
// FindByid()
// FindOneAndRemove()
// Remove()

// id orqali topib o`chirish
// router.delete('/remove', (req, res) => {
//     Kino.findById('6120e377d0005c13a8859fff', (err, data) =>  {
//         data.remove((err, data) => {
//             res.json(data)
//         })
//     })
// })

// router.delete('/remove', (req, res) => {
//     Kino.findOneAndDelete({published: false} ,(err, data) =>  {
//         data.remove((err, data) => {
//             res.json(data)
//         })
//     })
// })

// router.delete('/remove', (req, res) => {
//     Kino.find({}, (err, data) => {
//         data.remove((err, data) => {
//             res.json(data)
//         })
//     })
// })

// 1
// router.get('/search', (req, res) => {
//     Kino.find({published: true, title: "kino6"}, (err, data) => {
//         res.json(data);
//     })
// })

//2
// router.get('/search', (req, res) => {
//     Kino.find({published: true}, "title comment", (err, data) => {
//         res.json(data);
//     })
// })

// 3
// router.get('/search', (req, res) => {
//     Kino.findOne({published: true}, "title", (err, data) => {
//         res.json(data);
//     })
// })

// 4
// router.get('/search', (req, res) => {
//     Kino.find({_id: "6124db92642dec0e54c61a23"}, (err, data) => {
//         res.json(data);
//     })
// })

// 5
// router.get('/search', (req, res) => {
//     Kino.findById({_id: "6124db92642dec0e54c61a23"}, (err, data) => {
//         res.json(data);
//     })
// })

 // limit
// router.get('/limit', (req, res) => {
//     Kino.find({}, (err,data) => {
//         res.json(data)
//     }).limit(1)
// })

// skip
// router.get('/limit', (req, res) => {
//     Kino.find({}, (err,data) => {
//         res.json(data)
//     }).skip(4)
// })

// sort
// router.get('/limit', (req, res) => {
//     Kino.find({}, (err,data) => {
//         res.json(data)
//     }).sort({
//         // title: -1,
//         'meta.votes': 1
//     })
// })



// Agregatlar

router.get('/agregat', ( req, res) => {
    Kino.aggregate([
        // {$match: {published: true}}
        // {$group: {_id: '$author', total: {$sum: 1}}}

        // {$project: {title :1, author: 1}}

        {$sort: {author: 1}},
        {$skip: 2},
        {$limit: 2},


    ], (err,data) => {
        res.json(data)
    })
})

module.exports = router;
