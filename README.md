
# safe-r-json

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/safe-r-json.svg)](https://www.npmjs.com/package/safe-r-json) [![Downloads](https://img.shields.io/npm/dt/safe-r-json.svg)](https://www.npmjs.com/package/safe-r-json) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A convenient JSON file reader.

## :cloud: Installation

```sh
$ npm i --save safe-r-json
```


## :clipboard: Example



```js
const safeRJson = require("safe-r-json");

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
```

## :memo: Documentation


### `exports(path, def, cb)`
safeRJson
A convenient JSON file reader.

If you want to use the syncronous version, do not pass the callback function.

#### Params
- **String** `path`: The path to the JSON file.
- **Object** `def`: The default value in case the file doesn't exist.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png


[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
