const testNum = num => {
  return new Promise((reject, resolve) => {
    if (num > 10) {
      resolve(num + " " + "is greater than 10");
    } else {
      reject((num + " "  +  "is less than 10 "));
    }
  });
};

testNum(9).then(result => console.log(result)); 
testNum(11).catch(error => console.log(error)); 


