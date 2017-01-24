"use strict";

module.exports = function (app) {
    app.route("/")
        .get(function (req, res) {
            res.sendFile(process.cwd() + "/public/index.html");
        });
    
    app.route("/:path")
        .get(function (req, res) {
            var path = req.params.path;
            res.json(getTimestamp(path));
        });
};

function getTimestamp(timestamp) {
    var result = {
        "unix": null,
        "natural": null
    };
    
    var regex = /^[0-9]+$/;
    var checkUnix = regex.test(timestamp);
    var date = Date.parse(timestamp);
    
    if (checkUnix) {
        result.unix = timestamp;
        result.natural = getNatural(timestamp * 1000);
    } else if (!isNaN(date)) {
        result.unix = date;
        result.natural = getNatural(timestamp);
    } 
    return result;
}

function getNatural(timestamp) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var m = date.getMonth();
    var month = months[m];
    var day = date.getDate();
    var naturalDate = month + " " + day + ", " + year;
    
    return naturalDate;
}
            