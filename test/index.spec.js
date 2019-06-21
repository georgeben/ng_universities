const { getUniversities } = require('../index');
const fs = require('fs')
const expect = require('chai').expect
const path = require('path')

describe('index.js', function(){
    let universities = []

    before(function(done){
        universities = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/universities.json'), 'utf-8'))
        // universities = JSON.stringify(universities)
        done()
    })

    beforeEach(function(){
        universities = JSON.stringify(universities)
        universities = JSON.parse(universities)
    })


    it('smoke tests', function(){
        expect(1).to.equal(1)
    })

    it('should return list of all universities', function(){
        expect(getUniversities()).to.deep.equal(JSON.stringify(universities))
    })

    it('should return the list of private universities', function(){
        private_universities = JSON.stringify(universities.filter(function(item){
            return item.type == "Private"
        }))
        expect(getUniversities("private")).to.deep.equal(private_universities)
    })

    it('should return the list of federal universities', function(){
        federal_universities = JSON.stringify(universities.filter(function(item){
            return item.type == "Federal"
        }))
        expect(getUniversities("federal")).to.deep.equal(federal_universities)
    })

    it('should return the list of state universities', function(){
        state_universities = JSON.stringify(universities.filter(function(item){
            return item.type == "State"
        }))
        expect(getUniversities("state")).to.deep.equal(state_universities)
    })

    it('should return the list of public universities', function(){
        public_universities = JSON.stringify(universities.filter(function(item){
            return item.type == "State" || item.type == "Federal"
        }))
        expect(getUniversities("public")).to.deep.equal(public_universities)
    })

    it('should throw an error if a wrong parameter for category is passed', function(){
        expect(function(){
            getUniversities(1)
        }).to.throw('IllegalArgumentException - Category must be a string')
    })
})

