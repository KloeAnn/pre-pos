'use strict';

function countSameElements(collection) {
  var res=[]
  for(var i=0;i<collection.length;i++){
    if(i==0){
      res.push({key:collection[i],count:1})
    }else {
      for(var j=0;j<res.length;j++){
        if(collection[i]==res[j].key){
          res[j].count++
          break
        }else{
          if(j==res.length-1){
          res.push({key:collection[i],count:1})
            break
          }
        }
      }
    }
  }
  return res;
}
