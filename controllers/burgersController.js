const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


// Get all the burgers
router.get("/", (req, res, next) => {
    burger.all((data) => {
        // console.log("Burger controller got this data: ", data);
        res.render("index", {
            burgersToRender : data
        })
    })
});


// Create a new burger
router.post("/api/burgers", (req, res, next) => {
    console.log(req.body);
    burger.create("name", [req.body.burgerName], (data) => {
        //console.log(data);
        res.status(201).send();
    })
});


// Update the state of a burger
router.put("/api/burgers/:id", (req, res, next) => {
    const condition = "id = " + req.params.id;
    const objColVals = {
        devoured : 1
    };
    burger.update(objColVals, condition, (data) => {
        console.log(data);
        res.status(200).send();
    });

});

module.exports = router;