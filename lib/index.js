"use strict";

const rJson = require("r-json");

/**
 * safeRJson
 * A convenient JSON file reader.
 *
 * If you want to use the syncronous version, do not pass the callback function.
 *
 * @name exports
 * @function
 * @param {String} path The path to the JSON file.
 * @param {Object} def The default value in case the file doesn't exist.
 * @param {Function} cb The callback function.
 */
module.exports = (path, def, cb) => {
    if (typeof def === "function") {
        cb = def;
        def = null;
    }
    def = def || {};
    if (cb) {
        rJson(path, (err, data) => {
            if (err) {
                if (err.code === "ENOENT") {
                    return cb(null, def);
                }
                return cb(err);
            }
            cb(null, data);
        });
    } else {
        try {
            def = rJson(path);
        } catch (e) {
            if (e.code === "ENOENT") {
                return def;
            }
            throw e;
        }
        return def;
    }
};
