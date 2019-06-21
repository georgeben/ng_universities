const ng_universities = require('../index.js')

let allUniversities = ng_universities.getUniversities()
console.log(`All Universities: ${allUniversities} \n`)

let federalUniversities = ng_universities.getUniversities("federal")
console.log(`Federal Universities: ${federalUniversities} \n`)

let stateUniversities = ng_universities.getUniversities("state")
console.log(`State Universities: ${stateUniversities} \n`)

let publicUniversities = ng_universities.getUniversities("public")
console.log(`Public Universities: ${publicUniversities} \n`)

let privateUniversities = ng_universities.getUniversities("private")
console.log(`Private Universities: ${privateUniversities} \n`)

