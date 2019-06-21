# ng_universities
A package to retrieve the list of universities in Nigeria approved by the Nigerian University Commission (NUC)

[![Build Status](https://travis-ci.org/georgeben/ng_universities.svg?branch=master)](https://travis-ci.org/georgeben/ng_universities)

[![Coverage Status](https://coveralls.io/repos/github/georgeben/ng_universities/badge.svg?branch=master)](https://coveralls.io/github/georgeben/ng_universities?branch=master)

## Getting started.
Install this package from npm by running the command `npm install ng_universities`

## API
```js
var ng_universities = require('ng_universities')
```

### getUniversities(category)
The `getUniversities()` function takes in a category of the university which can be "public", "private", "federal" or "state" and returns the list of universities. 
If no parameter is supplied, `getUniversities()` returns a list of all the universities.


```js
//EXAMPLE
const ng_universities = require('ng_universities');
let federalUniversities = ng_universities.getUniversities("federal")
console.log(`Federal Universities: ${federalUniversities} \n`)

```

## Tests
Run `npm test` to run tests

### Author
George Benjamin

### License
[MIT](https://opensource.org/licenses/MIT)
