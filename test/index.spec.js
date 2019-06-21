const { getUniversities } = require('../index');
const fs = require('fs')
const expect = require('chai').expect
const path = require('path')

describe('index.js', function(){
    let universities = []

    before(function(done){
        universities = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/universities.json'), 'utf-8'))
        done()
    })

    it('smoke tests', function(){
        expect(1).to.equal(1)
    })

    it('should return list of all universities', function(){
        universities = JSON.stringify(universities)
        expect(getUniversities()).to.deep.equal(universities)
    })

    it('should throw an error if a wrong parameter for category is passed', function(){
        expect(function(){
            getUniversities(1)
        }).to.throw('IllegalArgumentException - Category must be a string')
    })
})

