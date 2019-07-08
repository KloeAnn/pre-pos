'use strict';

function countSameElements(collection) {
  var res=[]
  var c
  for(var i=0;i<collection.length;i++){
    if(i==0){
      if(collection[i].indexOf("-")==-1)
      res.push({key:collection[i],count:1})
      else {
        res.push({key:collection[i].split("-")[0],
          count:collection[i].split("-")[1]})
      }
    }else {
      for(var j=0;j<res.length;j++){
        if(collection[i]==res[j].key){
          if(collection[i].indexOf("-")==-1)
              res[j].count++
          else {
            c=parseInt(collection[i].split("-")[1])
            res[j].count+=c
          }
          break
        }else{
          if(j==res.length-1){
            if(collection[i].indexOf("-")==-1)
              res.push({key:collection[i],count:1})
            else {
              c=parseInt(collection[i].split("-")[1])
              res.push({key:collection[i].split("-")[0],
                count:c})
            }
            break
          }
        }
      }
    }
  }
  console.log(res)
  return res;
}
