
/** 
 * Function to retrieve list of selected universities
 * @param {String} category - The category of university. Accepted values include "public", "private", "state", "federal"
 * @returns {Array} - An array containing the list of universities
 * @throws {IllegalArgumentException}
 */
function getUniversities(category){
    if(category){
        if(typeof(category) != "string" ){
            throw new Error("IllegalArgumentException - Category must be a string")
        }
        category = category.toLowerCase()
    }
    
    universities = require('./db/universities.json')
    
    if(category == undefined){
        return JSON.stringify(universities)
    }else if (category == "federal"){
        return JSON.stringify(universities.filter(function(item){
            return item.type == "Federal"
        }))
    }else if(category == "state"){
        return JSON.stringify(universities.filter(function(item){
            return item.type == "State"
        }))
    }else if(category == "private"){
        return JSON.stringify(universities.filter(function(item){
            return item.type == "Private"
        }))
    }else if(category == "public"){
        return JSON.stringify(universities.filter(function(item){
            return item.type == "State" || item.type == "Federal"
        }))
    }else{
        return {}
    }
}

exports.getUniversities = getUniversities;