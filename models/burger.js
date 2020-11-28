const orm = require("../config/orm");

const burger = {
    all(cb) {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },

    create(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(res);
        });
    },

    update(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (result) => {
            cb(result);
        });
    },


}

module.exports = burger;