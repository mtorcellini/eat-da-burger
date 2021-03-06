const connection = require("./connection");

// Convert object key/val pairs to SQL syntax
function objToSql(obj) {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        // Add double quotes to value
        value = "\"" + value + "\"";
        arr.push(`${key} = ${value}`);
    }
    return arr.toString();
};

// Add string of ?s to parameterize queries
function printQs(num) {
    let arr = [];
    for (let i=0; i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {

    selectAll(table, cb) {
        const query = "SELECT * FROM ??;";
        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne(table, cols, vals, cb) {
        const query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQs(vals.length)});`
        console.log("insertOne: " + query);
        connection.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne(table, objColVals, condition, cb) {
        const query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
        console.log("updateOne: " + query);
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }

}


module.exports = orm;