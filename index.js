function updateObjectWithKeyAndValue(obj,key,val){
 newObj = Object.assign({},obj, {[key] : val})
 //  object.assign (new obj, obj you are copying, {new key value pair})
  return newObj
}