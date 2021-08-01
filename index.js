// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driv, firstKey, val){
    const updatedDrivers = {...driv}
    updatedDrivers[firstKey] = val
    return updatedDrivers

//   return  Object.assign({}, driv, {firstKey:val}) this no work b/c sees firstKey as an actual name key
}

function destructivelyUpdateDriverWithKeyAndValue(driv, firstKey, val){
    driv[firstKey] = val 
    return driv 
}
function deleteFromDriverByKey(driv, firstKey){
    const copyDriver = {... driv}
    delete copyDriver[firstKey]
    return copyDriver
}

function destructivelyDeleteFromDriverByKey(driv, firstKey){
    delete driv[firstKey]
    return driv
}
