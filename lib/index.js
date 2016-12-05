"use strict";

const rJson = require("r-json");

/**
 * safeRJson
 * A convenient JSON file reader.
 *
 * @name safeRJson
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
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
    }
};
