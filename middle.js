const middle = function(arr){
  if(arr.length<=2){
      return [];
  }else if(arr.length %2 === 0){
      let middle1 = arr.length/2-1;
      let middle2 = arr.length/2;
      return arr[middle1],arr[middle2];
  }else{
   return [arr[Math.floor(arr.length / 2)]];
  }
}
module.exports = middle;