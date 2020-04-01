const Myfunction = function(...all) {
	return all.reduce((acc,item) => {
		return acc + item;
	});
}

console.log(Myfunction(1,2,3,4,5,6));


const optellen = function(x, y, z) {
    return x + y + z;
  }
  
  let nums = [1, 2, 3];
  
  console.log(optellen(...nums));