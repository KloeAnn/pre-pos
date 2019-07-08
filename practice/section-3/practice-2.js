'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i=0;i<collectionA.length;i++){
    for (var j=0;j<objectB.value.length;j++) {
      if(collectionA[i].key==objectB.value[j]){

        collectionA[i].count=collectionA[i].count-Math.floor(collectionA[i].count/3)
        break
      }
    }
  }
  console.log(Math.ceil(5/3))
  return collectionA;
}
