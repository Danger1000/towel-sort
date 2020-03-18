module.exports = function towelSort (matrix) {
    if(!matrix) return [];
    let resultArray=matrix.map(function (item,index){
        if(index&1) return item.reverse();
        else return item;
    });
  return resultArrarray.flat(1);
}
