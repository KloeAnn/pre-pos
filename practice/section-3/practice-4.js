'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var res=[]
  var c
  for(var i=0;i<collectionA.length;i++){
    if(i==0){
      if(collectionA[i].indexOf("-")==-1)
        res.push({key:collectionA[i],count:1})
      else {
        res.push({key:collectionA[i].split("-")[0],
          count:collectionA[i].split("-")[1]})
      }
    }else {
      for(var j=0;j<res.length;j++){
        if(collectionA[i]==res[j].key){
          if(collectionA[i].indexOf("-")==-1)
            res[j].count++
          else {
            c=parseInt(collectionA[i].split("-")[1])
            res[j].count+=c
          }
          break
        }else{
          if(j==res.length-1){
            if(collectionA[i].indexOf("-")==-1)
              res.push({key:collectionA[i],count:1})
            else {
              c=parseInt(collectionA[i].split("-")[1])
              res.push({key:collectionA[i].split("-")[0],
                count:c})
            }
            break
          }
        }
      }
    }
  }
  for(var i=0;i<res.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(res[i].key==objectB.value[j]){
        res[i].count-=Math.floor(res[i].count/3)
      }
    }
  }
  console.log(res)
  return res
}
