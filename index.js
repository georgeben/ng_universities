
/** 
 * Function to retrieve list of selected universities
 * @param {String} category - The category of university. Accepted values include "public", "private", "state", "federal"
 * @returns {Array} - An array containing the list of universities
 * @throws {IllegalArgumentException}
 */
function getUniversities(category){
    if(typeof(category) != "string"){
        throw new Error("IllegalArgumentException - Category must be a string")
    }
    universities = require('./db/universities.json')
    category = category.toLowerCase()
    if(category == undefined){
        return universities
    }else if (category == "federal"){
        return universities.filter(function(item){
            return item.type == "Federal"
        })
    }else if(category == "state"){
        return universities.filter(function(item){
            return item.type == "State"
        })
    }else if(category == "private"){
        return universities.filter(function(item){
            return item.type == "Private"
        })
    }else if(category == "public"){
        return universities.filter(function(item){
            return item.type == "State" || item.type == "Federal"
        })
    }else{
        return {}
    }
}

module.exports = getUniversities;