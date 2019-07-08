'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var res=[]
  for(var i=0;i<collectionA.length;i++){
    if(i==0){
      res.push({key:collectionA[i],count:1})
      console.log("aa"+" "+res)
    }else {
      for(var j=0;j<res.length;j++){
        if(collectionA[i]==res[j].key){
          res[j].count++
          break
        }else{
          if(j==res.length-1){
            res.push({key:collectionA[i],count:1})
            break
          }
        }
      }
      console.log("bb"+" "+collectionA[i])
    }
  }
  for(var i=0;i<res.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(res[i].key==objectB.value[j]){
        res[i].count-=Math.floor(res[i].count/3)
      }
    }
  }
  return res
}
