var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i=0; i<num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableName, callBack) {
        var queryStr = "SELECT * FROM " + tableName + ";";
        connection.query(queryStr, function(err, result){
            if(err) {
                throw err;
            }
            callBack(result);
        })
    },

    insertOne: function(tableName, cols, vals, callBack) {
        var queryStr = "INSERT INTO " + tableName + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";

        console.log(queryStr);

        connection.query(queryStr, vals, function(err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        })
    },

    updateOne: function(tableName, objColVals, condition, callBack) {
        var queryStr = "UPDATE " + tableName + " SET " + objToSql(objColVals) + " WHERE " + condition;

        console.log(queryStr);
        connection.query(queryStr, function(err, result) {
            if (err) {
                throw err;
            }

            callBack(result);
        })
    }
}


module.exports = orm;
