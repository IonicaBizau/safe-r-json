"use strict";

const safeRJson = require("../lib");

console.log(safeRJson("path/to/a/file/that/does/not/exist"));
// => {}

// If you expect an array, simply pass it there
console.log(safeRJson("path/to/a/file/that/does/not/exist", []));
// => []

safeRJson("path/to/a/file/that/does/not/exist", [], (err, data) => {
    console.log(err || data);
    // => []
});

safeRJson(`${__dirname}/data.json`, (err, data) => {
    console.log(data);
    // => { hello: 'world' }
});
