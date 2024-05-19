const expres = require("express");
const mongoose = require ("mongoose");
const Review = require("../Models/Review.models")

const getReview = (req, res) => {

    Review.find({})
        .then((review) => {
            res.status(200).json(review);
        })
        .catch((err) => {
            res.status(500).json({ message: "Something went wrong", err });
        });
};

const createReview = (req, res) => {
    const review = new Review({
        ReviewId:req.body.ReviewId,
        Rating  :req.body.Rating,
        ReviewBy:req.body.ReviewBy,
        Description:req.body.Description,
    })

    review.save()
        .then(() => {
            res.status(201).json({ message: "Review created SuceessFully" });

        })
        .catch((err) => {
            res.status(500).json({ message: "Something went to wrong", err })
        });
};

// const updateReview = (req, res) => {
//     const id = req.params.id;
//     const { ReviewId,Rating,ReviewBy,Description} = req.body;

// };

const deleteReview = (req, res) => {
    const id = req.params.id;
    Review.findByIdandRemove(id, (err, review) => {
        if (err) {
            res.status(500).json({ message: "Something went to wrong" });
        } else if (!review) {
            res.status(404).json({
                message: "Use not found"
            });
        } else {
            res.staus(200).json(review)
        }
    });
};

// const loginReview = (req, res) => {
//     const {username} = req.params
//     console.log(username)
//     res.status(200).json({message:"ok"});
// }


module.exports = { getReview, createReview,  deleteReview, };