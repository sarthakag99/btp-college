const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');

 

//Routes
router.get('/*', (req, res) => {
    BlogPost.find({ })
        .then((data) => {
            console.log('Data:', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error:', error);
        });
});


router.post('/save', (req, res) => {
    console.log('Body:', req.body);

    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500 ).json({
                msg: 'Sorry, Interal Server errors'
            });
        } else {
            // BlogPost
            res.json({
                msg: 'Your Data has been saved!!!!'
            });
        }
    });
});



router.get('/name', (req, res) => {
    const data = {
        username: 'agarwal',
        age: 6
    };
    res.json(data);
});

// router.get('/getclassroom', (req, res) => {
//     console.log("testreq "+req.query.classid);
//     // res.send("server ");
//     BlogPost.findOne({
//         _id:req.query.classid,

//     })
//         .then((data) => {
//             console.log('Data:', data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.log('error:', error);
//         });
// });



module.exports = router;