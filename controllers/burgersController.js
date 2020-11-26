const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


// Get all the burgers
router.get("/", (req, res, next) => {
    burger.all((data) => {
        console.log("Burger controller got this data: ", data);
        res.render("index", {
            burgersToRender : data
        })
    })
});


// Create a new burger
router.post("/api/burgers", (req, res, next) => {
    burger.create()
});


// Update the state of a burger
router.put("/api/burgers/:id", (req, res, next) => {

});

module.exports = router;