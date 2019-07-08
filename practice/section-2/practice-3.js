'use strict';

function countSameElements(collection) {
  var res=[],s,k,reg=/[1-9][0-9]*/g;
  for(var i=0;i<collection.length;i++){
    if(i==0){
      if(collection[i].length==1)
        res.push({name:collection[i],summary:1})
      else {
        k=collection[0]
        s=parseInt(collection[i].match(reg)[0])
        res.push({name:k,
          summary:s})
      }
    }else {
      for(var j=0;j<res.length;j++){
        if(collection[i][0]==res[j].name){
          if(collection[i].length==1)
            res[j].summary++
          else {
            s=parseInt(collection[i].match(reg)[0])
            res[j].summary+=s
          }
          break
        }else{
          if(j==res.length-1){
            if(collection[i].length==1)
              res.push({name:collection[i],summary:1})
            else {
              k=collection[i][0]
              s=parseInt(collection[i].match(reg)[0])
              res.push({name:k,
                summary:s})
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
