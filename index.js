function updateObjectWithKeyAndValue(obj,key,val){
return Object.assign({},obj, {[key] : val})
 //  object.assign (new obj, obj you are copying, {new key value pair})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key,val){
  object[key] = val
  return object
}

function deleteFromObjectByKey(obj,key){
  let copy = object.assign({}, obj)
  delete copy[key]
  return copy
}
